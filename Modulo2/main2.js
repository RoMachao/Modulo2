let checkbox= document.getElementsByTagName("input")
let members= datos.results[0].members
let select= document.querySelector("#select")
select.addEventListener("change", tablita)

function estados(members){
	let estados = []
	for (var i = 0; i < members.length; i++) {

		if(estados.indexOf(members[i].state) == -1){
			estados.push(members[i].state)
		}
		
	}

	estados.sort()
   for (var i = 0; i < estados.length; i++) {
   	select.innerHTML+=`<option value="${estados[i]}">${estados[i]}</option>`
   }

}

estados(members)
for (var i = checkbox.length - 1; i >= 0; i--) {
	checkbox[i].addEventListener("click", tablita)
}
tablita()
function tablita(){

var table
table=[]

const tbody= document.querySelector("tbody")
tbody.innerHTML=""

table= members.filter(function(member){
	for (var i = checkbox.length - 1; i >= 0; i--) {
		if (checkbox[i].checked==true && member.party==checkbox[i].value && (member.state==select.value ||select.value=="All")){
    return member
	}

 }
})


table.forEach(member => {
	let row=tbody.insertRow(-1);
	let fullName= `${member.first_name} ${member.middle_name || ""} ${member.last_name}`
	let anchor= member.url== "" ? fullName: `<a href="${member.url}">${fullName}</a>`
	row.innerHTML= `<td>${anchor}</td>
	<td> ${member.party}</td>
	<td> ${member.state}</td>
	<td> ${member.seniority}</td>
	<td> ${"%"+member.votes_with_party_pct}</td>`
})
}
