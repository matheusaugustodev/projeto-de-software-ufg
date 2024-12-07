"use client";
import React from "react";
import Chart from "react-apexcharts";
import { useVoteContext } from "@/context/VoteContext"; // Importa o contexto

const Donut = () => {
  // Obtém os votos do contexto
  const { votes } = useVoteContext();

  // Calcula os dados para o gráfico dinamicamente
  const series = [votes.favor, votes.against];
  const totalVotes = series.reduce((acc, num) => acc + num, 0);
  const favorablePercentage = ((votes.favor / totalVotes) * 100).toFixed(1);

  const options = {
    labels: ["favoráveis", "contrários"], // Rótulos das fatias
    legend: {
      show: false, // Não exibe a legenda
    },
    stroke: {
      width: 0, // Largura da borda
    },
    colors: ["#00FF1E", "#FF0000"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%", // Ajusta o tamanho do donut
          labels: {
            show: true,
            name: {
              show: true, // Mostra os rótulos das fatias
            },
            value: {
              show: true, // Mostra os valores das fatias
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: "bold",
            },
            total: {
              show: true,
              label: "Apuração", // Texto no centro
              fontSize: "20px",
              fontWeight: "bold",
              color: "#FFFFFF", // Cor do texto no centro
              formatter: () => {
                if (isNaN(favorablePercentage) || !isFinite(favorablePercentage)) {
                  return "Nenhum voto apurado"; // Retorna 0% quando não há votos
                }
                return `${favorablePercentage}% favoráveis`; // Retorna a porcentagem normalmente
              }, // Mostra a porcentagem de favoráveis
            },
          },
        },
      },
    },
  };

  return (
    <div className="donut">
      <Chart options={options} series={series} type="donut" width="230" />
    </div>
  );
};

export default Donut;
