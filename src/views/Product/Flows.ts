import { TypedNumber } from '@inveasy/strong-types';

export const PriceWithoutVAT = {
  id: 'priceWithoutVAT',
  group: 'product',
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
          portId: 'pageDataPrice'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'pageDataPrice',
        definitionName: 'price',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};

export const VAT = {
  id: 'VAT',
  group: 'product',
  stepsData: {
    vatConstant: {
      type: 'percentage',
      value: new TypedNumber({ value: 20, type: 'percentage', unit: '%' })
    },
    applyVATPercentage: {
      type: 'percentage'
    }
  },
  steps: [
    {
      id: 'renderer',
      type: 'renderer',
      root: true,
      pos: { x: 525, y: 125 },
      inboundPorts: [{
        id: 'valuePort',
        definitionName: 'value',
        destination: {
          stepId: 'applyVATPercentage',
          portId: 'vatResult'
        }
      }]
    },
    {
      id: 'vatConstant',
      type: 'constant',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'vatConstant',
        definitionName: 'value',
        destination: {
          stepId: 'applyVATPercentage',
          portId: 'vatPerc'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 125 },
      outboundPorts: [{
        id: 'pageDataPrice',
        definitionName: 'price',
        destination: {
          stepId: 'applyVATPercentage',
          portId: 'price'
        }
      }]
    },
    {
      id: 'applyVATPercentage',
      type: 'applyPercentage',
      pos: { x: 275, y: 125 },
      inboundPorts: [
        {
          id: 'vatPerc',
          definitionName: 'percentage',
          destination: {
            stepId: 'vatConstant',
            portId: 'vatConstant'
          }
        },
        {
          id: 'price',
          definitionName: 'value',
          destination: {
            stepId: 'pageData',
            portId: 'pageDataPrice'
          }
        }
      ],
      outboundPorts: [{
        id: 'vatResult',
        definitionName: 'result',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};

export const PriceWithVAT = {
  id: 'priceWithVAT',
  group: 'product',
  stepsData: {
    vatConstant: {
      type: 'percentage',
      value: new TypedNumber({ value: 20, type: 'percentage', unit: '%' })
    }
  },
  steps: [
    {
      id: 'renderer',
      type: 'renderer',
      root: true,
      pos: { x: 525, y: 125 },
      inboundPorts: [{
        id: 'valuePort',
        definitionName: 'value',
        destination: {
          stepId: 'applyVATPercentage',
          portId: 'vatResult'
        }
      }]
    },
    {
      id: 'vatConstant',
      type: 'constant',
      pos: { x: 25, y: 25 },
      outboundPorts: [{
        id: 'vatConstant',
        definitionName: 'value',
        destination: {
          stepId: 'applyVATPercentage',
          portId: 'vatPerc'
        }
      }]
    },
    {
      id: 'pageData',
      type: 'pageData',
      pos: { x: 25, y: 125 },
      outboundPorts: [{
        id: 'pageDataPrice',
        definitionName: 'price',
        destination: {
          stepId: 'applyVATPercentage',
          portId: 'price'
        }
      }]
    },
    {
      id: 'applyVATPercentage',
      type: 'applyPercentage',
      pos: { x: 275, y: 125 },
      inboundPorts: [
        {
          id: 'vatPerc',
          definitionName: 'percentage',
          destination: {
            stepId: 'vatConstant',
            portId: 'vatConstant'
          }
        },
        {
          id: 'price',
          definitionName: 'value',
          destination: {
            stepId: 'pageData',
            portId: 'pageDataPrice'
          }
        }
      ],
      outboundPorts: [{
        id: 'vatResult',
        definitionName: 'result',
        destination: {
          stepId: 'renderer',
          portId: 'valuePort'
        }
      }]
    }
  ]
};
