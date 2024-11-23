"use client"
import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Donut extends Component {


  constructor(props) {
    super(props);

    this.state = {
        options: {
          labels: ["favoráveis", "contrários"], // Rótulos das fatias
          legend: {
            show: false, // Não exibe a legenda
          },
          stroke: {
            width: 0, // Largura da borda
          },
          colors: ["#00FF1E", "#FF0000"],
          dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
              // Exibe o valor correspondente a cada fatia
              return opts.w.config.series[opts.seriesIndex];
            },
            style: {
              fontSize: "24px",
              fontWeight: "bold",
              colors: ["#fff"], // Cor do texto nas fatias
            },
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
                    label: "Total",
                    color: "#FFFFFF",
                    formatter: function (w) {
                      // Calcula a soma das séries
                      return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                    },
                  },
                },
              },
            },
          },
        },
        series: [77, 23], // Dados numéricos
      };
    }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="230"
        />
      </div>
    );
  }
}

export default Donut;
