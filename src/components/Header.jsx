import React from 'react'
import { Link } from 'react-router-dom'

const first_list = ['Home', 'About', 'Contacts', 'Services', 'Feedback']
const second_list = ['Braids', 'Wigs', 'Hair', 'Makeup', 'Nails']

const HeaderList = ({ navList, type = 'primary' }) => {
    return (
        <div className={type}>
            <nav className={`${type}__nav`}>
                <ul className={`${type}__ul`}>
                    {/* Loop through the array, and make each item to be list, also the key is very important in react to differenciate the individual items, thus it must be unique */}
                    {navList.map((nav, idx) => (
                        <li className={`${type}__li`} key={idx + nav}>
                            <Link
                                to={'#'}
                                className={`${type}__link ${
                                    idx === 0 && 'active-link'
                                }`}
                            >
                                {nav}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='header__nav--secondary'>
                    <span className='header__date'>20/02/2023</span>
                </div>
            </nav>
        </div>
    )
}

const Header = () => {
    return (
        <section className='header'>
            <HeaderList navList={first_list} type={'header'} />

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

            <HeaderList navList={second_list} type={'secondary'} />

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
