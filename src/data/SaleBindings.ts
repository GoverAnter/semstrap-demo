export const SaleBindings = {
  id: {
    identifier: 'saleId',
    description: 'The database id of the sale, highly classified !!',
    type: 'text',
    immutable: true,
    internal: true
  },
  date: {
    identifier: ':i18n:products.bindings.sale.date.identifier',
    description: ':i18n:products.bindings.sale.date.description',
    type: 'date',
    immutable: true
  },
  billingId: {
    identifier: ':i18n:products.bindings.sale.billingId.identifier',
    description: ':i18n:products.bindings.sale.billingId.description',
    type: 'text',
    immutable: true
  },
  customer: {
    identifier: ':i18n:products.bindings.sale.customer.identifier',
    description: ':i18n:products.bindings.sale.customer.description',
    type: 'text',
    immutable: true
  },
  products: {
    identifier: ':i18n:products.bindings.sale.products.identifier',
    description: ':i18n:products.bindings.sale.products.description',
    type: 'array[Product]',
    immutable: true
  },
  total: {
    identifier: ':i18n:products.bindings.sale.total.identifier',
    description: ':i18n:products.bindings.sale.total.description',
    type: 'currency',
    immutable: true
  }
};
