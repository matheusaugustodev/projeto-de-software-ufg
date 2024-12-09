"use client";
import React from "react";
import Chart from "react-apexcharts";

const HorizontalBarChart = ({ data }) => {
  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        distributed: false, // Para manter apenas duas cores
      },
    },
    colors: ["#00FF1E", "#FF0000"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["A favor", "Contra"],
      labels: {
        style: {
          colors: ["#FFFFFF"],
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["#FFFFFF"],
        },
      },
    },
    grid: {
      borderColor: "#444444",
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    legend: {
      show: false,
    },
  };

  return (
    <div className="w-full">
      {data.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="text-white mb-2 text-lg">{item.proposal}</h4>
          <Chart
            options={options}
            series={[
              {
                data: [item.favor, item.against],
              },
            ]}
            type="bar"
            height={60}
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalBarChart;
