var request = new XMLHttpRequest()
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()
request.onload = function () {
    var res = JSON.parse(request.response)
    // 1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
    // a.Get all the countries from Asia continent /region using Filter method
    var casia = res.filter((ele) => ele.region == "Asia");
    console.log(casia)
    // b.Get all the countries with a population of less than 2 lakhs using Filter method
    var cpop = res.filter((ele) => ele.population < 200000);
    console.log(cpop)
    // c.Print the following details name, capital, flag, using forEach method
    var cdet = res.forEach(ele => {
        console.log(ele.name, ele.capital, ele.flag)
    });
    // d.Print the total population of countries using reduce method
    var tpop = res.reduce((acc, ele) => acc + ele.population, 0)
    console.log(tpop)
    // e.Print the country that uses US dollars as currency.
