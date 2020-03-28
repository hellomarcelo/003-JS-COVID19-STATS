fetch("https://covid-193.p.rapidapi.com/statistics?country=Chile", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "3ed154aadamsh388527f84584066p11dfaejsn29ee3fe93e6c"
	}
})
.then(response => {
    return response.json();
})

.then(data => {
   
    let element1 = document.getElementById('elem1');
    element1.innerHTML = ` 
    <h2>Contagiados</h2>
    <h6>${data.response[0].cases.total}</h6>
    `

    let element2 = document.getElementById('elem2');
    element2.innerHTML = `
        <h2>Activos</h2>
        <h6>${data.response[0].cases.active}</h6>
    `

    let element3 = document.getElementById('elem3');
    element3.innerHTML = `
        <h2>Recuperados</h2>
        <h6>${data.response[0].cases.recovered}</h6>
    `

    let element4 = document.getElementById('elem4');
    element4.innerHTML = `
        <h2>Muertes</h2>
        <h6>${data.response[0].deaths.total}</h6>
    `
})

.catch(err => {
	console.log(err);
});