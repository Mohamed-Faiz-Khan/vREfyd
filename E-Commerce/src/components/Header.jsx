import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Header.css';

export default function Header({ setSearchTerm }) {
  return (
    <div className='overallHeader'>
     <div className='logo'>
  <Link to='/'><img src="" alt="Company Logo" /></Link>
</div>

      <div className='navbar'>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className='fullSearch'>
        <div className='search'>
          <input
            type="text"
            placeholder='Enter product name'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='cart'>
  <Link to='/cart'><img src="" alt="Cart Icon" /></Link>
</div>
      </div>
    </div>
  );
}
        