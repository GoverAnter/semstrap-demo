import { Component, Mixins, Prop } from 'vue-property-decorator';
import { TypedNumber, TypedDateTime } from '@inveasy/strong-types';
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

@RenderWith
@Component({ components: { DynamicElementWrapper }})
export default class Sales extends Mixins(DynamicElementWrapperMixin) {
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
    })
    // new TableColumn({
    //   name: ':i18n:products.bindings.sale.products.identifier',
    //   varName: 'products',
    //   sortable: true,
    //   renderFunction(variable) {
    //     return variable.length;
    //   }
    // }),
    // new TableColumn({
    //   name: ':i18n:products.bindings.sale.total.identifier',
    //   varName: 'total',
    //   sortable: true,
    //   sortFunction(a, b, asc) {
    //     a = new TypedNumber({ value: a, type: 'currency' });
    //     b = new TypedNumber({ value: b, type: 'currency' });
    //     const cmp = a.value.cmp(b.value);
    //     return asc ? cmp : cmp * -1;
    //   },
    //   renderFunction(variable) {
    //     return new TypedNumber({ value: variable, type: 'currency' });
    //   }
    // })
  ];

  get productSales() {
    if (!this.sales) {
      return [];
    } else {
      return this.sales.filter((sale) => sale.products.includes(this.pageData().id));
    }
  }

  get elementNameTranslation() {
    return this.$t('sales.salesList').toString();
  }

  public goToSale(event: { item: SaleDefinition, rowIndex: number }) {
    this.$router.push('/sales/' + event.item.id);
  }

  public created() {
    this.$store.dispatch('getSales').then((sales: SaleDefinition[]) => {
      this.sales = sales;
    });
  }
}
