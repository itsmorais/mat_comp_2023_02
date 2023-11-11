async function fetchFileData() {

    const response = await fetch('input2.txt'); // fetch no arquivo 

    let data = await response.text(); // converte para text type
    data = data.toLowerCase()
    data = data.replaceAll('.', "") // Substitui pontos por espaço vazio
    data = data.replaceAll("-", "") // Substitui traços por espaço vazio

    return data.split(' '); // Retorna array com cada palavra em uma célula


}

const stringFile = await fetchFileData()

function incidenciasPalavra(palavra) {
    let quantidadeElementos = stringFile.filter(x => x === palavra).length;
    return quantidadeElementos
}


function stopWords() {
    let incidencias = [...new Set(stringFile)]

    incidencias.map((palavra, index) => {
        if (palavra != '') { // pegar apenas palavras que não estão vazias
            incidencias[index] = [palavra, incidenciasPalavra(palavra)]
        }
    })

    // SORT PELA SEGUNDA COLUNA - AS DE VALORES NÚMERICOS
    incidencias = incidencias.sort(function (a, b) {
        return b[1] - a[1];
    })

    return incidencias
}
const incidencias = stopWords()

export default incidencias  