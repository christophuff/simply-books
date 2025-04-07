'use client';

import React, { useEffect, useState } from 'react';
import { viewBookDetails } from '@/api/mergedData';
import PropTypes from 'prop-types';

export default function ViewBook({ params }) {
  const [bookDetails, setBookDetails] = useState({});

  // grab firebaseKey from url
  const { firebaseKey } = params;

  // make call to API layer to get the data
  useEffect(() => {
    viewBookDetails(firebaseKey).then(setBookDetails);
  }, [firebaseKey]);

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Book Image */}
        <div className="col-md-4 text-center mb-3 mb-md-0">
          <img src={bookDetails.image} alt={bookDetails.title} style={{ height: '400px' }} />
        </div>

        {/* Book Details */}
        <div className="col-md-8">
          <h5>
            {bookDetails.title} by {bookDetails.authorObject?.first_name} {bookDetails.authorObject?.last_name}
          </h5>
          Author Email: <a href={`mailto:${bookDetails.authorObject?.email}`}>{bookDetails.authorObject?.email}</a>
          <p>{bookDetails.description || ''}</p>
          <hr />
          <p>{bookDetails.sale ? `🏷️ Sale $${bookDetails.price}` : `$${bookDetails.price}`}</p>
        </div>
      </div>
    </div>
  );
}

ViewBook.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
