import { Vue, Component } from 'vue-property-decorator';

import RenderKnowMoreDashboardEn from './knowMore.dashboard.en.md';
import RenderKnowMoreDashboardFr from './knowMore.dashboard.fr.md';

import RenderKnowMoreSaleEn from './knowMore.sale.en.md';
import RenderKnowMoreSaleFr from './knowMore.sale.fr.md';

import RenderKnowMoreProductEn from './knowMore.product.en.md';
import RenderKnowMoreProductFr from './knowMore.product.fr.md';

// Shut up about multiple class declarations in the same file !
@RenderKnowMoreDashboardEn
@Component
class KnowMoreDashboardEn extends Vue {
}

// Shut up about multiple class declarations in the same file !
// tslint:disable-next-line
@RenderKnowMoreDashboardFr
@Component
class KnowMoreDashboardFr extends Vue {
}

export const KnowMoreDashboard: { [lang: string]: typeof Vue } = {
  'en-US': KnowMoreDashboardEn,
  'fr-FR': KnowMoreDashboardFr
};

// Shut up about multiple class declarations in the same file !
// tslint:disable-next-line
@RenderKnowMoreSaleEn
@Component
class KnowMoreSaleEn extends Vue {
}

// Shut up about multiple class declarations in the same file !
// tslint:disable-next-line
@RenderKnowMoreSaleFr
@Component
class KnowMoreSaleFr extends Vue {
}

export const KnowMoreSale: { [lang: string]: typeof Vue } = {
  'en-US': KnowMoreSaleEn,
  'fr-FR': KnowMoreSaleFr
};

// Shut up about multiple class declarations in the same file !
// tslint:disable-next-line
@RenderKnowMoreProductEn
@Component
class KnowMoreProductEn extends Vue {
}

// Shut up about multiple class declarations in the same file !
// tslint:disable-next-line
@RenderKnowMoreProductFr
@Component
class KnowMoreProductFr extends Vue {
}

export const KnowMoreProduct: { [lang: string]: typeof Vue } = {
  'en-US': KnowMoreProductEn,
  'fr-FR': KnowMoreProductFr
};
