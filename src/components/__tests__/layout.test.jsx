import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../layout';

describe('<Layout />', () => {
  it('should return children', () => {
    const { container } = render(<Layout seo={{}}><div className="children" /></Layout>);
    expect(container.querySelectorAll('.children')).toHaveLength(1);
  });
});
