'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { createAuthor, updateAuthor } from '@/api/authorData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  favorite: false,
  uid: '',
};

function AuthorForm({ obj = initialState }) {
  const [formInput, setFormInput] = useState(obj);
  const router = useRouter();
  const { user } = useAuth();

  // Update form state when obj changes
  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    } else {
      setFormInput({ ...initialState, uid: user?.uid || '' });
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const idToken = await user.getIdToken();

    if (obj.firebaseKey) {
      updateAuthor(formInput, idToken).then(() => router.push(`/authors`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createAuthor(payload, idToken)
        .then(({ name }) => {
          const patchPayload = { firebaseKey: name };
          updateAuthor(patchPayload).then(() => {
            router.push('/');
          });
        })
        .catch((error) => console.error('Error creating author:', error));
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Author</h2>

      {/* First Name INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="First Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter First Name " name="first_name" value={formInput.first_name} onChange={handleChange} required />
      </FloatingLabel>

      {/* Last Name INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Last Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter Last Name" name="last_name" value={formInput.last_name} onChange={handleChange} required />
      </FloatingLabel>

      {/* Email INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Email" className="mb-3">
        <Form.Control type="text" placeholder="Enter Email" name="email" value={formInput.email} onChange={handleChange} required />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Author</Button>
    </Form>
  );
}

AuthorForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }),
};

export default AuthorForm;
