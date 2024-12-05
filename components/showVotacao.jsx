"use client";
import { useState, useEffect } from "react";
import CardTempo from "@/components/cardTempo";
import { Card } from "@chakra-ui/react";

export default function ShowVotacao() {
  const [remainingTime, setRemainingTime] = useState("");
  const [votos] = useState(60);
  const [votosNecessarios] = useState(60);
  const [resultado, setResultado] = useState("Indefinido");

  // Atualiza o resultado sempre que votos ou votosNecessarios mudarem
  useEffect(() => {
    if (votos >= votosNecessarios) {
      setResultado("Aprovado");
    } else {
      setResultado("Reprovado");
    }
  }, [votos, votosNecessarios]);

  // Renderiza o componente com base no estado
  const renderResultado = () => (
    <Card.Root className="bg-transparent shadow-md border-[1.3px] border-black">
      <Card.Body className="flex items-start">
        <span>Resultado</span>
        <span className="text-4xl font-bold text-white self-center">
          {resultado}
        </span>
        <span className="self-center text-opacity-70 text-sm opacity-55">
          votos favoráveis
        </span>
      </Card.Body>
    </Card.Root>
  );

  const renderVotosNecessarios = () => (
    <Card.Root className="bg-transparent shadow-md border-[1.3px] border-black">
      <Card.Body className="flex items-start">
        <span>Votos necessários</span>
        <span className="text-4xl font-bold text-white self-center">60%</span>
        <span className="self-center text-opacity-70 text-sm opacity-55">
          votos favoráveis
        </span>
      </Card.Body>
    </Card.Root>
  );

  return (
    <div className="flex gap-4">
      <CardTempo
        initialDate="2024-12-05T09:10:12"
        finalDate="2024-12-07T22:23:12"
        remainingTime={remainingTime}
        setRemainingTime={setRemainingTime}
      />
      {remainingTime === "CONCLUÍDA" ? renderResultado() : renderVotosNecessarios()}
    </div>
  );
}