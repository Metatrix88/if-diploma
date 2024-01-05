import { createUseStyles } from 'react-jss';

export const imagesStyles = () => ({
  root: {
    display: 'block',
    width: '100%',
  }
});

export const useImagesStyles = createUseStyles(imagesStyles, {
  name: 'Images',
});