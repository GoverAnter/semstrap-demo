import {
  DynamicPageInputElement,
  DynamicPageDividerElement,
  DynamicPageStatElement
} from '@inveasy/semstrap';
import { DynamicPageSalesList } from '@/components/DynamicPageSalesList/definition';

export const PageElements = [
  new DynamicPageStatElement({
    identifier: ':i18n:products.priceWithoutVAT',
    useFlow: true,
    flowId: 'priceWithoutVAT',
    adaptivePosition: {
      lg: { x: 2, y: 2, width: 2, height: 3 },
      md: { x: 0, y: 2, width: 2, height: 3 },
      sm: { x: 0, y: 4, width: 2, height: 3 }
    }
  }),
  new DynamicPageStatElement({
    identifier: ':i18n:products.VAT',
    useFlow: true,
    flowId: 'VAT',
    adaptivePosition: {
      lg: { x: 4, y: 2, width: 2, height: 3 },
      md: { x: 2, y: 2, width: 3, height: 3 },
      sm: { x: 2, y: 4, width: 2, height: 3 }
    }
  }),
  new DynamicPageStatElement({
    identifier: ':i18n:products.priceWithVAT',
    useFlow: true,
    flowId: 'priceWithVAT',
    adaptivePosition: {
      lg: { x: 6, y: 2, width: 2, height: 3 },
      md: { x: 5, y: 2, width: 2, height: 3 },
      sm: { x: 1, y: 1, width: 2, height: 3 }
    }
  }),
  new DynamicPageDividerElement({
    noText: true,
    adaptivePosition: {
      lg: { x: 2, y: 23, width: 6, height: 1 },
      md: { x: 1, y: 24, width: 5, height: 1 },
      sm: { x: 0, y: 25, width: 4, height: 1 }
    }
  }),
  new DynamicPageInputElement({
    id: 'name',
    fieldName: 'name',
    unique: true,
    adaptivePosition: {
      lg: { x: 1, y: 25, width: 4, height: 2 },
      md: { x: 1, y: 26, width: 5, height: 2 },
      sm: { x: 0, y: 27, width: 4, height: 2 }
    }
  }),
  new DynamicPageInputElement({
    id: 'description',
    fieldName: 'description',
    unique: true,
    adaptivePosition: {
      lg: { x: 5, y: 25, width: 4, height: 2 },
      md: { x: 1, y: 26, width: 5, height: 2 },
      sm: { x: 0, y: 27, width: 4, height: 2 }
    }
  }),
  new DynamicPageInputElement({
    id: 'price',
    fieldName: 'price',
    unique: true,
    adaptivePosition: {
      lg: { x: 1, y: 27, width: 4, height: 2 },
      md: { x: 1, y: 28, width: 5, height: 2 },
      sm: { x: 0, y: 29, width: 4, height: 2 }
    }
  }),
  new DynamicPageSalesList({
    id: 'salesList',
    identifier: ':i18n:sales.salesList',
    unique: true,
    adaptivePosition: {
      lg: { x: 0, y: 6, width: 10, height: 16 },
      md: { x: 0, y: 7, width: 7, height: 16 },
      sm: { x: 0, y: 8, width: 4, height: 16 },
      xs: { x: 0, y: 8, width: 1, height: 16 }
    }
  })
];
