import React from 'react';
import { useParams } from 'react-router-dom';

// constants
import { STATIC_CONTENT } from '../../constants/footer.staticContent';

// styles
import { useStaticPage } from './StaticPage.styles';

export const StaticPage = () => {
  const classes = useStaticPage();
  const { staticPage } = useParams();
  const content = STATIC_CONTENT[staticPage];

  if (!content) {
    throw new Error('404');
  }

  return (
    <section className={classes.root}>
      <h1 className={classes.title}>{content.title}</h1>
      {content.text.split('\n').map((paragraph) => (
        <p className={classes.text} key={paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  );
};
