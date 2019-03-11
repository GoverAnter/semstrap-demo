import { Component, Vue } from 'vue-property-decorator';

import { AboutMeTranslations } from '../../locales/about';

import RenderWith from './template.html';

@RenderWith
@Component
export default class AboutMe extends Vue {
  get pageContent() {
    return AboutMeTranslations[this.$i18n.locale];
  }
}
