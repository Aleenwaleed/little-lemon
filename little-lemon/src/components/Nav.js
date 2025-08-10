import React from 'react';

export default function Nav() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reserve">Reserve a table</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}
