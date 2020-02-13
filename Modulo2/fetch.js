
    let data
	let url ;
	if (document.querySelector("#senators")) {
  url=
  'https://api.propublica.org/congress/v1/113/senate/members.json'
} else{
	url='https://api.propublica.org/congress/v1/113/house/members.json'} 
	let init = {
		method: 'GET',
		headers: {'x-API-Key':"E5zeANCx1IiAqcNtnhrLTEWheMfsh9tprtIreeBB"}
	
	}

	fetch(url, init)
		.then(function(res){
			if(res.ok){
				return res.json()
			} else{
				throw new Error(res.status)
			}
		})
		.then(function(json){
			data = json
			status()
		})
		.catch(function(error){
			console.log(error)
		})

		