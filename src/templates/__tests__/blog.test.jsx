/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { render } from '@testing-library/react';
import { BlogLayout } from '../blog';

describe('<BlogLayout />', () => {
  it('should render a blog post', () => {
    const props = {
      title: 'Hello World!',
      thumbnail: 'https://source.unsplash.com/jzZMvKChCx4/1280x768',
      intro: 'Aujourd’hui, les Product Designer fleurissent sur le web...',
      category: 'Design',
    };

    const { getByText, getByAltText } = render(<BlogLayout {...props} />);

    ['title', 'intro', 'category'].forEach((key) => {
      const text = props[key];
      expect(getByText(text).textContent).toBe(text);
    });

    expect(getByText(props.title).tagName.toLowerCase()).toBe('h1');

    expect(getByAltText(props.title).src).toBe(props.thumbnail);
  });
});
