import { Component, Vue } from 'vue-property-decorator';
import { StrapMenu } from '@inveasy/semstrap';

import RenderWith from './template.html';

@RenderWith
@Component({ components: { StrapMenu }})
export default class NavMenu extends Vue {
  public locales: Array<{ key: string, value: string }> = [
    { key: 'en-US', value: 'English (US)' },
    { key: 'fr-FR', value: 'Français (France)' }
  ];

  public changeLocale(newLocale: string) {
    this.$i18n.locale = newLocale;
  }
}
