/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import React, { Fragment } from 'react';
import './storybook.scss';

export default {
  component: null,
  title: 'Style Guide',
};

const Layout = ({ children, background = true }) => (
  <div className={`storybook__layout ${background ? '' : 'storybook__layout--no-background'}`}>
    {children}
  </div>
);

const Row = ({ children, wrap }) => (
  <div className={`storybook__row ${wrap ? 'storybook__row--wrap' : ''}`}>
    {children}
  </div>
);

const Column = ({ children, size, divider = true }) => (
  <div className={`storybook__column ${size ? `storybook__column--${size}` : ''}`}>
    {divider && <div className="storybook__divider" />}
    {children}
  </div>
);

const Card = ({ title, children, divider = true }) => (
  <>
    {title && <h1 className="storybook__card-title">{title}</h1>}
    {title && <div className="storybook__divider" />}
    <div className="storybook__card">
      {children}
    </div>
    {divider && <div className="storybook__divider" />}
  </>
);

const getTypographyGuide = ({ name, className, styles }) => {
  const sizes = ['xl', 'l', 'm', 's', 'xs'];
  return (
    <Layout background={false}>
      <Row />
      {styles.map((row) => (
        <Row wrap>
          {row.map(({ variation, tags }) => {
            const T1 = tags[0] || Fragment;
            const T2 = tags[1] || Fragment;

            return (
              <Column divider={false} size="half">
                <Card>
                  {sizes.map((size) => (
                    <p key={variation} className={`storybook-${className}--${size}`}>
                      <T1>
                        <T2>
                          {`${name} ${size.toUpperCase()} ${variation}`}
                        </T2>
                      </T1>
                    </p>
                  ))}
                </Card>
              </Column>
            );
          })}
        </Row>
      ))}
    </Layout>
  );
};

export const Colors = () => {
  const colors = [
    'black-sbt',
    'deep-green',
    'jungle-green',
    'gold-yellow',
    'lemonade-yellow',
    'white-sbt',
    'pale-grey',
    'opal-green',
    'linen',
  ];

  return (
    <Layout background={false}>
      <Row wrap>
        {colors.map((color) => (
          <Column divider={false} size="fix">
            <div className="storybook-color__wrapper">
              <div className={`storybook-color__${color}`} />
              <p className="storybook-color__title">{color}</p>
            </div>
          </Column>
        ))}
      </Row>
    </Layout>
  );
};

export const TypographySerif = () => getTypographyGuide({
  name: 'Serif',
  className: 'text__serif',
  styles: [
    [
      { variation: 'Bold', tags: ['strong'] },
      { variation: 'Bold Italic', tags: ['strong', 'em'] },
    ],
    [
      { variation: 'Regular', tags: [] },
      { variation: 'Regular Italic', tags: ['em'] },
    ],
  ],
});

export const TypographySans = () => getTypographyGuide({
  name: 'Sans',
  className: 'text__sans-serif',
  styles: [
    [
      { variation: 'Demibold', tags: ['strong'] },
      { variation: 'Regular', tags: [] },
      { variation: 'Light', tags: ['em'] },
    ],
  ],
});

export const TypographyBlog = () => {
  const text = 'En effet, c\'était bien par "le commencement" que les colons étaient forcés de débuter. Ils ne possédaient même pas les outils nécessaires à faire les outils, et ils ne se trouvaient même pas dans les conditions de la nature, qui, "ayant le temps, économise l\'effort". Le temps leur manquait, puisqu\'ils devaient immédiatement subvenir aux besoins de leurs existence, et si, profitant de l’expérience acquise, ils n\'avaient rien à inventer, du moins avaient-ils tout à fabriquer. Leur fer, leur acier n\'était encore qu\'à l\'état de minerai, leur poterie à l\'état d\'argile, leur linge et leurs habit à l\'état de matière textile.';

  return (
    <Layout background={false}>
      <Row>
        <Column size="one-third" divider={false}>
          {[1, 2, 3, 4].map((heading) => {
            const Tag = `h${heading}`;
            return (
              <Card key={heading} divider={false}>
                <Tag>{`Heading ${heading}`}</Tag>
              </Card>
            );
          })}
        </Column>
        <Column size="two-third" divider={false}>
          <Card divider={false}>
            <p>
              Ils ne possédaient même pas les outils nécessaires à
              {' '}
              <a href="https://google.fr">faire les outils</a>
              .
            </p>
          </Card>
          <Card divider={false}>
            <p>{text}</p>
            <p><em>{text}</em></p>
            <p><strong>{text}</strong></p>
          </Card>
        </Column>
      </Row>
    </Layout>
  );
};

export const Lists = () => (
  <Layout>
    <Column>
      {[
        ['ul'],
        ['ol'],
        ['ul', 'ol'],
        ['ol', 'ul'],
      ].map((tags) => {
        const T1 = tags[0];
        const T2 = tags[1] || tags[0];
        const T3 = tags[0];
        const T4 = tags[1] || tags[0];

        return (
          <Card title={tags.join(', ')}>
            <T1>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>

              <T2>
                <li>Nunc dignissim risus id metus.</li>
                <li>Cras ornare tristique elit.</li>
                <li>Vivamus vestibulum ntulla nec ante.</li>

                <T3>
                  <li>Praesent placerat risus quis eros.</li>
                  <li>Fusce pellentesque suscipit nibh.</li>
                  <li>Integer vitae libero ac risus egestas placerat.</li>

                  <T4>
                    <li>Vestibulum commodo felis quis tortor.</li>
                    <li>Ut aliquam sollicitudin leo.</li>
                  </T4>
                </T3>
              </T2>

              <li>Cras iaculis ultricies nulla.</li>
              <li>Donec quis dui at dolor tempor interdum.</li>
            </T1>
          </Card>
        );
      })}
    </Column>
  </Layout>
);

export const Quote = () => (
  <Layout>
    <Column>
      <Card title="blockquote">
        <blockquote>
          <p>
            This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can
            {' '}
            <em>put</em>
            {' '}
            <strong>Markdown</strong>
            {' '}
            into a blockquote.
          </p>
        </blockquote>
      </Card>
      <Card title="blockquote with three paragraphs">
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
          <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
          <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
        </blockquote>
      </Card>
    </Column>
  </Layout>
);

export const Button = () => (
  <Layout>
    <Column>
      <Card title="button">
        <button type="button">Cupcake ipsum dolore</button>
      </Card>
    </Column>
  </Layout>
);
