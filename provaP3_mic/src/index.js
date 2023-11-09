import incidencias from "./data.js";

const incidenciasSet = incidencias

console.log(incidenciasSet)

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [incidenciasSet[0][0], incidenciasSet[1][0], incidenciasSet[2][0], incidenciasSet[3][0],
    incidenciasSet[4][0], incidenciasSet[5][0], incidenciasSet[6][0], incidenciasSet[7][0],
    incidenciasSet[8][0], incidenciasSet[9][0], incidenciasSet[10][0], incidenciasSet[11][0],
    incidenciasSet[12][0], incidenciasSet[13][0], incidenciasSet[14][0], incidenciasSet[15][0],
    incidenciasSet[16][0], incidenciasSet[17][0], incidenciasSet[18][0], incidenciasSet[19][0],
    incidenciasSet[20][0], incidenciasSet[21][0], incidenciasSet[22][0], incidenciasSet[23][0],
    incidenciasSet[24][0], incidenciasSet[25][0], incidenciasSet[26][0], incidenciasSet[27][0]],
    datasets: [{
      label: 'Frequência de palavras em texto',
      data: [incidenciasSet[0][1], incidenciasSet[1][1], incidenciasSet[2][1], incidenciasSet[3][1],
      incidenciasSet[4][1], incidenciasSet[5][1], incidenciasSet[6][1], incidenciasSet[7][1],
      incidenciasSet[8][1], incidenciasSet[9][1], incidenciasSet[10][1], incidenciasSet[11][1],
      incidenciasSet[12][1], incidenciasSet[13][1], incidenciasSet[14][1], incidenciasSet[15][1],
      incidenciasSet[16][1], incidenciasSet[17][1], incidenciasSet[18][1], incidenciasSet[19][1],
      incidenciasSet[20][1], incidenciasSet[21][1], incidenciasSet[22][1], incidenciasSet[23][1],
      incidenciasSet[24][1], incidenciasSet[25][1], incidenciasSet[26][1], incidenciasSet[27][1]],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
