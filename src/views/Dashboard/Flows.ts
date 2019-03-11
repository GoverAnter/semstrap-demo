export const TotalSales = {
  id: 'dTotalSales',
  group: 'dashboard',
  steps: [
    {
      id: 'renderer',
      type: 'renderer',
      root: true,
      pos: { x: 275, y: 25 },
      inboundPorts: [{
        id: 'valuePort',
        definitionName: 'value',
        destination: {
          stepId: 'pageData',
          portId: 'pageDataVal'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataVal',
        definitionName: 'totalSales',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};

export const TotalProducts = {
  id: 'dTotalProducts',
  group: 'dashboard',
  steps: [
    {
      id: 'renderer',
      type: 'renderer',
      root: true,
      pos: { x: 275, y: 25 },
      inboundPorts: [{
        id: 'valuePort',
        definitionName: 'value',
        destination: {
          stepId: 'pageData',
          portId: 'pageDataVal'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataVal',
        definitionName: 'totalProducts',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};

export const TotalEarnings = {
  id: 'dTotalEarnings',
  group: 'dashboard',
  steps: [
    {
      id: 'renderer',
      type: 'renderer',
      root: true,
      pos: { x: 275, y: 25 },
      inboundPorts: [{
        id: 'valuePort',
        definitionName: 'value',
        destination: {
          stepId: 'pageData',
          portId: 'pageDataVal'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataVal',
        definitionName: 'totalEarnings',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};

export const TotalProductsSold = {
  id: 'dTotalProductsSold',
  group: 'dashboard',
  steps: [
    {
      id: 'renderer',
      type: 'renderer',
      root: true,
      pos: { x: 275, y: 25 },
      inboundPorts: [{
        id: 'valuePort',
        definitionName: 'value',
        destination: {
          stepId: 'pageData',
          portId: 'pageDataVal'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataVal',
        definitionName: 'totalProductsSold',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};

export const AverageProductsPerSale = {
  id: 'dAverageProductsPerSale',
  group: 'dashboard',
  steps: [
    {
      id: 'renderer',
      type: 'renderer',
      root: true,
      pos: { x: 275, y: 25 },
      inboundPorts: [{
        id: 'valuePort',
        definitionName: 'value',
        destination: {
          stepId: 'pageData',
          portId: 'pageDataVal'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataVal',
        definitionName: 'averageProductsPerSale',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};

export const BestSeller = {
  id: 'dBestSeller',
  group: 'dashboard',
  steps: [
    {
      id: 'renderer',
      type: 'renderer',
      root: true,
      pos: { x: 275, y: 25 },
      inboundPorts: [{
        id: 'valuePort',
        definitionName: 'value',
        destination: {
          stepId: 'pageData',
          portId: 'pageDataVal'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataVal',
        definitionName: 'bestSeller',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};

export const EarningsPerDay = {
  id: 'dEarningsPerDay',
  group: 'dashboard',
  steps: [
    {
      id: 'renderer',
      type: 'renderer',
      root: true,
      pos: { x: 275, y: 25 },
      inboundPorts: [{
        id: 'valuePort',
        definitionName: 'value',
        destination: {
          stepId: 'pageData',
          portId: 'pageDataVal'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataVal',
        definitionName: 'earningsPerDay',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};

export const SoldPerDay = {
  id: 'dSoldPerDay',
  group: 'dashboard',
  steps: [
    {
      id: 'renderer',
      type: 'renderer',
      root: true,
      pos: { x: 275, y: 25 },
      inboundPorts: [{
        id: 'valuePort',
        definitionName: 'value',
        destination: {
          stepId: 'pageData',
          portId: 'pageDataVal'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataVal',
        definitionName: 'soldPerDay',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};

export const SalesPerDay = {
  id: 'dSalesPerDay',
  group: 'dashboard',
  steps: [
    {
      id: 'renderer',
      type: 'renderer',
      root: true,
      pos: { x: 275, y: 25 },
      inboundPorts: [{
        id: 'valuePort',
        definitionName: 'value',
        destination: {
          stepId: 'pageData',
          portId: 'pageDataVal'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataVal',
        definitionName: 'salesPerDay',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};
