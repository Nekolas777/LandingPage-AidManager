import { Button } from "../Button/Button"
import { NavLink } from "./NavLink"

const links = [
    { name: 'Home', path: "#" },
    { name: 'About Us', path: "#about_us" },
    { name: 'Organizations', path: "#brands-carousel" },
    { name: 'Testimonials', path: "#testimonials" },
]

export const NavMenu = ({ header, nav }) => {

    return (
        <div className={`w-11/12 fixed opacity-100 mx-auto
          ${nav ? 'top-36 translate-x-[0%] opacity-100 transition-all duration-300 ease-out' : 'translate-x-[-120%] opacity-0'} 
          lg:relative lg:flex lg:h-auto lg:w-auto lg:mx-0 lg:transform-none lg:content-none lg:transition-none`}>
            <ul className={`h-full bg-slate-100 flex flex-col place-items-center gap-6 py-6 rounded-lg 
              lg:relative lg:flex lg:flex-row lg:gap-12 lg:rounded-none lg:py-0 lg:bg-transparent
              font-poppins text-xl ${header? "text-dark-green lg:text-slate-100": "text-dark-green"}`}>
                {
                    links.map(link =>
                        <NavLink
                            key={link.name} 
                            name={link.name} 
                            path={link.path}
                        />
                    )
                }
                <Button name="Get Started"/>
            </ul>
        </div>
    )
}
