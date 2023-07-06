let meses = ['Janeiro','Fevereiro','Segunda-Feira','Terça-Feira','Quarta-feira','Quinta-Feira']
//let dias = meses.splice(2) //Remove todos os elementos do array 'meses' à partir do índice 2. E atribui os elementos removidos ao array 'dias'
//let dias = meses.splice(2,3) //À partir da posição 2, remove 1 elemento do array 'meses' e atribui ao array 'dias'
let dias = meses.splice(2,4,'Março','Abril','Maio','Junho')
console.log(meses)
console.log(dias)
meses.splice(6,0,'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro')
console.log(meses)
