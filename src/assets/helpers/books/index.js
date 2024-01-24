import axios from 'axios';

import {urls} from '../../../constants/urls';

export const getBooks = async () => {
  const { data: books} = await axios.get(urls);

  return books;
};