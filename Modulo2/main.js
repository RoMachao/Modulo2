let myName= "Ro"
console.log(myName)
let Age=18
console.log(Age)
let IgnasiAge=32
let ageDiff= Age-IgnasiAge
console.log(ageDiff)
if (Age>21) {
	console.log("Es mayor a 21")
}
else{
	console.log("Es menor que 21")
}
if (Age>IgnasiAge) {
	console.log("Es mayor que Ignasi")
}
else if (Age<IgnasiAge) {
	console.log("Es menor que Ignasi")
}
else{
	console.log("Es igual que Ignasi")
}
let students=["Nahuel","Teo","Nico","Gian","Alan","Mati","Diego","Agus","Nahuelx2","Meji","Lean","Lucas","Eze","Gabi","Eri","Roman","Ariel","Jose","Eduardo","Ivan","Lu","Lucio","Nicolas","Elias","Branko","Rodri"]
for (var i = 0; i < students.length; i++) {
	console.log(students.sort()[i])
}
let ages=[17,19,20,23,17,20,19,20,20,18,24,20,22,20,19,20,20,17,20,23,25,24,19,23,26,32]
for (var i = ages.length - 1; i >= 0; i--) {
	if (ages[i] %2 ==0) { console.log(ages[i])}

}
function help(array) {
	let min = array[0]
	for (var i =0 ; i<array.length; i++) {
		if (array[i]<min){
			min=array[i]
		}
	} console.log(min)
	// body...
}
help(ages)
function help2(array) {
	let max = array[0]
	for (var i =0 ; i<array.length; i++) {
		if (array[i]>max){
			max=array[i]
		}
	} console.log(max)
	// body...
}
help2(ages)
function index(array,num){
	console.log(array[num])
}
index(ages,5)
function repetidos(array){
	let repi=[]
	for (var i = 0; i <array.length; i++) {
	   for (var r = i+1; r<array.length;r++) {
	   	  if (array[i]==array[r] && repi.indexOf(array[i])==-1) {
	   	  	repi.push(array[i])
	   	  }
	   }
	}
	console.log(repi)
}
repetidos(ages)
function juntos(array){
	let juntar=[]
	juntar=array.join()
	console.log(juntar)
}


let numerillos="1234567"
function reverso(string){
  let split=string.split("")
  let reverse=split.reverse()
  let join=reverse.join("")
  console.log(join)
}
reverso(numerillos)

let alfabetico="webmaster"
function ordenar(string){
	let split=string.split("")
	let sort=split.sort()
	let join=sort.join("")
	console.log(join)
}
ordenar(alfabetico)

let mayusculas="principe de persia"
function mayus(string){
   let split= string.split(" ")
   let aux = [] 
   for (let i =0 ; i<split.length; i++) {
     aux.push(split[i].charAt(0).toUpperCase()+split[i].slice(1))
   }
let join=aux.join(" ")
console.log(join)
}
mayus(mayusculas)

let palabra="Es de risa que muestres tal lealtad como caballero de géminis a Athena considerando tus pecados. Tu alma contiene maldad que nunca podrá desaparecer del todo, se eso mejor que nadie más."
function larga(string){
  let big=""
  let vec= string.split(" ")
  vec.forEach(
  	function(palabrita){
  		if(palabrita.length>big.length){
  			big=palabrita
  		}
  	})
 console.log(big)
}
 larga(palabra)