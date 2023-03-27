import React from 'react'

const NavList = ({ list }) => {
    return (
        <ul className='header__ul'>
            {/* Loop through the array, and make each item to be list, also the key is very important in react to differenciate the individual items, thus it must be unique */}
            {list.map((nav, idx) => (
                <li className='header__li' key={idx + nav}>
                    <Link
                        to={'#'}
                        className={`header__link ${idx === 0 && 'active-link'}`}
                    >
                        {nav}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

const NavListContainer = ({ navList }) => {
    return (
        <nav className='header__nav'>
            <NavList list={navList} />
            <div className='header__datebox'>
                <span className='header__date'>20/02/2023</span>
            </div>
        </nav>
    )
}


const Header = () => {
    return (
        <section className='header'>
            <NavListContainer navList={first_list} />

            <div className='logo'>
                <div className='logo-box'>
                    <div>
                        <img
                            src='/img/logo2.png'
                            alt='logo'
                            className='logo-logo'
                        />
                    </div>
                </div>

                <div className='searchBox'>
                    <form className='searchBox__form'>
                        <input
                            type='text'
                            name='search'
                            placeholder='&#x1F50D;'
                            className='searchBox__input'
                        />

                        <button className='searchBox__btn'>Search</button>
                    </form>
                </div>
            </div>

            <NavListContainer navList={second_list} />

            <div className='secondary'>
                <nav className='secondary__nav'>
                    <ul className='secondary__ul'>
                        <li className='secondary__li'>
                            <a href='braids.html' className='secondary__link'>
                                Braids
                            </a>
                        </li>
                        <li className='secondary__li'>
                            <a href='#' className='secondary__link'>
                                Wigs
                            </a>
                        </li>
                        <li className='secondary__li'>
                            <a href='hair.html' className='secondary__link'>
                                Hair
                            </a>
                        </li>
                        <li className='secondary__li'>
                            <a href='#' className='secondary__link'>
                                Makeup
                            </a>
                        </li>
                        <li className='secondary__li'>
                            <a href='nails.html' className='dark__link'>
                                Nails
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className='logo-contact'>
                    <p className='logo-contact__p'>
                        <i className='logo-contact__icon fa-solid fa-phone-volume'></i>
                        +2348136016162
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Header