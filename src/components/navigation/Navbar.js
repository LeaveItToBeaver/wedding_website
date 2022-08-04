import React, { useEffect, useState }from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import CountdownTimer from '../countdown/CountdownTimer';
import "./navbar.css";
import "./mobile-navbar.css"

export default function Navbar() {
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 680;

    return (
        <nav className='nav'>
            <div className={isMobile ? 'flower-image-mobile' : 'flower-image'}>
                <div className='center'>
                    <Link to="/" className={
                        isMobile ? 'mobile-site-title' : 'site-title'
                    }>
                        Cristy & Jason
                    </Link>
                    <CountdownTimer />
                </div>
                <ul>
                    <CustomLink to="/" className={isMobile ? 'mobile-link' : 'link'}>
                        Home
                    </CustomLink>
                    <CustomLink to="/RSVP" className={isMobile ? 'mobile-link' : 'link'}>
                        RSVP
                    </CustomLink>
                    <CustomLink to="/Registry" className={isMobile ? 'mobile-link' : 'link'}>
                        Registry
                    </CustomLink>
                    <CustomLink to="/Gallery" className={isMobile ? 'mobile-link' : 'link'}>
                        Gallery
                    </CustomLink>
                    <CustomLink to="/FAQ" className={isMobile ? 'mobile-link' : 'link'}>
                        FAQ
                    </CustomLink>
                </ul>
            </div>
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