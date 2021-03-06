function status(){ 
let stats={
	number_democrat:0,
    number_independent:0,
    number_republican:0,
    total:0,
    votes_democrat:0,
    votes_independent:0,
    votes_republican:0,
    total_votes:0,
   missed_votes:0,
	 most_loyal:[],
	 least_loyal:[],
	 most_engaged:[],
	 least_engaged:[],

}


 var miembros= data.results[0].members
var sonidodisparo
var votes_rep_total = 0
var votes_ind_total = 0
var votes_dem_total = 0
for (var i = 0; i < miembros.length; i++) {
   if (miembros[i].party== "R") {
    stats.number_republican++
    votes_rep_total += miembros[i].votes_with_party_pct
   } else if (miembros[i].party=="D") {
    stats.number_democrat++
     votes_dem_total += miembros[i].votes_with_party_pct
   } else if (miembros[i].party=="I") {
    stats.number_independent++
     votes_ind_total += miembros[i].votes_with_party_pct
   }
}
stats.total=miembros.length

stats.votes_republican= +((votes_rep_total/stats.number_republican).toFixed(2))

stats.votes_independent= stats.number_independent !==0 ? +((votes_ind_total/stats.number_independent).toFixed(2)) : "-"

stats.votes_democrat= +((votes_dem_total/stats.number_democrat).toFixed(2)) 

stats.total_votes=stats.votes_republican+stats.votes_independent+stats.votes_democrat//

let tablilla=document.getElementById("first")
let tablita=document.getElementById("second")
let tablisha=document.getElementById("third")
let tabliña=document.getElementById("fourth")
let tabla=document.getElementById("fifth")
tablilla.innerHTML =`
<tr>
  <td>Democrats</td>
  <td>${stats.number_democrat}</td>
  <td>${stats.votes_democrat}%</td>
</tr>
<tr>
  <td>Republicans</td>
  <td>${stats.number_republican}</td>
  <td>${stats.votes_republican}%</td>
</tr>
<tr>
   <td>Independents</td>
   <td>${stats.number_independent}</td>
   <td>${stats.votes_independent}%</td>
</tr>
<tr>
   <td>Totals</td>
   <td>${stats.total}</td>
 </tr> 
`
let pct = Math.round(miembros.length*0.1)
if (tablita==null&&tablisha==null) {
  var votos= miembros.filter(e => e.total_votes !=0).slice()
  votos.sort(function(a,b) {
    return a.votes_with_party_pct-b.votes_with_party_pct
 }) 
  votos.most_loyal=votos.slice(0,pct)
  votos.least_loyal=votos.slice(-pct)
  
  votos.most_loyal.forEach(e =>{
    let row= tabliña.insertRow(-1)
  let fullName= `${e.first_name} ${e.middle_name || ""} ${e.last_name}`
      row.innerHTML =`<tr>
  <td>${fullName}</td>
  <td>${Math.round((e.votes_with_party_pct*(e.total_votes-e.missed_votes))/100)}</td>
  <td>${e.votes_with_party_pct}%</td>
</tr>
` })

   votos.least_loyal.forEach(e =>{
    let row= tabla.insertRow(0)
      let fullName= `${e.first_name} ${e.middle_name || ""} ${e.last_name}`
      row.innerHTML =`<tr>
  <td>${fullName}</td>
  <td>${Math.round((e.votes_with_party_pct*(e.total_votes-e.missed_votes))/100)}</td>
  <td>${e.votes_with_party_pct}%</td>
</tr>
` })
} 
else if (tabliña==null&&tabla==null) {
  var votos= miembros.filter(e => e.total_votes !=0).slice()
  votos.sort(function(a,b) {
    return a.missed_votes_pct-b.missed_votes_pct
 }) 
  let pct= Math.round(miembros.length*0.1)
  votos.most_engaged=votos.slice(0,pct)
  votos.least_engaged=votos.slice(-pct)
  
  votos.most_engaged.forEach(e =>{
    let row= tablisha.insertRow(-1)
    let fullName= `${e.first_name} ${e.middle_name || ""} ${e.last_name}`
      row.innerHTML =`<tr>
  <td>${fullName}</td>
  <td>${e.missed_votes}</td>
  <td>${e.missed_votes_pct}%</td>
</tr>
` })

   votos.least_engaged.forEach(e =>{
    let row= tablita.insertRow(0)
    let fullName= `${e.first_name} ${e.middle_name || ""} ${e.last_name}`
      row.innerHTML =`<tr>
  <td>${fullName}</td>
  <td>${e.missed_votes}</td>
  <td>${e.missed_votes_pct}%</td>
</tr>
` })
}
}