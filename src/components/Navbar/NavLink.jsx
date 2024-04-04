
export const NavLink = ({ name, path }) => {

    return (
        <li className="text-secondary tracking-wide self-center md:text-green-700
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
