import { Vue, Component } from 'vue-property-decorator';

import RenderDemoWindowEn from './demoWindow.en.md';
import RenderDemoWindowFr from './demoWindow.fr.md';

// Shut up about multiple class declarations in the same file !
@RenderDemoWindowEn
@Component
class DemoWindowEn extends Vue {
}

// Shut up about multiple class declarations in the same file !
// tslint:disable-next-line
@RenderDemoWindowFr
@Component
class DemoWindowFr extends Vue {
}

export const DemoWindow: { [lang: string]: typeof Vue } = {
  'en-US': DemoWindowEn,
  'fr-FR': DemoWindowFr
};
