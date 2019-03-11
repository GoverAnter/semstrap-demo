import { Component, Mixins } from 'vue-property-decorator';
import { WindowMixin, StrapWindow } from '@inveasy/semstrap';
import { DemoWindow as dd } from '../../locales/DemoWindow';

import WithRender from './template.html';

@WithRender
@Component
export default class DemoWindow extends Mixins(WindowMixin) {
  get content() {
    return dd[this.$i18n.locale];
  }
}
