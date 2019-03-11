export const ProductBindings = {
  id: {
    identifier: 'productId',
    description: 'The database id of the product, highly classified !!',
    type: 'text',
    immutable: true,
    internal: true
  },
  reference: {
    identifier: ':i18n:products.bindings.product.reference.identifier',
    description: ':i18n:products.bindings.product.reference.description',
    type: 'text',
    immutable: true
  },
  name: {
    identifier: ':i18n:products.bindings.product.name.identifier',
    description: ':i18n:products.bindings.product.name.description',
    type: 'text',
    required: true,
    layoutRequired: true
  },
  description: {
    identifier: ':i18n:products.bindings.product.description.identifier',
    description: ':i18n:products.bindings.product.description.description',
    type: 'rich-text'
  },
  price: {
    identifier: ':i18n:products.bindings.product.price.identifier',
    description: ':i18n:products.bindings.product.price.description',
    type: 'currency',
    required: true,
    layoutRequired: true
  }
};
