export const Total = {
  id: 'total',
  group: 'sale',
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
          portId: 'pageDataTotal'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataTotal',
        definitionName: 'total',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};

export const SaleDate = {
  id: 'date',
  group: 'sale',
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
          portId: 'pageDataDate'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataDate',
        definitionName: 'date',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};

export const Customer = {
  id: 'customer',
  group: 'sale',
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
          portId: 'pageDataCustomer'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataCustomer',
        definitionName: 'customer',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};

export const ProductCount = {
  id: 'productCount',
  group: 'sale',
  steps: [
    {
      id: 'renderer',
      type: 'renderer',
      root: true,
      pos: { x: 525, y: 75 },
      inboundPorts: [{
        id: 'valuePort',
        definitionName: 'value',
        destination: {
          stepId: 'arrayLength',
          portId: 'valuePort'
        }
      }]
    },
    {
      id: 'arrayLength',
      type: 'arrayLength',
      pos: { x: 275, y: 75 },
      inboundPorts: [{
        id: 'arrayPort',
        definitionName: 'array',
        destination: {
          stepId: 'pageData',
          portId: 'pageDataProductArray'
        }
      }],
      outboundPorts: [{
        id: 'valuePort',
        definitionName: 'value',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataProductArray',
        definitionName: 'products',
        destination: {
          stepId: 'arrayLength',
          portId: 'arrayPort'
        }
      }]
    }
  ]
};
