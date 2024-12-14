import { PiMagnifyingGlassBold } from "react-icons/pi";  

export const SideBarPropostas = () => {
    return (
        <nav className="bg-white flex text-black flex-col side-menu justify-start items-center gap-12 p-5">
    
            <div className="flex flex-col gap-8 self-start">
    
                <div className="relative">
                    <span>Filtrar Propostas</span>
                    <div className="absolute">
    
                        <input type="text" name="" id="" className="z-10 absolute left-0 top-0" />
                        <PiMagnifyingGlassBold className="z-20 absolute left-44 top-4 search" />
    
                    </div>
        
                </div>
    
                <div className="flex flex-col mt-8">
                    <span>Data</span>
                    <div>
                        <input type="checkbox" name="recentes" id="recentes" />
                        <label htmlFor="recentes">Mais recentes</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antigos" id="antigos" />
                        <label htmlFor="antigos">Mais antigos</label>
                    </div>
                </div>
    
                <div className="flex flex-col">
                    <span>Popularidade</span>
                    <div>
                        <input type="checkbox" name="recentes" id="recentes" />
                        <label htmlFor="recentes">Mais votados</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antigos" id="antigos" />
                        <label htmlFor="antigos">Menos votados</label>
                    </div>
                </div>
    
                <div className="flex flex-col">
                    <span>Aprovação</span>

                    <div>
                        <input type="checkbox" name="recentes" id="recentes" />
                        <label htmlFor="recentes">Mais aprovados</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antigos" id="antigos" />
                        <label htmlFor="antigos">Menos aprovados</label>
                    </div>
    
                </div>

                <div className="flex flex-col">
                    <span>Status</span>

                    <div>
                        <input type="checkbox" name="recentes" id="recentes" />
                        <label htmlFor="recentes">Aprovado</label>
                    </div>

                    <div>
                        <input type="checkbox" name="antigos" id="antigos" />
                        <label htmlFor="antigos">Em andamento</label>
                    </div>

                    <div>
                        <input type="checkbox" name="antigos" id="antigos" />
                        <label htmlFor="antigos">Reprovado</label>
                    </div>
    
                </div>


            </div>
    
        </nav>
    )
}