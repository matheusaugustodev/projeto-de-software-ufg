"use client";
import { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { usePathname } from 'next/navigation';

export default function NavBar() {
    // Array de pathnames
    const pathnames = ['/servicos', '/votacao', '/parceiro', '/sobre'];
    const pathname = usePathname(); // Obtém o pathname atual
    const [activeIndex, setActiveIndex] = useState(-1);

    useEffect(() => {
        // Atualiza o índice ativo com base no pathname atual
        const currentIndex = pathnames.indexOf(pathname);
        setActiveIndex(currentIndex);
    }, [pathname]);

    function styleLink(index) {
        // Adiciona a classe ativa com base no índice
        return index === activeIndex ? "border-b-2 border-blue-500 text-gray-400" : "";
    }

    return (
        <nav className="bg-white shadow w-full flex items-center justify-evenly">
            <span className="">LOGO</span>
            <nav className="h-16 w-11/12 flex items-center justify-evenly font-bold">
                <ul className="flex gap-28 items-center">
                    {pathnames.map((path, index) => (
                        <li
                            key={index}
                            className={styleLink(index)}
                        >
                            <a href={path}>{path.replace('/', '')}</a>
                        </li>
                    ))}
                    <li><IoMdSearch className="h-8 w-8"/></li>
                    <li>
                        <a href="/perfil">
                            <CgProfile className="h-8 w-8"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </nav>
    );
}
