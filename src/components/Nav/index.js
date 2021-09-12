import React, { useEffect } from 'react'; 
import { capitalizeFirstLetter } from "../../utils/helpers";
import logo from '../../assets/logo2.png';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        // contactSelected,
        // setContactSelected
    } = props;

    // 
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return(
        <header>
            <nav className="navbar navbar-light sticky-top navbar-expand-lg"> 
                <div className="container">
                <a className="navbar-brand" href="/">
                    <img 
                    src={logo}
                    alt="name-logo" 
                    />
                </a>
                    <ul className="navbar-nav mb-2 d-flex">
                        {/* <li>
                            <a data-testid="about" href="#about">About me</a>
                        </li>
                        <li>
                            <a data-testid="about" href="#about">Portfolio</a>
                        </li>
                        <li>
                            <a data-testid="about" href="#about">Contact</a>
                        </li>
                        <li>
                            <a data-testid="about" href="#about">Resume</a>
                        </li> */}
                        {categories.map((category) => (
                        // Set class to 'navActive' if the current category has been selected 
                        <li
                        className={`nav-item mx-2 fs-5 ${currentCategory.name === category.name && `active`}`}
                        key={category.name}
                        // href={`#${category.name}`}
                        data-testid={`#${category.name}`}
                        >
                            <span onClick={() => { setCurrentCategory(category) }}>
                            <a 
                            href={`#${category.name}`}
                            className='nav-link'>
                                {capitalizeFirstLetter(category.name)}
                            </a>
                            </span>
                        </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;