import { useEffect, useState } from "react";

import { NavLogo } from "./NavLogo";
import { NavMenu } from "./NavMenu";

import { HamburguerMenu } from "./HamburguerMenu";
import { CloseMenu } from "./CloseMenu";

const body = document.body;

export const Navbar = () => {

    // for hamburguer menu
    const [nav, setNav] = useState(false);
    const [header, setHeader] = useState(false);

    const toogleNav = () => {
        setNav(!nav);
        body.classList.toggle('overlay');
    }

    const changeBackground = () => {
        // aplicamos estilos cuando se haya realizado scroll, verificar class condicional
        setHeader(window.scrollY > 0);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        }
    }, [])


    return (
        <header className={`w-full sticky top-0 z-[100] ${header ? "bg-dark-green" : "bg-slate-200"} transition-all duration-300 ease`}>
            <nav className="container-nav relative min-h-full h-32 flex items-center justify-between">
                <a href="#">
                    <NavLogo
                        header={ header }
                    />
                </a>
                <NavMenu
                    header={ header }
                    nav={ nav }
                />
                <div onClick={ toogleNav } className="block lg:hidden cursor-pointer">
                    {
                        nav ? 
                        <CloseMenu 
                            header={ header }
                        />
                        : 
                        <HamburguerMenu
                            header={ header }
                        />
                    }
                </div>
            </nav>
        </header>
    )
}
