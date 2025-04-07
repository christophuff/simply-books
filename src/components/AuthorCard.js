'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { toggleFavorite } from '../api/authorData';
import { deleteAuthorBooks } from '../api/mergedData';

function AuthorCard({ authorObj, onUpdate }) {
  const deleteAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name} ${authorObj.last_name}?`)) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };

  const handleFavoriteToggle = () => {
    console.log('Toggling favorite');
    toggleFavorite(authorObj.firebaseKey, authorObj.favorite).then(() => {
      console.log('Favorite toggled');
      onUpdate(); // Refresh data
    });
  };

  return (
    <Card className="author-card" style={{ width: '16rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>
          <FontAwesomeIcon icon={authorObj.favorite ? solidStar : regularStar} className="me-2 text-warning" style={{ cursor: 'pointer' }} onClick={handleFavoriteToggle} />
          {authorObj.first_name} {authorObj.last_name}
        </Card.Title>
        <p className="card-text bold">
          <a href={`mailto:${authorObj?.email}`}>{authorObj?.email}</a>
        </p>
        <Link href={`/authors/${authorObj.firebaseKey}`} passHref>
          <Button className="m-2 green-button">VIEW ALL BOOKS</Button>
        </Link>
        <br />
        <Link href={`/authors/edit/${authorObj.firebaseKey}`} passHref>
          <Button className="m-2 brown-button">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    favorite: PropTypes.bool,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AuthorCard;
