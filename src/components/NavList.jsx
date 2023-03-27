export default NavList = ({ list }) => {
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
