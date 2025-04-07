'use client';

import React, { useEffect, useState } from 'react';
import { getSingleAuthor } from '@/api/authorData';
import AuthorForm from '@/components/forms/AuthorForm';
import PropTypes from 'prop-types';

export default function EditAuthor({ params }) {
  const [editAuthor, setEditAuthor] = useState({});
  // TODO: grab the firebasekey
  const { firebaseKey } = params;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setEditAuthor);
  }, [firebaseKey]);

  // TODO: pass object to form
  return <AuthorForm obj={editAuthor} />;
}

EditAuthor.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
