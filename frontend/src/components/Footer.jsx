import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleFAQClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <footer className="container flex justify-around text-sm pt-20">
      <a href="/" className="hover:underline">Home</a>
      <a href="/profile" className="hover:underline">Profile</a>
      <a href="#faq" onClick={handleFAQClick} className="hover:underline">FAQ</a>
      <a href="https://github.com/samanthacabrera/summer-over" className="hover:underline">Contribute</a>
    </footer>
  );
};

export default Footer;
