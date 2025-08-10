import React from 'react';
import logo from '../assets1/logo192.png'; // حطّي الصورة هنا

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <img src={logo} alt="Little Lemon logo" className="logo" />
        {/* ممكن عنوان مخفي لسهولة الوصول */}
        <h1 className="visually-hidden">Little Lemon</h1>
      </div>
    </header>
  );
}
