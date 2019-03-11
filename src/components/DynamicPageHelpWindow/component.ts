import { Component, Mixins } from 'vue-property-decorator';
import { WindowMixin, StrapWindow } from '@inveasy/semstrap';
import { DynamicPageHelp } from '../../locales/DynamicPageHelp';

import WithRender from './template.html';

@WithRender
@Component
export default class DynamicPageHelpWindow extends Mixins(WindowMixin) {
  get content() {
    return DynamicPageHelp[this.$i18n.locale];
  }
}
