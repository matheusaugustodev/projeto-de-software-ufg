"use client"
import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Donut extends Component {


  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [`Todas 210`, 'Votadas 350'], // Rótulos das fatias
        legend: {
            position: 'bottom', // Coloca os rótulos abaixo do gráfico
            horizontalAlign: 'center', // Centraliza horizontalmente
            fontSize: '12px', // Tamanho da fonte
            markers: {
              size: 3,
            },
        },
        colors: ['#E9EDF0', '#3A5AFE'],
      },
      series: [210, 350], // Dados numéricos
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="210"
        />
      </div>
    );
  }
}

export default Donut;
