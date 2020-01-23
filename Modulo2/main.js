let students=["Nahuel","Teo","Nico","Gian","Alan","Mati","Diego","Agus","Nahuelx2","Meji","Lean","Lucas","Eze","Gabi","Eri","Roman","Ariel","Jose","Eduardo","Ivan","Lu","Lucio","Nicolas","Elias","Branko","Rodri"]
for (var i = 0; i < students.length; i++) {
	console.log(students.sort()[i])
}
let age=[17,19,20,23,17,20,19,20,20,18,24,20,22,20,19,20,20,17,20,23,25,24,19,23,26,32]
for (var i = age.length - 1; i >= 0; i--) {
	if (age[i] %2 ==0) { console.log(age[i])}

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
help(age)