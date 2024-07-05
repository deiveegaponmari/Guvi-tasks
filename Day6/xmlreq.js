var url = "https://restcountries.com/v3.1/all";
//create new xmlhttprequest
var xhr = new XMLHttpRequest();
//configure url
xhr.open("GET", url, true);
//response type to json
xhr.responseType = "json";
//send request
xhr.send();
console.log(xhr);
//Event handler response data
xhr.onload = function () {
    if (xhr.status != 200) {
        alert(`Error ${xhr.status}:${xhr.statusText}`);
    } else {
        const countries = xhr.response;
        /* console.log(typeof(countries)); */
        //a) get all asia countries
       /*   const asiancountry=countries.filter(country =>
         country.region==='Asia'
        );   */
       // console.log("Asiancountries:",asiancountry);
        
        /* document.getElementById("demo").innerHTML=JSON.stringify(asiancountry); 
         */
        /* ------------------------------ */


        //b)less than 2,00,000 population
         /* const populationcountry=countries.filter(country =>
          country.population<200000);
          document.getElementById("demo").innerHTML=JSON.stringify(populationcountry); 
      ----------------------------- */

            //c) iterate the data by name,capital,flag
            /* countries.forEach((element) => {
            const namedata = (`Name: ${element.name.common},
            capital:${element.capital ? element.capital[0]:"N/A" }
            flag:${element.flags[0]}`);
            document.getElementById("demo").innerHTML =
             JSON.stringify(namedata);
        });
        ------------------------- */

        //d) calculate total population
        /* const totalpopulation=countries.reduce((sum,data)=>
        sum +data.population,0);
        document.getElementById("demo").innerHTML=
        JSON.stringify(totalpopulation);
        -------------------------------- */

        //e)check Us doolars as currency
        const usdcountries=countries.filter(country =>
            country.currencies && country.currencies.USD);
            document.getElementById("demo").innerHTML=
            JSON.stringify(usdcountries);
    }
}  
xhr.onerror=function(){
    console.error("Request failed");
}
