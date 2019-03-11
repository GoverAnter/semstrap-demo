import { Vue, Component } from 'vue-property-decorator';

import RenderDynamicPageHelpEn from './dynamicPageHelp.en.md';
import RenderDynamicPageHelpFr from './dynamicPageHelp.fr.md';

// Shut up about multiple class declarations in the same file !
@RenderDynamicPageHelpEn
@Component
class DynamicPageHelpEn extends Vue {
}

// Shut up about multiple class declarations in the same file !
// tslint:disable-next-line
@RenderDynamicPageHelpFr
@Component
class DynamicPageHelpFr extends Vue {
}

export const DynamicPageHelp: { [lang: string]: typeof Vue } = {
  'en-US': DynamicPageHelpEn,
  'fr-FR': DynamicPageHelpFr
};
