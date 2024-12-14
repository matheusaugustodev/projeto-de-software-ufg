import { SideBarPropostas } from "@/components/SideBarPropostas";

export default function Propostas() {

    return (
        <div className="flex h-full relative">
            
            <SideBarPropostas />

            <section className="bg-customBlue h-full w-2/3 p-10 justify-start items-start flex flex-col gap-8 text-white">
                <h1 className=" text-2xl font-bold self-start justify-self-start">Lista de Propostas</h1>
                
                <p>Mais Recentes</p>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">

                    <div className="bg-serviceBox h-48 w-48"></div>
                    <div className="bg-serviceBox h-48 w-48"></div>
                    <div className="bg-serviceBox h-48 w-48"></div>
                    <div className="bg-serviceBox h-48 w-48"></div>
                </div>
                <p>Todas</p>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">

                    <div className="bg-serviceBox h-48 w-48"></div>
                    <div className="bg-serviceBox h-48 w-48"></div>
                    <div className="bg-serviceBox h-48 w-48"></div>
                    <div className="bg-serviceBox h-48 w-48"></div>

                    <div className="bg-serviceBox h-48 w-48"></div>
                    <div className="bg-serviceBox h-48 w-48"></div>
                    <div className="bg-serviceBox h-48 w-48"></div>
                    <div className="bg-serviceBox h-48 w-48"></div>
                </div>

            </section>

        </ div>
    )
}