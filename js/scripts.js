var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');


$('#search').click(searchCountries);


function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';

	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}



function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		$('<li>').text('Capital city: ' + item.capital).appendTo(countriesList);
		$('<li>').text('Language: ' + item.languages).appendTo(countriesList);
		$('<li>').text('Continent: ' + item.region).appendTo(countriesList);
		$('<li>').text('Population: ' + item.population).appendTo(countriesList);
		$('<li>').text('Currency: ' + item.currencies).appendTo(countriesList);
		
	});
}