import React from 'react'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'
import CountdownTimer from '../countdown/CountdownTimer';

export default function Navbar() {
  return (
    <nav className='nav'>
        <div className='center'>
            <Link to="/" className='site-title'>Cristy and Jason</Link>
            <CountdownTimer />
        </div>
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/RSVP">RSVP</CustomLink>
            <CustomLink to="/Gallery">Gallery</CustomLink>
            <CustomLink to="/FAQ">FAQ</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}