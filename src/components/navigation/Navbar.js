import React from 'react'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'
import CountdownTimer from '../countdown/CountdownTimer';
import "./navbar.css"

export default function Navbar() {
  return (
    <nav className='nav'>
        <div className='center'>
            <Link to="/" className='site-title'>Cristy & Jason</Link>
            <CountdownTimer />
        </div>
        <ul>
            <CustomLink to="/" className="link">Home</CustomLink>
            <CustomLink to="/RSVP" className="link">RSVP</CustomLink>
            <CustomLink to="/Gallery" className="link">Gallery</CustomLink>
            <CustomLink to="/FAQ" className="link">FAQ</CustomLink>
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