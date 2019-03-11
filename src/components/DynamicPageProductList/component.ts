import { Component, Mixins, Prop } from 'vue-property-decorator';
import { TypedNumber } from '@inveasy/strong-types';
import { TableColumn, DynamicElementWrapper, DynamicElementWrapperMixin } from '@inveasy/semstrap';

import RenderWith from './template.html';
import './style.css';

interface SaleDefinition {
  id: string;
  date: number;
  billingId: string;
  customer: string;
  products: string[];
  total: string;
}

interface ProductDefinition {
  id: string;
  reference: string;
  name: string;
  description: string;
  price: string;
}

@RenderWith
@Component({ components: { DynamicElementWrapper }})
export default class Products extends Mixins(DynamicElementWrapperMixin) {
  private products: ProductDefinition[] = null;
  private columns: TableColumn[] = [
    new TableColumn({
      name: ':i18n:products.bindings.product.reference.identifier',
      varName: 'reference',
      sortable: true
    }),
    new TableColumn({
      name: ':i18n:products.bindings.product.name.identifier',
      varName: 'name',
      sortable: true
    }),
    new TableColumn({
      name: ':i18n:products.bindings.product.price.identifier',
      varName: 'price',
      sortable: true,
      sortFunction(a, b, asc) {
        a = new TypedNumber({ value: a, type: 'currency' });
        b = new TypedNumber({ value: b, type: 'currency' });
        const cmp = a.value.cmp(b.value);
        return asc ? cmp : cmp * -1;
      },
      renderFunction(variable) {
        return new TypedNumber({ value: variable, type: 'currency' });
      }
    })
  ];

  get saleProducts() {
    if (!this.products) {
      return [];
    } else {
      const products: ProductDefinition[] = [];
      (this.pageData() as SaleDefinition).products.forEach((productId) =>
        products.push(this.products.find((product) => product.id === productId)));
      return products;
    }
  }

  get elementNameTranslation() {
    return this.$t('products.productList').toString();
  }

  public goToProduct(event: { item: ProductDefinition, rowIndex: number }) {
    this.$router.push('/products/' + event.item.id);
  }

  public created() {
    this.$store.dispatch('getProducts').then((products: ProductDefinition[]) => {
      this.products = products;
    });
  }
}
