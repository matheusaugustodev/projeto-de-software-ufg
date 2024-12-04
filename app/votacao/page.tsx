"use client"
import CardVotacao from "@/components/cardVotacao";
import CardTempo from "@/components/cardTempo";
import VotosNecessarios from "@/components/cardVotosNecessarios";;
import { useState, useRef } from "react";

export default function Votacao() {

    const [estadoVotacao, setEstadoVotacao] = useState('Indefinido');

    const votar = (e: React.MouseEvent<HTMLElement>) => {

        e.preventDefault;
        const event = e.currentTarget;
        const votacao = event.innerText;

        if(votacao == 'Votar contra'){
            setEstadoVotacao('Contra');
            const novoEstado = estadoVotacao;
            console.log('new' + novoEstado)
        } else if (votacao == 'Votar a favor'){
            setEstadoVotacao('A Favor');
            console.log(estadoVotacao);
        }

        console.log('Layer Acima: ' + estadoVotacao)

        if(event.parentElement){
            event.parentElement.innerHTML = `<span>${estadoVotacao}</span>`
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
                        <button className="bg-red-600 p-2 rounded-lg shadow-md" onClick={votar}>Votar contra</button>
                        <button className="bg-green-600 p-2 rounded-lg shadow-md" onClick={votar}>Votar a favor</button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4">

                    <CardVotacao />
                    <div className="flex gap-4">

                        <CardTempo initialDate="2024-07-22T12:10:12" finalDate="2024-11-24T22:23:12" />
                        <VotosNecessarios />

                    </div>
                    
                </div>

            </section>
    )
}