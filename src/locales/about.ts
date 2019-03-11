import { Vue, Component, Mixins } from 'vue-property-decorator';
import { WindowManagerMixin } from '@inveasy/semstrap';

import DemoWindow from '../components/DemoWindow/component';

import RenderAboutEnWith from './about.en.md';
import RenderAboutMeEnWith from './aboutMe.en.md';

import RenderAboutFrWith from './about.fr.md';
import RenderAboutMeFrWith from './aboutMe.fr.md';

@RenderAboutEnWith
@Component
class AboutEn extends Mixins(WindowManagerMixin) {
  public openDemoWindow() {
    this.openWindow({
      id: 'demoWindow',
      title: ':i18n:about.demoWindow.title',
      icon: 'directions',
      width: 350,
      height: 300,
      component: DemoWindow,
      centerOnOpen: true
    });
  }
}

// Shut up about multiple class declarations in the same file !
// tslint:disable-next-line
@RenderAboutFrWith
@Component
class AboutFr extends Mixins(WindowManagerMixin) {
  public openDemoWindow() {
    this.openWindow({
      id: 'demoWindow',
      title: ':i18n:about.demoWindow.title',
      icon: 'directions',
      width: 350,
      height: 300,
      component: DemoWindow,
      centerOnOpen: true
    });
  }
}

// Shut up about multiple class declarations in the same file !
// tslint:disable-next-line
@RenderAboutMeEnWith
@Component
class AboutMeEn extends Vue {
}

// Shut up about multiple class declarations in the same file !
// tslint:disable-next-line
@RenderAboutMeFrWith
@Component
class AboutMeFr extends Vue {
}

export const AboutTranslations: { [lang: string]: typeof Vue } = {
  'en-US': AboutEn,
  'fr-FR': AboutFr
};

export const AboutMeTranslations: { [lang: string]: typeof Vue } = {
  'en-US': AboutMeEn,
  'fr-FR': AboutMeFr
};
