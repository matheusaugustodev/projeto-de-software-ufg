"use client";
import { useState, useEffect, useMemo } from "react";
import { CgProfile } from "react-icons/cg";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function NavBar() {
    // Array de pathnames
    const pathnames = useMemo(() => ['/servicos','/votacao', '/regras', '/parceria', '/sobre'], []);
    const [activeIndex, setActiveIndex] = useState(-1);
    const pathname = usePathname(); // Obtém o pathname atual

    useEffect(() => {
        // Atualiza o índice ativo com base no pathname atual
        const currentIndex = pathnames.indexOf(pathname);
        setActiveIndex(currentIndex);
    }, [pathname, pathnames]);

    function styleLink(index) {
        // Adiciona a classe ativa com base no índice
        return index === activeIndex ? "border-b-2 border-blue-500 text-gray-400" : "";
    }

    return (
        <nav className="bg-white shadow w-full ps-28 flex items-center">
            <nav className="h-16 w-11/12 flex items-center justify-between font-bold">
                {/* <span className=""> */}
                    <Image
                        src={'/images/logo.png'}
                        alt="Logo"
                        width={60}
                        height={60}
                    />
                {/* </span> */}
                <ul className="flex gap-12 items-center">
                    {pathnames.map((path, index) => (
                        <li
                            key={index}
                            className={styleLink(index)}
                        >
                            <a href={path}>{path.replace('/', '')}</a>
                        </li>
                    ))}
                </ul>
                <ul>
                    <li className="">
                        <a href="/perfil">
                            <CgProfile className="h-8 w-8"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </nav>
    );
}
