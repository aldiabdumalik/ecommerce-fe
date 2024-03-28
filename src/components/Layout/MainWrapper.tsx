'use client';
import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment key={Math.random()}>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}
