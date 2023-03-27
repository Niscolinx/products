import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import Header from '../components/Header'

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




const ProductCard = () => {}

function Home() {
    return (
        <div>
            <Header/>
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
