import { Component, Mixins } from 'vue-property-decorator';
import { WindowMixin, StrapWindow } from '@inveasy/semstrap';
import { KnowMoreDashboard } from '../../locales/KnowMore';

import WithRender from './template.html';

@WithRender
@Component
export default class KnowMoreDashboardWindow extends Mixins(WindowMixin) {
  get content() {
    return KnowMoreDashboard[this.$i18n.locale];
  }
}
