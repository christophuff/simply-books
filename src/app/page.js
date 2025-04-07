/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getBooks, getPublicBooks } from '../api/bookData';
import { useAuth } from '../utils/context/authContext';
import BookCard from '../components/BookCard';

function Home() {
  // TODO: Set a state for books
  const [books, setBooks] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getAllTheBooks = () => {
    Promise.all([getPublicBooks(), getBooks(user.uid)]).then(([publicBooks, userBooks]) => {
      const userBookKeys = new Set(userBooks.map((book) => book.firebaseKey));
      const uniquePublicBooks = publicBooks.filter((book) => !userBookKeys.has(book.firebaseKey));
      const allBooks = [...userBooks, ...uniquePublicBooks];
      setBooks(allBooks);
    });
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTheBooks();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/book/new" passHref>
        <Button className="green-button">Add A Book</Button>
      </Link>
      <div className="d-flex flex-wrap justify-content-center mt-3">
        {/* TODO: map over books here using BookCard component */}
        {books.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAllTheBooks} />
        ))}
      </div>
    </div>
  );
}

export default Home;
