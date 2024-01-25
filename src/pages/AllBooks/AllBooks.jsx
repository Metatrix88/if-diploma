import React, { useEffect, useState } from 'react';

// helpers
import { getBooks } from '../../assets/helpers/books';

// components
import { CardBook } from '../../components/CardBook';
import { Loader } from '../../components/Loader';
import { Button } from '../../components/UI/Button';

// styles
import { useAllBooksStyles } from './AllBooks.styles';

export const AllBooks = () => {
  const classes = useAllBooksStyles();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = 4;
  const [visibleBooks, setVisibleBooks] = useState(itemsPerPage);

  useEffect(() => {
    setIsLoading(true);
    getBooks()
      .then((books) => setBooks(books))
      .finally(() => setIsLoading(false));
  }, []);

  const handleShowMoreClick = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + itemsPerPage);
  };

  return (
    <section className={classes.root}>
      <h5 className={classes.title}>All Books</h5>
      {isLoading && <Loader />}
      <ul className={classes.wrapperCards}>
        {books.slice(0, visibleBooks).map(({ name, id, imageUrl, author }) => {
          const titleParts = name.split(':');
          const displayedTitle = titleParts.length > 0 ? titleParts[0] : name;
          return (
            <CardBook
              key={id}
              title={displayedTitle}
              imageUrl={imageUrl}
              author={author}
            />
          );
        })}
      </ul>
      <Button
        className={classes.button}
        variant="contained"
        color="primaryContained"
        size="largeContained"
        onClick={handleShowMoreClick}
      >
        Show more
      </Button>
    </section>
  );
};
