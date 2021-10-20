import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

CMS.registerEditorComponent({
  id: "table",
  label: "Markdown Table",
  fields: [{
    name: 'table',
    label: 'Markdown Table',
    widget: 'markdown',
    hint: 'Generate your table using Tables Generator at https://www.tablesgenerator.com/markdown_tables and paste the markdown here'
  }],
  pattern: /^<div class="table-wrapper">(.*?)<\/div>$/ms,
  fromBlock: function(match) {
    return {
      table: match[1]
    }
  },
  toBlock: function(data) {
    return `<div class="table-wrapper">${data.table}</div>`;
  },
  toPreview: function(data) {
    return `<div class="table-wrapper">${data.table}</div>`;
  }
})

export default {
  CMS
}

