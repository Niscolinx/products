import React from 'react'

function Home() {
    return (
        <div>
            <section className='header'>
                <div className='header-list'>
                    <nav className='header__nav'>
                        <ul className='header__ul'>
                            <li className='header__li'>
                                <a
                                    href='#'
                                    className='header__link active-link'
                                >
                                    Home
                                </a>
                            </li>
                            <li className='header__li'>
                                <a href='about.html' className='header__link'>
                                    About
                                </a>
                            </li>
                            <li className='header__li'>
                                <a href='#footer' className='header__link'>
                                    Contacts
                                </a>
                            </li>
                            <li className='header__li'>
                                <a href='#' className='header__link'>
                                    Services
                                </a>
                            </li>
                            <li className='header__li'>
                                <a
                                    href='feedback.html'
                                    className='header__link'
                                >
                                    Feedback
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className='header__datebox'>
                        <span className='header__date'>20/02/2023</span>
                    </div>
                </div>

                <div className='logo'>
                    <div className='logo-box'>
                        <div>
                            <img
                                src='./img/logo2.png'
                                alt='logo'
                                className='logo-logo'
                            />
                        </div>
                    </div>

                    <div className='search-box'>
                        <form className='search-form'>
                            <input
                                type='text'
                                name='search'
                                placeholder='&#x1F50D;'
                                className='search-input'
                            />

                            <input
                                className='search-btn'
                                type='submit'
                                value='Search'
                            />
                        </form>
                    </div>
                </div>

                <div className='dark'>
                    <nav className='dark__nav'>
                        <ul className='dark__ul'>
                            <li className='dark__li'>
                                <a href='braids.html' className='dark__link'>
                                    Braids
                                </a>
                            </li>
                            <li className='dark__li'>
                                <a href='#' className='dark__link'>
                                    Wigs
                                </a>
                            </li>
                            <li className='dark__li'>
                                <a href='hair.html' className='dark__link'>
                                    Hair
                                </a>
                            </li>
                            <li className='dark__li'>
                                <a href='#' className='dark__link'>
                                    Makeup
                                </a>
                            </li>
                            <li className='dark__li'>
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

                <div className='gallery'>
                    <div className='gallery-container'>
                        <div className='gallery-items'>
                            <div className='gallery-box'>
                                <img
                                    src='./img/hair.jpg.crdownload'
                                    alt=''
                                    className='gallery--1'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='slider'>
                        <div className='gallery-box2'>
                            <img
                                src='./img/bridal.jpg'
                                alt=''
                                className='gallery--2'
                            />
                            <img
                                src='./img/afro.jpg'
                                alt=''
                                className='gallery--2'
                            />
                            <img
                                src='./img/bride.jpg'
                                alt=''
                                className='gallery--2'
                            />
                            <img
                                src='./img/lipie.jpg'
                                alt=''
                                className='gallery--2'
                            />
                            <img
                                src='./img/Butterfly-locs.jpg'
                                alt=''
                                className='gallery--2'
                            />
                            <img
                                src='./img/straight-orange-hair-bundles.jpg'
                                alt=''
                                className='gallery--2'
                            />
                        </div>

                        <button className='slider__btn slider__btn--left'>
                            &larr;
                        </button>
                        <button className='slider__btn slider__btn--right'>
                            &rarr;
                        </button>
                        <div className='dots'></div>
                    </div>

                    <div className='gallery--3'>
                        <div className='gallery-items'>
                            <div className='gallery-box'>
                                <img
                                    src='./img/lipstick.jpg'
                                    alt=''
                                    className='gallery--3'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='gallery-box gallery--4'>
                        <img
                            src='./img/wash.jpg'
                            alt=''
                            className='gallery--4'
                        />
                    </div>

                    <div className='gallery-box gallery--5'>
                        <img
                            src='./img/ped.jpg'
                            alt=''
                            className='gallery--5'
                        />
                    </div>

                    <div className='gallery-box gallery--6'>
                        <img
                            src='./img/beautiful-bridal-nails.jpg'
                            alt=''
                            className='gallery--6'
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
