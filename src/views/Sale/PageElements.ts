import {
  DynamicPageStatElement
} from '@inveasy/semstrap';
import { DynamicPageProductList } from '@/components/DynamicPageProductList/definition';

export const PageElements = [
  new DynamicPageStatElement({
    identifier: ':i18n:sales.totalExclVAT',
    useFlow: true,
    flowId: 'total',
    adaptivePosition: {
      lg: { x: 3, y: 1, width: 2, height: 3 },
      md: { x: 1, y: 1, width: 2, height: 3 },
      sm: { x: 0, y: 1, width: 2, height: 3 }
    }
  }),
  new DynamicPageStatElement({
    identifier: ':i18n:sales.productCount',
    useFlow: true,
    flowId: 'productCount',
    adaptivePosition: {
      lg: { x: 5, y: 1, width: 2, height: 3 },
      md: { x: 4, y: 1, width: 2, height: 3 },
      sm: { x: 2, y: 1, width: 2, height: 3 }
    }
  }),
  new DynamicPageStatElement({
    identifier: ':i18n:sales.date',
    useFlow: true,
    flowId: 'date',
    adaptivePosition: {
      lg: { x: 3, y: 4, width: 4, height: 3 },
      md: { x: 2, y: 4, width: 3, height: 3 },
      sm: { x: 1, y: 4, width: 2, height: 3 }
    }
  }),
  new DynamicPageStatElement({
    identifier: ':i18n:sales.customer',
    useFlow: true,
    flowId: 'customer',
    size: 'smaller',
    adaptivePosition: {
      lg: { x: 3, y: 8, width: 4, height: 3 },
      md: { x: 2, y: 8, width: 3, height: 3 },
      sm: { x: 1, y: 7, width: 2, height: 3 }
    }
  }),
  new DynamicPageProductList({
    id: 'productList',
    identifier: ':i18n:products.productList',
    adaptivePosition: {
      lg: { x: 0, y: 14, width: 10, height: 18 },
      md: { x: 0, y: 14, width: 7, height: 18 },
      sm: { x: 0, y: 11, width: 4, height: 20 },
      xs: { x: 0, y: 12, width: 1, height: 24 }
    }
  })
];
