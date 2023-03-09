import React from 'react';
import type { Story } from '@ladle/react';

export const Headings: Story = () => (
  <React.Fragment>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </React.Fragment>
);

export const Paragraphs: Story = () => (
  <React.Fragment>
    <p className="paragraph-l">
      Body copy large text...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ultricies lacus.
      Nunc ac pretium purus. Integer vitae dictum purus. In quis diam id lacus semper viverra. Vivamus sollicitudin sed
      purus et mollis. Ut interdum nisl eget massa volutpat maximus. Curabitur tempor euismod dui id viverra. Sed
      aliquet efficitur turpis, et vulputate neque malesuada eget. Sed porta scelerisque aliquet.
    </p>
    <p>
      Body copy normal text...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ultricies lacus.
      Nunc ac pretium purus. Integer vitae dictum purus. In quis diam id lacus semper viverra. Vivamus sollicitudin sed
      purus et mollis. Ut interdum nisl eget massa volutpat maximus. Curabitur tempor euismod dui id viverra. Sed
      aliquet efficitur turpis, et vulputate neque malesuada eget. Sed porta scelerisque aliquet.
    </p>
    <p className="paragraph-s">
      Body copy small text...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ultricies lacus.
      Nunc ac pretium purus. Integer vitae dictum purus. In quis diam id lacus semper viverra. Vivamus sollicitudin sed
      purus et mollis. Ut interdum nisl eget massa volutpat maximus. Curabitur tempor euismod dui id viverra. Sed
      aliquet efficitur turpis, et vulputate neque malesuada eget. Sed porta scelerisque aliquet.
    </p>
  </React.Fragment>
);

export const Caption: Story = () => (
  <caption>A caption....Lorem ipsum dolor sit amet, consectetur adipiscing elit.</caption>
);

export const Hyperlinks: Story = () => (
  <a // eslint-disable-line
    className="hyperlink"
    href="#"
  >
    A link to something
  </a>
);

export const Lists: Story = () => (
  <React.Fragment>
    <ul className="list">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>

    <ol className="list">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ol>
  </React.Fragment>
);

export const Quotes: Story = () => (
  <q>
    This is a quote, and it goes something like this...Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Curabitur suscipit convallis magna sed dapibus.
  </q>
);
