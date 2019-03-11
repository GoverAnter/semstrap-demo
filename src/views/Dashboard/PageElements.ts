import { DynamicPageStatElement } from '@inveasy/semstrap';

export const Pool = [
  new DynamicPageStatElement({
    id: 'dTotalSales',
    identifier: ':i18n:dashboard.totalSales.identifier',
    useFlow: true,
    flowId: 'dTotalSales',
    unique: true
  }),
  new DynamicPageStatElement({
    id: 'dTotalProducts',
    identifier: ':i18n:dashboard.totalProducts.identifier',
    useFlow: true,
    flowId: 'dTotalProducts',
    unique: true
  }),
  new DynamicPageStatElement({
    id: 'dTotalEarnings',
    identifier: ':i18n:dashboard.totalEarnings.identifier',
    useFlow: true,
    flowId: 'dTotalEarnings',
    unique: true,
    size: 'normal'
  }),
  new DynamicPageStatElement({
    id: 'dTotalProductsSold',
    identifier: ':i18n:dashboard.totalProductsSold.identifier',
    useFlow: true,
    flowId: 'dTotalProductsSold',
    unique: true
  }),
  new DynamicPageStatElement({
    id: 'dAverageProductsPerSale',
    identifier: ':i18n:dashboard.averageProductsPerSale.identifier',
    useFlow: true,
    flowId: 'dAverageProductsPerSale',
    unique: true
  }),
  new DynamicPageStatElement({
    id: 'dBestSeller',
    identifier: ':i18n:dashboard.bestSeller.identifier',
    useFlow: true,
    flowId: 'dBestSeller',
    unique: true,
    size: 'smaller'
  }),
  new DynamicPageStatElement({
    id: 'dSalesPerDay',
    identifier: ':i18n:dashboard.salesPerDay.identifier',
    useFlow: true,
    flowId: 'dSalesPerDay',
    unique: true
  }),
  new DynamicPageStatElement({
    id: 'dSoldPerDay',
    identifier: ':i18n:dashboard.soldPerDay.identifier',
    useFlow: true,
    flowId: 'dSoldPerDay',
    unique: true
  }),
  new DynamicPageStatElement({
    id: 'dEarningsPerDay',
    identifier: ':i18n:dashboard.earningsPerDay.identifier',
    useFlow: true,
    flowId: 'dEarningsPerDay',
    unique: true
  })
];

export const PageElements = [
  new DynamicPageStatElement({
    id: 'dTotalSales',
    identifier: ':i18n:dashboard.totalSales.identifier',
    useFlow: true,
    flowId: 'dTotalSales',
    unique: true,
    adaptivePosition: {
      lg: { x: 0, y: 8, width: 2, height: 3 },
      md: { x: 1, y: 9, width: 2, height: 3 },
      sm: { x: 0, y: 7, width: 2, height: 3 },
      xs: { x: 0, y: 7, width: 1, height: 3 }
    }
  }),
  new DynamicPageStatElement({
    id: 'dTotalEarnings',
    identifier: ':i18n:dashboard.totalEarnings.identifier',
    useFlow: true,
    flowId: 'dTotalEarnings',
    unique: true,
    size: 'normal',
    adaptivePosition: {
      lg: { x: 3, y: 0, width: 4, height: 4 },
      md: { x: 2, y: 0, width: 3, height: 4 },
      sm: { x: 1, y: 0, width: 2, height: 4 },
      xs: { x: 0, y: 0, width: 1, height: 4 }
    }
  }),
  new DynamicPageStatElement({
    id: 'dTotalProductsSold',
    identifier: ':i18n:dashboard.totalProductsSold.identifier',
    useFlow: true,
    flowId: 'dTotalProductsSold',
    unique: true,
    adaptivePosition: {
      lg: { x: 6, y: 8, width: 2, height: 3 },
      md: { x: 4, y: 9, width: 2, height: 3 },
      sm: { x: 0, y: 10, width: 2, height: 3 },
      xs: { x: 0, y: 13, width: 1, height: 3 }
    }
  }),
  new DynamicPageStatElement({
    id: 'dAverageProductsPerSale',
    identifier: ':i18n:dashboard.averageProductsPerSale.identifier',
    useFlow: true,
    flowId: 'dAverageProductsPerSale',
    unique: true,
    adaptivePosition: {
      lg: { x: 4, y: 10, width: 2, height: 3 },
      md: { x: 2, y: 12, width: 3, height: 3 },
      sm: { x: 1, y: 13, width: 2, height: 3 },
      xs: { x: 0, y: 19, width: 1, height: 3 }
    }
  }),
  new DynamicPageStatElement({
    id: 'dBestSeller',
    identifier: ':i18n:dashboard.bestSeller.identifier',
    useFlow: true,
    flowId: 'dBestSeller',
    unique: true,
    size: 'smaller',
    adaptivePosition: {
      lg: { x: 3, y: 16, width: 4, height: 3 },
      md: { x: 2, y: 17, width: 3, height: 3 },
      sm: { x: 0, y: 16, width: 4, height: 3 },
      xs: { x: 0, y: 22, width: 1, height: 4 }
    }
  }),
  new DynamicPageStatElement({
    id: 'dSalesPerDay',
    identifier: ':i18n:dashboard.salesPerDay.identifier',
    useFlow: true,
    flowId: 'dSalesPerDay',
    unique: true,
    adaptivePosition: {
      lg: { x: 2, y: 8, width: 2, height: 3 },
      md: { x: 0, y: 12, width: 2, height: 3 },
      sm: { x: 2, y: 7, width: 2, height: 3 },
      xs: { x: 0, y: 10, width: 1, height: 3 }
    }
  }),
  new DynamicPageStatElement({
    id: 'dSoldPerDay',
    identifier: ':i18n:dashboard.soldPerDay.identifier',
    useFlow: true,
    flowId: 'dSoldPerDay',
    unique: true,
    adaptivePosition: {
      lg: { x: 8, y: 8, width: 2, height: 3 },
      md: { x: 5, y: 12, width: 2, height: 3 },
      sm: { x: 2, y: 10, width: 2, height: 3 },
      xs: { x: 0, y: 16, width: 1, height: 3 }
    }
  }),
  new DynamicPageStatElement({
    id: 'dEarningsPerDay',
    identifier: ':i18n:dashboard.earningsPerDay.identifier',
    useFlow: true,
    flowId: 'dEarningsPerDay',
    unique: true,
    adaptivePosition: {
      lg: { x: 4, y: 6, width: 2, height: 3 },
      md: { x: 2, y: 6, width: 3, height: 3 },
      sm: { x: 1, y: 4, width: 2, height: 3 },
      xs: { x: 0, y: 4, width: 1, height: 3 }
    }
  })
];
