'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/utils/context/authContext';
import Link from 'next/link';
import { getFavoriteAuthors } from '@/api/authorData';
// import { getFavoriteBooks } from '@/api/bookData'; // you’ll need to create this

function Profile() {
  const { user } = useAuth();
  const [favoriteAuthors, setFavoriteAuthors] = useState([]);
  // const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    getFavoriteAuthors(user.uid).then(setFavoriteAuthors);
    // getFavoriteBooks(user.uid).then(setFavoriteBooks);
  }, [user.uid]);

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center profile-container">
        <img src={user.photoURL} alt="User" className="rounded-circle me-3" width={80} height={80} />
        <div>
          <h3>{user.displayName}</h3>
          <p>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>
        </div>
      </div>

      <h5 className="text-center">Favorite Authors</h5>
      <div className="mb-4">
        <ul className="list-group">
          {favoriteAuthors.map((author) => (
            <li key={author.firebaseKey} className="list-group-item">
              <Link href={`/authors/${author.firebaseKey}`} passHref>
                <span style={{ cursor: 'pointer', color: '#0d6efd', textDecoration: 'underline' }}>
                  {author.first_name} {author.last_name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <h4>Favorite Books</h4>
      <div className="d-flex flex-wrap">
        {favoriteBooks.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={() => {}} />
        ))}
      </div> */}
    </div>
  );
}

export default Profile;
