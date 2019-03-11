import { Component, Prop, Mixins } from 'vue-property-decorator';
import {
  DynamicPageElement,
  FlowsStorePlugin,
  Bindings,
  WindowManagerMixin
} from '@inveasy/semstrap';
import KnowMoreSaleWindow from '../../components/KnowMoreSaleWindow/component';
import { SaleBindings } from '../../data/SaleBindings';
import { DynamicPageProductList } from '../../components/DynamicPageProductList/definition';
import { PageElements } from './PageElements';

import { Total, SaleDate, Customer, ProductCount } from './Flows';

import RenderWith from './template.html';
import DynamicPageHelpWindow from '../../components/DynamicPageHelpWindow/component';

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
export default class Sale extends Mixins(WindowManagerMixin) {
  @Prop({ type: String, required: true }) public saleId: string;

  public loading: number = 0;
  public error: any = null;
  public sale: SaleDefinition = null;
  public elements: DynamicPageElement[] = PageElements;
  public bindings: Bindings = SaleBindings;
  public userBindings: Bindings = {};

  public edit: boolean = false;

  get pool() {
    return [new DynamicPageProductList({ id: 'productList' })];
  }

  get mergedBindings(): Bindings {
    return { ...this.bindings, ...this.userBindings };
  }

  public openKnowMoreWindow() {
    this.openWindow({
      id: 'saleKnowMore',
      title: ':i18n:common.knowMore',
      icon: 'question',
      width: 500,
      height: 400,
      component: KnowMoreSaleWindow,
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
      this.sale = sales.find((sale) => sale.id === this.saleId);
    }).catch((error) => {
      this.error = error;
    }).finally(() => {
      this.loading -= 1;
    });
    this.$store.dispatch('getSalesListDef').then((elements: DynamicPageElement[]) => {
      if (elements.length) {
        this.elements = elements;
      }
    }).catch((error) => {
      this.error = error;
    }).finally(() => {
      this.loading -= 1;
    });
    this.$store.dispatch('getSaleExtBindings').then((userBindings: any) => {
      this.userBindings = userBindings;
    }).catch((error) => {
      this.error = error;
    }).finally(() => {
      this.loading -= 1;
    });

    if (!this.$store.state.semstrap || !this.$store.state.semstrap.flows) {
      FlowsStorePlugin(this.$store);
    }
    this.$store.dispatch(`semstrap/flows/groupBindings`, { group: 'sale', bindings: () => this.mergedBindings });
    this.$store.dispatch('semstrap/flows/create', Total);
    this.$store.dispatch('semstrap/flows/create', SaleDate);
    this.$store.dispatch('semstrap/flows/create', Customer);
    this.$store.dispatch('semstrap/flows/create', ProductCount);
  }

  public beforeDestroy() {
    // Save elements
    this.$store.commit('salesListDef', this.elements);
    this.$store.commit('saleExtBindings', (this.$refs.pooledDP as any).mutableUserBindings);
  }
}
