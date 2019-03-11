import { Component, Vue, Prop } from 'vue-property-decorator';
import { TypedNumber } from '@inveasy/strong-types';
import { TableColumn } from '@inveasy/semstrap';

import RenderWith from './template.html';
import './style.css';

interface ProductDefinition {
  id: string;
  reference: string;
  name: string;
  description: string;
  price: string;
}

@RenderWith
@Component
export default class Products extends Vue {
  private loading: number = 0;
  private error: any = null;
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
      name: ':i18n:products.bindings.product.description.identifier',
      varName: 'description'
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

  public goToProduct(event: { item: ProductDefinition, rowIndex: number }) {
    this.$router.push('/products/' + event.item.id);
  }

  public created() {
    this.loading = 1; // 3;
    // // Load dynamic list definition
    // this.$store.dispatch('getProductsListDef').then((productsListDef, error) => {
    //   this.loading -= 1;
    //   if (error) {
    //     this.error = error;
    //   } else {
    //     this.productsListDef = productsListDef;
    //   }
    // })
    // // Load user defined bindings
    // this.$store.dispatch('getProductExtBindings').then((extBindings, error) => {
    //   this.loading -= 1
    //   if (error) {
    //     this.error = error;
    //   } else {
    //     this.extBindings = extBindings;
    //   }
    // })
    // Load products (actual data)
    this.$store.dispatch('getProducts').then((products: ProductDefinition[]) => {
      this.products = products;
    }).catch((error) => {
      this.error = error;
    }).finally(() => {
      this.loading -= 1;
    });
  }
}
