const marked = require('marked');

const renderer = new marked.Renderer();
renderer.heading = function(text, level, raw, slugger) {
  if (this.options.headerIds) {
    return '<h'
      + level
      + ' id="'
      + this.options.headerPrefix
      + slugger.slug(raw)
      + '" class="strap header">'
      + text
      + '</h'
      + level
      + '>\n';
  }
  // ignore IDs
  return '<h' + level + ' class="strap header">' + text + '</h' + level + '>\n';
}

function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

renderer.link = function(href, title, text) {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
  if (href === null) {
    return `<strap-link>${text}</strap-link>`;
  }
  var localLink = false
  if (href.startsWith('/')) {
    localLink = true
  }
  var out = '<strap-link';
  if (localLink) {
    out += ' router-link';
  }
  out += ' to="' + escape(href) + '">' + text + '</strap-link>';
  // TODO Title is ignored
  return out;
}

const path = require('path');

module.exports = {
  configureWebpack: config => {
    config.module.rules.forEach(v => {
      if (v.use) {
        let idx = v.use.findIndex(w => w.loader === 'thread-loader')
        if (idx !== -1) v.use.splice(idx, 1)
      }
    })
  },

  chainWebpack: config => {
    config.module.rule('html')
                   .test(/\.html$/)
                   .exclude
                     .add(/index\.html/)
                     .end()
                   .use('vue-template-loader')
                     .loader('vue-template-loader')
                     .end()
    config.module.rule('md')
                   .test(/\.md$/)
                   .use('vue-template-loader')
                     .loader('vue-template-loader')
                     .end()
                   .use(path.resolve('loader.js'))
                     .loader(path.resolve('loader.js'))
                     .end()
                   .use('highlight-loader')
                     .loader('highlight-loader')
                     .end()
                   .use('markdown-loader')
                     .loader('markdown-loader')
                     .options({
                       breaks: true,
                       renderer
                     })
                     .end()
  },

  productionSourceMap: false,
  parallel: false
}
