/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useState, useEffect } from 'react';
import { getBooks } from '@/api/bookData';
import { useAuth } from '@/utils/context/authContext';
import BookCard from '@/components/BookCard';

function PrivateBooksPage() {
  // TODO: Set a state for books
  const [books, setBooks] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get favorite authors
  const getYourBooks = () => {
    getBooks(user.uid).then((allBooks) => {
      // Filter books to show only the private ones
      const privateBooks = allBooks.filter((book) => book.uid === user.uid && !book.public);
      setBooks(privateBooks);
    });
  };

  // TODO: make the call to the API to get favorite authors on component render
  useEffect(() => {
    getYourBooks();
  }, []);

  return (
    <>
      <h3 className="text-center m-3">Your Books:</h3>
      <div className="d-flex flex-wrap justify-content-center mt-3">
        {/* TODO: map over your books here using BookCard component */}
        {books.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getYourBooks} />
        ))}
      </div>
    </>
  );
}

export default PrivateBooksPage;
