import React, { useEffect, useState } from 'react';

// components
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';

// styles
import { useAllBooksStyles } from './AllBooks.styles';
import { getBooks } from '../../assets/helpers/books';
import { CardBook } from '../../components/CardBook';

export const AllBooks = () => {
  const classes = useAllBooksStyles();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((books) => setBooks(books));
  }, []);

  console.log(books);
  return (
    <>
      <Header />
      <Container>
        <div className={classes.root}>
          <h5 className={classes.title}>All Books</h5>
          <ul className={classes.wrapperCards}>
            {books.map(({ name, id, imageUrl, author }) => {
              const titleParts = name.split(':');
              const displayedTitle =
                titleParts.length > 0 ? titleParts[0] : name;
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
        </div>
      </Container>
      <Footer />
    </>
  );
};
