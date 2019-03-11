import { Component, Mixins } from 'vue-property-decorator';

import { Bindings, FlowsStorePlugin, DynamicPageElement, WindowManagerMixin } from '@inveasy/semstrap';
import { TypedNumber } from '@inveasy/strong-types';

import { Pool, PageElements } from './PageElements'; // PageElements
import {
  TotalSales,
  TotalProducts,
  TotalEarnings,
  TotalProductsSold,
  AverageProductsPerSale,
  BestSeller,
  EarningsPerDay,
  SoldPerDay,
  SalesPerDay
} from './Flows';
import { DashboardBindings } from './Bindings';

import RenderWith from './template.html';
import KnowMoreDashboardWindow from '../../components/KnowMoreDashboardWindow/component';
import DynamicPageHelpWindow from '../../components/DynamicPageHelpWindow/component';

interface ProductDefinition {
  id: string;
  reference: string;
  name: string;
  description: string;
  price: string;
}

interface SaleDefinition {
  id: string;
  date: number;
  billingId: string;
  customer: string;
  products: string[];
  total: string;
}

@RenderWith
@Component
export default class Dashboard extends Mixins(WindowManagerMixin) {
  public loading: number = 0;
  public error: any = null;
  public edit: boolean = false;

  private products: ProductDefinition[] = null;
  private sales: SaleDefinition[] = null;

  private elements: DynamicPageElement[] = PageElements;

  get pool() {
    return Pool;
  }

  get pageData() {
    if (!this.sales || !this.products) {
      return {};
    } else {
      let totalEarnings = new TypedNumber({ value: 0, type: 'currency', unit: '1' });
      let totalProductsSold = 0;
      const prods: { [pid: string]: number } = {};
      for (const sale of this.sales) {
        const saleTotal = new TypedNumber({ value: sale.total, type: 'currency' });
        totalEarnings = totalEarnings.add(saleTotal);
        totalProductsSold += sale.products.length;
        for (const pid of sale.products) {
          if (!prods[pid]) {
            prods[pid] = 1;
          } else {
            prods[pid] += 1;
          }
        }
      }

      const days = this.sales.filter((val, i, array) => array.findIndex((valu) => valu.date === val.date) === i);

      let bestSeller = '';
      let bestSellerNumber = 0;
      for (const pid in prods) {
        if (prods.hasOwnProperty(pid)) {
          if (prods[pid] > bestSellerNumber) {
            bestSeller = pid;
            bestSellerNumber = prods[pid];
          }
        }
      }

      bestSeller = this.products.find((product) => product.id === bestSeller).name;

      return {
        totalSales: this.sales.length,
        totalProducts: this.products.length,
        totalEarnings,
        totalProductsSold,
        averageProductsPerSale: Math.round(totalProductsSold / this.sales.length * 10) / 10,
        bestSeller,
        salesPerDay: Math.round(this.sales.length / days.length),
        soldPerDay: Math.round(totalProductsSold / days.length),
        earningsPerDay: totalEarnings.divideNumber({ value: days.length, type: 'number' })
      };
    }
  }

  get bindings(): Bindings {
    return DashboardBindings;
  }

  public openKnowMoreWindow() {
    this.openWindow({
      id: 'dashboardKnowMore',
      title: ':i18n:common.knowMore',
      icon: 'question',
      width: 500,
      height: 400,
      component: KnowMoreDashboardWindow,
      centerOnOpen: true
    });
  }

  public openHelpWindow() {
    this.openWindow({
      id: 'dynamicPageHelp',
      title: ':i18n:common.dynamicPageHelp',
      icon: 'question-circle',
      width: 500,
      height: 425,
      component: DynamicPageHelpWindow,
      centerOnOpen: true
    });
  }

  public created() {
    this.loading = 3;
    this.$store.dispatch('getSales').then((sales: SaleDefinition[]) => {
      this.sales = sales;
    }).catch((error) => {
      this.error = error;
    }).finally(() => {
      this.loading -= 1;
    });
    this.$store.dispatch('getProducts').then((products: ProductDefinition[]) => {
      this.products = products;
    }).catch((error) => {
      this.error = error;
    }).finally(() => {
      this.loading -= 1;
    });
    this.$store.dispatch('getDashboardListDef').then((elements: DynamicPageElement[]) => {
      if (elements.length) {
        this.elements = elements;
      }
    }).catch((error) => {
      this.error = error;
    }).finally(() => {
      this.loading -= 1;
    });

    if (!this.$store.state.semstrap || !this.$store.state.semstrap.flows) {
      FlowsStorePlugin(this.$store);
    }
    this.$store.dispatch(`semstrap/flows/groupBindings`, { group: 'dashboard', bindings: () => this.bindings });
    this.$store.dispatch('semstrap/flows/create', TotalSales);
    this.$store.dispatch('semstrap/flows/create', TotalProducts);
    this.$store.dispatch('semstrap/flows/create', TotalEarnings);
    this.$store.dispatch('semstrap/flows/create', TotalProductsSold);
    this.$store.dispatch('semstrap/flows/create', AverageProductsPerSale);
    this.$store.dispatch('semstrap/flows/create', BestSeller);
    this.$store.dispatch('semstrap/flows/create', EarningsPerDay);
    this.$store.dispatch('semstrap/flows/create', SoldPerDay);
    this.$store.dispatch('semstrap/flows/create', SalesPerDay);
  }

  public beforeDestroy() {
    // Save elements
    this.$store.commit('dashboardListDef', this.elements);
  }
}
