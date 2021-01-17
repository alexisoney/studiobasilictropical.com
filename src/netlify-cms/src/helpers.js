import Remark from 'remark';
import toHast from 'mdast-util-to-hast';

export const getData = (entry) => entry.getIn(['data']).toJS();

export const toHtmlAst = (markdown) => {
  const remarkOptions = {
    commonmark: true,
    footnotes: true,
    gfm: true,
    pedantic: true,
    tableOfContents: {
      heading: null,
      maxDepth: 6,
    },
  };
  const remark = new Remark().data('settings', remarkOptions);

  const markdownAst = remark.parse(markdown);
  const htmlAst = toHast(markdownAst);

  return htmlAst;
};
