import { Component, Vue } from 'vue-property-decorator';

import { AboutTranslations } from '../../locales/about';

import hljs from 'highlight.js/lib/highlight';
import html from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('html', html);

import RenderWith from './template.html';

import 'highlight.js/styles/gruvbox-dark.css';

@RenderWith
@Component
export default class About extends Vue {
  get pageContent() {
    return AboutTranslations[this.$i18n.locale];
  }

  public mounted() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
}
