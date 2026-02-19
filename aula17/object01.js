let amigo = {nome: 'Christyan',
sexo: 'Masculino',
peso: 63.5,
engordar(p=0){
    this.peso += p
    console.log('Engordou!')
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)