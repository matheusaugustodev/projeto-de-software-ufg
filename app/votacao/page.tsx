"use client"
import CardVotacao from "@/components/cardVotacao";
import { useState } from "react";
import ShowVotacao from "@/components/showVotacao";

export default function Votacao() {

    const [estadoVotacao, setEstadoVotacao] = useState('Indefinido');

    const votar = (e: React.MouseEvent<HTMLElement>) => {

        e.preventDefault();
        const event = e.currentTarget;
        const votacao = event.innerText;

        if(votacao == 'Votar contra'){
            setEstadoVotacao('Você votou contra essa proposta');
        } else if (votacao == 'Votar a favor'){
            setEstadoVotacao('Você votou a favor dessa proposta');
        }

    }

    return (
            <section className="bg-customBlue h-screen p-12 px-8 lg:px-16 flex justify-center">

                <div className="flex flex-col text-white w-1/2 gap-8">

                    <h1 className="text-white text-4xl font-bold">Votar proposta</h1>
                    <div>
                        <span className="opacity-60">Proposta a ser votada </span>
                        <h2>Título da proposta</h2>
                    </div>
                    <div>
                        <span className="opacity-60">Tipo da proposta</span>
                        <h2>Alteração/Adição/Remoção da regra X</h2>
                    </div>
                    <div className="w-3/4">
                        <span className="opacity-60">Descrição da proposta</span>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at corrupti unde tempore rem dolores atque, autem eos. Nam doloribus quae dolores dignissimos, error delectus pariatur. Et adipisci ad quos.</h2>
                    </div>
                    <div className="flex gap-4">
                        <button className={`p-2 rounded-lg shadow-md ${estadoVotacao === 'Indefinido' ? 'bg-red-600 text-white block' : 'hidden'}`} onClick={votar}>Votar contra</button>
                        <button className={`p-2 rounded-lg shadow-md ${estadoVotacao === 'Indefinido' ? 'bg-green-600 text-white block' : 'hidden'}`} onClick={votar}>Votar a favor</button>
                        {estadoVotacao !== 'Indefinido' && (
                                <span className={`text-sm font-bold p-4 px-20 rounded-2xl text-white ${estadoVotacao === 'Você votou a favor dessa proposta' ? 'bg-green-600 ' : 'bg-red-600' }`}>{estadoVotacao}</span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4">

                    <CardVotacao />
                    <div className="flex gap-4">

                          <ShowVotacao />

                    </div>
                    
                </div>

            </section>
    )
}