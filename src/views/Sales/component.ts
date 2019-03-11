import { Component, Vue, Prop } from 'vue-property-decorator';
import { TypedNumber, TypedDateTime } from '@inveasy/strong-types';
import { TableColumn } from '@inveasy/semstrap';

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

@RenderWith
@Component
export default class Sales extends Vue {
  private loading: number = 0;
  private error: any = null;
  private sales: SaleDefinition[] = null;

  private columns: TableColumn[] = [
    new TableColumn({
      name: ':i18n:products.bindings.sale.billingId.identifier',
      varName: 'billingId',
      sortable: true
    }),
    new TableColumn({
      name: ':i18n:products.bindings.sale.date.identifier',
      varName: 'date',
      sortByOriginalValue: true,
      sortable: true,
      renderFunction(variable) {
        return new TypedDateTime({ value: variable, type: 'date' });
      }
    }),
    new TableColumn({
      name: ':i18n:products.bindings.sale.customer.identifier',
      varName: 'customer',
      sortable: true
    }),
    new TableColumn({
      name: ':i18n:products.bindings.sale.products.identifier',
      varName: 'products',
      sortable: true,
      renderFunction(variable) {
        return variable.length;
      }
    }),
    new TableColumn({
      name: ':i18n:products.bindings.sale.total.identifier',
      varName: 'total',
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

  public goToSale(event: { item: SaleDefinition, rowIndex: number }) {
    this.$router.push('/sales/' + event.item.id);
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
    this.$store.dispatch('getSales').then((sales: SaleDefinition[]) => {
      this.sales = sales;
    }).catch((error) => {
      this.error = error;
    }).finally(() => {
      this.loading -= 1;
    });
  }
}
