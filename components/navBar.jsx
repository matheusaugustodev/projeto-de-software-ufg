"use client"
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
//get the actual route
import { useRouter } from 'next/navigation';

//Array of pathnames
const pathnames = ['/servicos', '/votacao', '/parceiro', '/sobre'];

function currentLink(pathname) {
    if (pathnames.includes(pathname)) {
        return pathnames.indexOf(pathname);
    }
    return -1;
}
function styleLink(index, pathname) {
    if (currentLink(pathname) === index) {
        return "border-b-2 border-blue-500 text-gray-400";
    }
    return "";
}


export default function NavBar() {

    const { pathname } = useRouter();
    const current = styleLink(currentLink(pathname), pathname);

    return (
        <nav className="bg-white shadow w-full flex items-center justify-evenly">
            <span className="">LOGO</span>
            <nav className="h-16 w-11/12 flex items-center justify-evenly font-bold">
                <ul className="flex gap-28 items-center">
                    <li className={current}><a href="/servicos">Servicos</a></li>
                    <li><a href='/'>Votação de propostas</a></li>
                    <li><a href="/">Seja Parceiro</a></li>
                    <li><a href="/">Sobre</a></li>
                    <li><IoMdSearch className="h-8 w-8"/></li>
                    <li>
                        <a href="/perfil">
                            <CgProfile className="h-8 w-8"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}