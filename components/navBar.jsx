"use client";
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from "next/link";

export default function NavBar() {

    const rotas = [
        { nome: 'Serviços', path: '/servicos', regex: /^\/servicos$/ },
        { nome: 'Votação', path: '/votacao', regex: /^\/votacao$/ },
        { nome: 'Regras', path: '/regras', regex: /^\/regras$/ },
        { nome: 'Parceria', path: '/parceria', regex: /^\/parceria$/ },
        { nome: 'Sobre', path: '/sobre', regex: /^\/sobre$/ }
    ];

    const [activeIndex, setActiveIndex] = useState(-1);
    const pathname = usePathname();

    useEffect(() => {
        const currentIndex = rotas.findIndex(rota => rota.regex.test(pathname));
        setActiveIndex(currentIndex);
    }, [pathname]);

    function styleLink(index) {
        // Adiciona a classe ativa com base no índice
        return index === activeIndex ? "border-b-2 border-blue-500 text-gray-400" : "";
    }

    return (
        <nav className="bg-white shadow w-full flex justify-center items-center">
            <nav className="h-16 w-11/12 flex items-center justify-between font-bold">
                <Link href="/" title="Home">
                    <Image
                        src={'/images/logo.png'}
                        alt="Logo"
                        width={60}
                        height={60}
                    />
                </Link>
                <ul className="flex gap-16 items-center">
                    {rotas.map((path, index) => (
                        <li
                            key={index}
                            className={styleLink(index)}
                        >
                            <a href={path.path} title={path.nome} className="text-xs">{path.nome.toUpperCase()}</a>
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
