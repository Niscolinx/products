import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
    return (
        <div className='gallery'>
            <div className='gallery-container'>
                <div className='gallery-items'>
                    <div className='gallery-box'>
                        <img
                            src='/img/hair.jpg.crdownload'
                            alt=''
                            className='gallery--1'
                        />
                    </div>
                </div>
            </div>

            <div className='slider'>
                <div className='gallery-box2'>
                    <img src='/img/bridal.jpg' alt='' className='gallery--2' />
                    <img src='/img/afro.jpg' alt='' className='gallery--2' />
                    <img src='/img/bride.jpg' alt='' className='gallery--2' />
                    <img src='/img/lipie.jpg' alt='' className='gallery--2' />
                    <img
                        src='/img/Butterfly-locs.jpg'
                        alt=''
                        className='gallery--2'
                    />
                    <img
                        src='/img/straight-orange-hair-bundles.jpg'
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
                            src='/img/lipstick.jpg'
                            alt=''
                            className='gallery--3'
                        />
                    </div>
                </div>
            </div>

            <div className='gallery-box gallery--4'>
                <img src='/img/wash.jpg' alt='' className='gallery--4' />
            </div>

            <div className='gallery-box gallery--5'>
                <img src='/img/ped.jpg' alt='' className='gallery--5' />
            </div>

            <div className='gallery-box gallery--6'>
                <img
                    src='/img/beautiful-bridal-nails.jpg'
                    alt=''
                    className='gallery--6'
                />
            </div>
        </div>
    )
}

const FirstNavList = () => {
    //Make an array of all the nav items
    const navArr = ['Home', 'About', 'Contacts', 'Services', 'Feedback']

    return (
        <nav className='header__nav'>
            <ul className='header__ul'>
                {/* Loop through the array, and make each item to be list, also the key is very important in react to differenciate the individual items, thus it must be unique */}
                {navArr.map((nav, idx) => (
                    <li className='header__li' key={idx + nav}>
                        <Link
                            to={'#'}
                            className={`header__link ${
                                idx === 0 && 'active-link'
                            }`}
                        >
                            {nav}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='header__datebox'>
                <span className='header__date'>20/02/2023</span>
            </div>
        </nav>
    )
}

const ProductCard = () => {

}

function Home() {
    return (
        <div>
            <section className='header'>
                <FirstNavList />

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

                    <div className='search-box'>
                        <form className='search-form'>
                            <input
                                type='text'
                                name='search'
                                placeholder='&#x1F50D;'
                                className='search-input'
                            />

                            <button className='search-btn'>Search</button>
                        </form>
                    </div>
                </div>

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
            <div class='section2'>
                <div class='line'></div>

                <div class='text'>
                    <p class='text-p'>Featured Products</p>
                </div>

                <div class='grid'>
                    <div class='grid-box'>
                        <div class='grid-img'>
                            <img
                                src='./img/curls.jpg'
                                alt=''
                                class='grid-img__img'
                            />
                        </div>
                        <div class='grid-text'>
                            <div class='grid-text__price'>
                                <h1 class='grid-text__price-price'>Curls</h1>
                                <div class='grid-text__line'></div>
                            </div>

                            <div class='grid-text__p'>
                                <p class='grid-text__p-p'>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit, amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                            <div class='grid-text__btn'>
                                <a href='#contact' class='grid-text__btn-btn'>
                                    $18.72
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class='grid-box'>
                        <div class='grid-img'>
                            <img
                                src='./img/fauxlocs.jpg'
                                alt=''
                                class='grid-img__img'
                            />
                        </div>
                        <div class='grid-text'>
                            <div class='grid-text__price'>
                                <h1 class='grid-text__price-price'>
                                    Faux locs
                                </h1>
                                <div class='grid-text__line'></div>
                            </div>

                            <div class='grid-text__p'>
                                <p class='grid-text__p-p'>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit, amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                            <div class='grid-text__btn'>
                                <a href='#contact' class='grid-text__btn-btn'>
                                    $14.17
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class='grid-box'>
                        <div class='grid-img'>
                            <img
                                src='./img/bonestraight.webp'
                                alt=''
                                class='grid-img__img'
                            />
                        </div>
                        <div class='grid-text'>
                            <div class='grid-text__price'>
                                <h1 class='grid-text__price-price'>
                                    Bone Straight
                                </h1>
                                <div class='grid-text__line'></div>
                            </div>

                            <div class='grid-text__p'>
                                <p class='grid-text__p-p'>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit, amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                            <div class='grid-text__btn'>
                                <a href='#contact' class='grid-text__btn-btn'>
                                    $21.23
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class='grid-box'>
                        <div class='grid-img'>
                            <img
                                src='./img/boxbraid.jpg'
                                alt=''
                                class='grid-img__img'
                            />
                        </div>
                        <div class='grid-text'>
                            <div class='grid-text__price'>
                                <h1 class='grid-text__price-price'>
                                    Boxbraids
                                </h1>
                                <div class='grid-text__line'></div>
                            </div>

                            <div class='grid-text__p'>
                                <p class='grid-text__p-p'>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit, amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                            <div class='grid-text__btn'>
                                <a href='#contact' class='grid-text__btn-btn'>
                                    $15.89
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class='grid-box'>
                        <div class='grid-img'>
                            <img
                                src='./img/afro.jpg'
                                alt=''
                                class='grid-img__img'
                            />
                        </div>
                        <div class='grid-text'>
                            <div class='grid-text__price'>
                                <h1 class='grid-text__price-price'>Afro</h1>
                                <div class='grid-text__line'></div>
                            </div>

                            <div class='grid-text__p'>
                                <p class='grid-text__p-p'>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit, amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                            <div class='grid-text__btn'>
                                <a href='#contact' class='grid-text__btn-btn'>
                                    $12.99
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class='grid-box'>
                        <div class='grid-img'>
                            <img
                                src='./img/ponytail.jpg'
                                alt=''
                                class='grid-img__img'
                            />
                        </div>
                        <div class='grid-text'>
                            <div class='grid-text__price'>
                                <h1 class='grid-text__price-price'>Ponytail</h1>
                                <div class='grid-text__line'></div>
                            </div>

                            <div class='grid-text__p'>
                                <p class='grid-text__p-p'>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit, amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                            <div class='grid-text__btn'>
                                <a href='#contact' class='grid-text__btn-btn'>
                                    $20.39
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class='grid-box'>
                        <div class='grid-img'>
                            <img
                                src='./img/knotless-braids.jpg'
                                alt=''
                                class='grid-img__img'
                            />
                        </div>
                        <div class='grid-text'>
                            <div class='grid-text__price'>
                                <h1 class='grid-text__price-price'>
                                    Knotless braids
                                </h1>
                                <div class='grid-text__line'></div>
                            </div>

                            <div class='grid-text__p'>
                                <p class='grid-text__p-p'>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit, amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                            <div class='grid-text__btn'>
                                <a href='#contact' class='grid-text__btn-btn'>
                                    $19.65
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class='grid-box'>
                        <div class='grid-img'>
                            <img
                                src='./img/Butterfly-locs.jpg'
                                alt=''
                                class='grid-img__img'
                            />
                        </div>
                        <div class='grid-text'>
                            <div class='grid-text__price'>
                                <h1 class='grid-text__price-price'>
                                    Butterfly locs
                                </h1>
                                <div class='grid-text__line'></div>
                            </div>

                            <div class='grid-text__p'>
                                <p class='grid-text__p-p'>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit, amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                            <div class='grid-text__btn'>
                                <a href='#contact' class='grid-text__btn-btn'>
                                    $21.23
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
