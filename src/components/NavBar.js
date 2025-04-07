/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import ProfileDropdown from './ProfileDropdown';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Link passHref href="/" className="navbar-brand">
          Simply<span className="logo-span">Books</span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link className="nav-link" href="/private">
              Your Books
            </Link>
            <Link className="nav-link" href="/authors">
              Authors
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center ms-auto">
          <ProfileDropdown />
        </div>
      </Container>
    </Navbar>
  );
}
