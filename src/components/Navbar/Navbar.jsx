import { useState } from "react";
import { NavLogo } from "./NavLogo";
import { NavMenu } from "./NavMenu";


export const Navbar = () => {

    // for hamburguer menu
    const [nav, setNav] = useState(false);

    const toogleNav = () => {
        setNav(!nav);
    }

    return (
        <header className="bg-slate-200 w-full sticky top-0 z-[100]">
            <nav className="container-nav relative min-h-full h-32 flex items-center justify-between">
                <a href="#">
                    <NavLogo />
                </a>
                <NavMenu 
                    nav={ nav }
                />
            </nav>
        </header>
    )
}
