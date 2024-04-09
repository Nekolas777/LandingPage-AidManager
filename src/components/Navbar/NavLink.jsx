
export const NavLink = ({ name, path }) => {

    return (
        <li className="tracking-wide self-center
            md:font-light md:transform-none">
            <a
                style={{ position: 'relative' }}
                className="underline-effect font-medium after:bg-secondary-dark md:transition-none"
                href={path}
                rel="noopener noreferrer"
            >
                {name}</a>
        </li>
    )
}
