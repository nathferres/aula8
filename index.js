const morango = {
cor:'vermelho',
tamanho: 'pequeno',
quantidade: 15,
valor: 8.50
this.quantidadeDeLetras = () => {
    console.log(this.cor.length)
    console.log(this.tamanho.toLowerCase())
    console.log(this.cor.toUpperCase())
}

}


morango.quantidade = 20
morango['tamanho'] = 'medio'



console.log(morango.tamanho)
console.log(morango['quantidade'])