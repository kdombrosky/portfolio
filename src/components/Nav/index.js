import React, { useEffect } from 'react'; 
import logo from '../../assets/logo2.png';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = (currentCategory.name);
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
                        {categories.map((category) => (
                        // Set class to 'active' if the current category has been selected 
                        <li
                        className={`nav-item mx-2 fs-5 ${currentCategory.name === category.name && `active`}`}
                        key={category.name}
                        data-testid={`#${category.name}`}
                        >
                            <span onClick={() => { setCurrentCategory(category) }}>
                            <a 
                            href={`#${category.name}`}
                            className='nav-link'>
                                {category.name}
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