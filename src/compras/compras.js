const calcularTotal = (ferramentas, comprar) => {
    if (ferramentas.length === 0 || comprar.length === 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }  
    
    let total = 0;
    let ferramentasEncontradas = [];
    if (ferramentas,comprar) {
        for (let i = 0; i < comprar.length; i++) {
            for (let j = 0; j < ferramentas.length; j++) {
                if (ferramentas[j].nome === comprar[i]) {
                    ferramentasEncontradas.push(ferramentas[j]);
                    total += ferramentas[j].preco;                    
                }        
          }     
    }
    if (ferramentasEncontradas.length === 0 ) {
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    } 

    let nomesFerramentas = '';
    for (let i = 0; i < ferramentasEncontradas.length; i++) {
        nomesFerramentas += ferramentasEncontradas[i].nome;
        if (i < ferramentasEncontradas.length - 1) {
            nomesFerramentas += ', ';
        }
    }

    const resultado = `O valor a pagar pelas ferramentas (${nomesFerramentas}) é R$ ${total.toFixed(2)}`;
    return resultado; 
}       

}
module.exports = {
    calcularTotal
}