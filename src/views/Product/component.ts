import { Component, Prop, Mixins } from 'vue-property-decorator';
import {
  DynamicPageElement,
  FlowsStorePlugin,
  Bindings,
  WindowManagerMixin
} from '@inveasy/semstrap';
import KnowMoreProductWindow from '../../components/KnowMoreProductWindow/component';
import { TypedNumber } from '@inveasy/strong-types';
import { ProductBindings } from '../../data/ProductBindings';
import { PriceWithoutVAT, VAT, PriceWithVAT } from './Flows';

import { PageElements } from './PageElements';
import { DynamicPageSalesList } from '../../components/DynamicPageSalesList/definition';

import RenderWith from './template.html';
import DynamicPageHelpWindow from '../../components/DynamicPageHelpWindow/component';

interface ProductDefinition {
  id: string;
  reference: string;
  name: string;
  description: string;
  price: TypedNumber;
}

@RenderWith
@Component
export default class Product extends Mixins(WindowManagerMixin) {
  @Prop({ type: String, required: true }) public productId: string;

  public loading: number = 0;
  public error: any = null;
  public product: ProductDefinition = null;
  public elements: DynamicPageElement[] = PageElements;
  public bindings: Bindings = ProductBindings;
  public userBindings: Bindings = {};

  public edit: boolean = false;

  get pool() {
    return [new DynamicPageSalesList({ id: 'salesList', unique: true })];
  }

  get mergedBindings(): Bindings {
    return { ...this.bindings, ...this.userBindings };
  }

  public openKnowMoreWindow() {
    this.openWindow({
      id: 'productKnowMore',
      title: ':i18n:common.knowMore',
      icon: 'question',
      width: 500,
      height: 400,
      component: KnowMoreProductWindow,
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
    this.$store.dispatch('getProducts').then((products: ProductDefinition[]) => {
      this.product = products.find((product) => product.id === this.productId);
    }).catch((error) => {
      this.error = error;
    }).finally(() => {
      this.loading -= 1;
    });
    this.$store.dispatch('getProductsListDef').then((elements: DynamicPageElement[]) => {
      if (elements.length) {
        this.elements = elements;
      }
    }).catch((error) => {
      this.error = error;
    }).finally(() => {
      this.loading -= 1;
    });
    this.$store.dispatch('getProductExtBindings').then((userBindings: any) => {
      this.userBindings = userBindings;
    }).catch((error) => {
      this.error = error;
    }).finally(() => {
      this.loading -= 1;
    });

    if (!this.$store.state.semstrap || !this.$store.state.semstrap.flows) {
      FlowsStorePlugin(this.$store);
    }
    this.$store.dispatch(`semstrap/flows/groupBindings`, { group: 'product', bindings: () => this.mergedBindings });
    this.$store.dispatch('semstrap/flows/create', PriceWithoutVAT);
    this.$store.dispatch('semstrap/flows/create', VAT);
    this.$store.dispatch('semstrap/flows/create', PriceWithVAT);
  }

  public beforeDestroy() {
    // Save elements
    this.$store.commit('productsListDef', this.elements);
    this.$store.commit('productExtBindings', (this.$refs.pooledDP as any).mutableUserBindings);
  }
}
