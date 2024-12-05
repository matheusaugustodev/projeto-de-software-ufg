"use client";
import { useEffect } from "react";
import { Card } from "@chakra-ui/react";

export default function CardTempo({ initialDate, finalDate, remainingTime, setRemainingTime }) {
  // Formatação das datas recebidas como props
  const initialDateFormatted = new Date(initialDate);
  const finalDateFormatted = new Date(finalDate);

  useEffect(() => {
    const updateRemainingTime = () => {
      const now = new Date();
      const remainingMs = finalDateFormatted - (now < initialDateFormatted ? initialDateFormatted : now);

      if (remainingMs <= 0) {
        setRemainingTime("CONCLUÍDA");
        return;
      }

      const remainingDays = Math.floor(remainingMs / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");
      const remainingHours = Math.floor((remainingMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");
      const remainingMinutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      const remainingSeconds = Math.floor((remainingMs % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

      setRemainingTime(
        `${remainingDays}  ${remainingHours}  ${remainingMinutes}      ${remainingSeconds}`
      );
    };

    // Atualiza a contagem inicial
    updateRemainingTime();

    // Define o intervalo para atualização
    const intervalId = setInterval(updateRemainingTime, 1000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, [initialDateFormatted, finalDateFormatted]); // Remove setRemainingTime das dependências

  return (
    <Card.Root className="bg-transparent shadow-md border-[1.3px] border-black">
      <Card.Body>
        Tempo restante
        <span className="text-4xl font-bold tracking-wider">{remainingTime}</span>
        <span className="tracking-wider">
          <p
            className={`[word-spacing:10px] ${
              remainingTime == "CONCLUÍDA" ? "hidden" : "block"
            }`}
          >
            dias horas minutos segundos
          </p>
        </span>
      </Card.Body>
    </Card.Root>
  );
}