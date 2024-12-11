"use client";
import React, { useState } from "react";
import { useVoteContext } from "@/context/VoteContext";
import CardVotacao from "@/components/cardVotacao";
import ShowVotacao from "@/components/showVotacao";
import Link from "next/link";

export default function Votacao() {
  const { castVote } = useVoteContext(); // Obtém os votos globais e a função para registrar votos
  const [estadoVotacao, setEstadoVotacao] = useState("Indefinido"); // Exibe o status da votação
  const [modalAberto, setModalAberto] = useState(false); // Estado para controlar o popup
  const [tipoVoto, setTipoVoto] = useState<"favor" | "against" | null>(null); // Tipo do voto selecionado
  const [remainingTime, setRemainingTime] = useState(""); // Estado para o tempo restante

  const abrirModal = (type: "favor" | "against") => {
    setTipoVoto(type); // Define o tipo de voto no modal
    setModalAberto(true); // Abre o modal
  };

  const confirmarVoto = () => {
    if (tipoVoto) {
      // Atualiza o estado global
      castVote(tipoVoto); // Atualiza a variável global de votos
      setEstadoVotacao(
        tipoVoto === "favor"
          ? "Você votou a favor dessa proposta"
          : "Você votou contra essa proposta"
      );
      setModalAberto(false); // Fecha o modal
    }
  };

  const fecharModal = () => {
    setModalAberto(false); // Fecha o modal sem registrar o voto
  };

  // Verifica se a votação foi concluída
  const isVotingClosed = remainingTime === "CONCLUÍDA";

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
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at
            corrupti unde tempore rem dolores atque, autem eos. Nam doloribus
            quae dolores dignissimos, error delectus pariatur. Et adipisci ad
            quos.
          </h2>
        </div>
        <div className="flex gap-4">
            {/* Condição combinando estadoVotacao e isVotingClosed */}
            {isVotingClosed ? (
                <span className="text-sm font-bold p-4 px-20 rounded-2xl text-white bg-gray-600">
                A votação foi encerrada.
                </span>
            ) : estadoVotacao === "Indefinido" ? (
                <>
                <button
                    className="p-2 rounded-lg shadow-md bg-red-600 text-white"
                    onClick={() => abrirModal("against")}
                >
                    Votar contra
                </button>
                <button
                    className="p-2 rounded-lg shadow-md bg-green-600 text-white"
                    onClick={() => abrirModal("favor")}
                >
                    Votar a favor
                </button>
                </>
            ) : (
                <span
                className={`text-sm font-bold p-4 px-20 rounded-2xl text-white ${
                    estadoVotacao === "Você votou a favor dessa proposta"
                    ? "bg-green-600"
                    : "bg-red-600"
                }`}
                >
                {estadoVotacao}
                </span>
            )}
            <Link href="/votacao/historico">
              <button className="p-4 rounded-lg shadow-md bg-indigo-600 text-white">Histórico votações</button>
            </Link>
            </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <CardVotacao />
        <div className="flex gap-4">
          {/* Passando a prop isVotingClosed para o ShowVotacao */}
          <ShowVotacao
            remainingTime={remainingTime}
            setRemainingTime={setRemainingTime}
            isVotingClosed={isVotingClosed} // Prop de controle de tempo
          />
        </div>
      </div>

      {/* Modal para confirmação do voto */}
      {modalAberto && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-8 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-bold mb-4">
              Confirmação de Voto
            </h2>
            <p className="mb-4">
              Você confirma o voto{" "}
              <span className="font-bold">
                {tipoVoto === "favor" ? "A FAVOR" : "CONTRA"}
              </span>{" "}
              desta proposta? (Essa decisão não pode ser desfeita)
            </p>
            <div className="flex gap-4 justify-center">
              <button
                className="p-2 rounded-lg shadow-md bg-green-600 text-white"
                onClick={confirmarVoto}
              >
                Confirmar
              </button>
              <button
                className="p-2 rounded-lg shadow-md bg-gray-400 text-white"
                onClick={fecharModal}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
