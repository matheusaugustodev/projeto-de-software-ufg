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
            fontSize: '14px', // Tamanho da fonte
            markers: {
                width: 12, // Largura do marcador colorido
                height: 12, // Altura do marcador colorido
                radius: 12, // Arredondamento dos marcadores
            },
        },
        color: ['#E9EDF0', '#3A5AFE'],
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
          width="240"
        />
      </div>
    );
  }
}

export default Donut;
