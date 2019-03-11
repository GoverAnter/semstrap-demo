import { Component, Mixins } from 'vue-property-decorator';
import { WindowMixin, StrapWindow } from '@inveasy/semstrap';
import { KnowMoreProduct } from '../../locales/KnowMore';

import WithRender from './template.html';

@WithRender
@Component
export default class KnowMoreProductWindow extends Mixins(WindowMixin) {
  get content() {
    return KnowMoreProduct[this.$i18n.locale];
  }
}
