'use client';

import React, { useEffect, useState } from 'react';
import { viewAuthorDetails } from '@/api/mergedData';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function ViewAuthor({ params }) {
  const [authorDetails, setAuthorDetails] = useState({});

  // grab firebaseKey from url
  const { firebaseKey } = params;

  // make call to API layer to get the data
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <div className="container text-center">
      <div className="ms-5 details">
        <h5 className="mt-5">
          Books by {authorDetails.first_name} {authorDetails.last_name}
        </h5>
        Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails?.email}</a>
        <h6 className="mt-5">Books:</h6>
        {authorDetails.books && authorDetails.books.length > 0 ? (
          <div className="d-flex flex-wrap justify-content-center">
            {authorDetails.books.map((book) => (
              <Card className="book-card" key={book.firebaseKey} style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={book.image} alt={book.title} style={{ height: '400px' }} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="card-text bold">{book.sale ? `🏷️ Sale $${book.price}` : `$${book.price}`}</p>
                  {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
                  <Link href={`/book/${book.firebaseKey}`} passHref>
                    <Button className="m-2 green-button">VIEW</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <p>No books available for this author.</p>
        )}
      </div>
    </div>
  );
}

ViewAuthor.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
