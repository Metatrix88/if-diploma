import React from 'react';
import { Form } from 'react-router-dom';

// icons
import { Search as SearchIcon } from '../../assets/icons';

// components
import { Button } from '../UI/Button';

// styles
import {useSearchStyles} from './Search.styles';

export const Search = () => {
  const classes = useSearchStyles();
  return (
    <Form className={classes.root}>
      <div className={classes.wrapper}>
        <Button variant='icon' className={classes.submit}>
          <SearchIcon />
        </Button>
        <input
          className={classes.input}
          type="text"
          name="search"
          placeholder="Search by author, title, name"
        />
      </div>
    </Form>
  );
};
