import React, { useEffect, useState } from "react";
import CardTempo from "@/components/cardTempo";
import { Card } from "@chakra-ui/react";
import { useVoteContext } from "@/context/VoteContext";
import PropTypes from "prop-types"; // Importa PropTypes

function ShowVotacao({ remainingTime, setRemainingTime, isVotingClosed }) {
  const { votes } = useVoteContext(); // Obtém os votos globais do contexto
  const [resultado, setResultado] = useState("Indefinido");

  const votosFavoraveis = votes.favor;
  const votosContrarios = votes.against;
  const votosTotais = votosFavoraveis + votosContrarios;
  
  // A porcentagem necessária para aprovação (60% dos votos totais)
  const votosNecessarios = votosTotais * 0.6;

  // Atualiza o resultado quando o timer termina
  useEffect(() => {
    if (remainingTime === "CONCLUÍDA") {
      if (votosFavoraveis >= votosNecessarios) {
        setResultado("Aprovado");
      } else {
        setResultado("Reprovado");
      }
    }
  }, [remainingTime, votosFavoraveis, votosNecessarios]);

  // Renderiza o resultado após o término do tempo
  const renderResultado = () => (
    <Card.Root className="bg-transparent shadow-md border-[1.3px] border-black">
      <Card.Body className="flex flex-col items-center">
        <span className="text-lg font-medium">Resultado</span>
        <span className="text-4xl font-bold text-white mt-2">{resultado}</span>
        <span className="self-center text-opacity-70 text-sm opacity-55 mt-1">
          {votosFavoraveis} votos favoráveis
        </span>
      </Card.Body>
    </Card.Root>
  );

  return (
    <div className="flex gap-4">
      {/* Componente de contagem de tempo */}
      <CardTempo
        initialDate="2024-12-05T09:10:12"
        finalDate="2024-12-07T17:45:12"
        remainingTime={remainingTime}
        setRemainingTime={setRemainingTime}
      />
      {/* Exibe a porcentagem necessária ou o resultado com base no tempo restante */}
      {remainingTime !== "CONCLUÍDA" && !isVotingClosed
        ? (
          <Card.Root className="bg-transparent shadow-md border-[1.3px] border-black">
            <Card.Body className="flex flex-col items-center">
              <span className="text-md font-medium opacity-50">Votos necessários</span>
              <span className="text-4xl font-bold text-white mt-2">
                (60%)
              </span>
              <span className="text-md font-medium opacity-50">Votos favoráveis</span>
            </Card.Body>
          </Card.Root>
        ) 
        : renderResultado()
      }
    </div>
  );
}

// Definindo os tipos das props com PropTypes
ShowVotacao.propTypes = {
  remainingTime: PropTypes.string.isRequired,
  setRemainingTime: PropTypes.func.isRequired,
  isVotingClosed: PropTypes.bool.isRequired,
};

export default ShowVotacao;
