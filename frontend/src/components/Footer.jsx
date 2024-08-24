import React from 'react';

const Footer = () => {
  return (
    <footer className="container flex justify-around text-sm" >
        <a href="/" className="hover:underline">Home</a>
        <a href="/profile" className="hover:underline">Profile</a>
        <a href="/faq" className="hover:underline">FAQ</a>
        <a href="https://github.com/samanthacabrera/summer-over" className="hover:underline">Contribute</a>
    </footer>
  );
};

export default Footer;
