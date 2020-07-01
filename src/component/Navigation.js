import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from 'react-bootstrap';
import logo from '../image/movie_db_logo.svg'
import './Navigation.css'

const Navigation = ({ likeList, blockList }) => {

    const [sideBar, setSideBar] = useState(false)
    const handleSideBar = () => {
        setSideBar(!sideBar)
    }

    const [active, setActive] = useState("/movie")

    let numLike = likeList.length
    let numBlock = blockList.length

    let navEnum = [
        { link: "/", display: "Home", badge: null },
        { link: "/movie", display: "Movie List", badge: null },
        { link: "/like", display: "Like List", badge: { variant: "danger", value: numLike } },
        { link: "/block", display: "Block List", badge: { variant: "secondary", value: numBlock } },
    ]

    return (
                <nav className="navigation">
            <h3 className="logo">
                <Link className="link" to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
            </h3>
            <ul className={sideBar ? "nav-active nav-links" : "nav-links"}>
                {navEnum.map(item => {
                    if (active === item.link)
                        return (
                            <li key={item.link}>
                                <Link className="active nav-link" onClick={() => setActive(item.link)} to={item.link}>{item.display}{' '}
                                    {(item.badge && item.badge.value > 0) && <Badge pill variant={item.badge.variant}>{item.badge.value}</Badge>}
                                </Link>
                            </li>
                        );
                    else
                        return (
                            <li key={item.link}><Link className="nav-link" onClick={() => setActive(item.link)} to={item.link}>{item.display}{' '}
                                {(item.badge && item.badge.value > 0) && <Badge pill variant={item.badge.variant}>{item.badge.value}</Badge>}
                            </Link>
                            </li>
                        );
                })}

            </ul>
            <div className={sideBar ? "close burger" : "burger"} onClick={handleSideBar}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navigation;
