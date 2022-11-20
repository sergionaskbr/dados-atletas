class Atleta {
constructor (nome, idade, peso, altura, notas){
this.nome = nome;
this.idade = idade;
this.peso = peso;
this.altura = altura;
this.notas = notas;
}
calculaCategoria(){
    if(this.idade > 8 && this.idade < 12){
    return "Infantil"}
    if(this.idade > 11 && this.idade < 14){
    return "Juvenil"}
    if(this.idade > 13 && this.idade < 16){
    return "Intermediário"}
    if(this.idade > 15 && this.idade < 31){
    return "Adulto"}
    else {
    return "Sem categoria";
    }
    }   
calculaIMC(){
return this.peso / (this.altura * this.altura)
}  
calculaMediaValida(){
        let notasGerais = this.notas; 
        let notasOrganizadas = notasGerais.sort(function(a, b){
            if (a == b) {
                return 0}
            if (a < b){
                return -1}
            if (a > b){
                return 1} });   
        let notasComputadas = notasOrganizadas.slice(1, 4)
        let somaNotasComputadas = notasComputadas.reduce(function(total, atual){
                  return total + atual
              }, 0)
            return (somaNotasComputadas / notasComputadas.length).toFixed(2);
}
obtemNomeAtleta(){
    return this.nome
  }
  obtemIdadeAtleta(){
    return this.idade;
} 
obtemPesoAtleta(){
    return  this.peso;
} 
obtemNotasAtleta(){
    return  this.notas;
} 
obtemCategoria(){
    return atleta.calculaCategoria()
}
obtemIMC(){
    return atleta.calculaIMC()   
}
obtemMediaValida(){
    return atleta.calculaMediaValida()
}     
}
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);


 console.log(atleta.calculaCategoria());
 console.log(atleta.calculaIMC());
console.log(atleta.calculaMediaValida());
 console.log(atleta.obtemNomeAtleta());
 console.log(atleta.obtemIdadeAtleta());
 console.log(atleta.obtemPesoAtleta());
 console.log(atleta.obtemNotasAtleta());
 console.log(atleta.obtemCategoria());
 console.log(atleta.obtemIMC());
 console.log(atleta.obtemMediaValida());


