import { Component, Mixins } from 'vue-property-decorator';
import { WindowMixin, StrapWindow } from '@inveasy/semstrap';
import { KnowMoreSale } from '../../locales/KnowMore';

import WithRender from './template.html';

@WithRender
@Component
export default class KnowMoreSaleWindow extends Mixins(WindowMixin) {
  get content() {
    return KnowMoreSale[this.$i18n.locale];
  }
}
