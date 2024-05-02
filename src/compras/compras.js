const assert = require('assert');

const calcularTotal = (ferramentas, comprar) => {
    if (ferramentas.length === 0 || comprar.length === 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }  
    
    let total = 0;
    if (ferramentas,comprar) {
        let ferramentasEncontradas = [];
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

    const resultado = `O valor a pagar pelas ferramentas (UFT, TOSCA) é R$ ${total.toFixed(2)}`;
    return resultado; 
}       

}
module.exports = {
    calcularTotal
}