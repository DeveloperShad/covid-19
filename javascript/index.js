



// Flag Api Url : https://restcountries.eu/rest/v2/all
// 'https://via.placeholder.com/200x200'

let container = document.getElementById('container')

// var pagination_container = document.getElementById('pagination-container')
let country_data;
var arr = []
// console.log(arr)
var Arr
var perpage_data;



fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => {
        return response.json();
    })
    .then(response => {
        country_data = response
        // console.log("flag", country_data)
    })
    .catch(err => {
        console.error(err);
    });

fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/`
    , {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "5e36723a50mshde1651dd862c138p182e43jsn083540440c94",
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
        }
    }
)
    .then(response => {
        return response.json();
    })
    .then(response => {
        let data = response

        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < country_data.length; j++) {
                if (data[i].TwoLetterSymbol == country_data[j].alpha2Code.toLowerCase()) {
                    data[i]['flag'] = country_data[j].flag
                    arr.push(data[i])
                    break
                }
            }
        }
        // console.log(arr)
        ShowData(arr, container)

    })
    .catch(err => {
        console.error(err);
    });










function ShowData(arr, container) {

    container.innerHTML = ''
    let sort_div = document.createElement('div')
    sort_div.id = 'sort-id'
    sort_div.innerHTML = `
    <div><p>Sort By</p></div>
    <div>
      <select id="sort-fn" onchange="sortFunction()">
        <option>Default</option>
        <option value="name1">Name -- A To Z</option>
        <option value="name2">Name -- Z To A</option>
        <option value="case1">Cases -- L To H</option>
        <option value="case2">Cases -- H To L</option>
      </select>
    </div>`
    container.append(sort_div)
    let display_div = document.createElement('div')
    display_div.id = 'display'

    for (let i = 0; i < arr.length; i++) {

        let {
            id, rank, Country, Continent, TwoLetterSymbol, ThreeLetterSymbol, Infection_Risk, Case_Fatality_Rate, Test_Percentage, Recovery_Proporation, TotalCases, NewCases, TotalDeaths, NewDeaths, TotalRecovered, NewRecovered, ActiveCases, TotalTests, Population, one_Caseevery_X_ppl, one_Deathevery_X_ppl, one_Testevery_X_ppl, Deaths_1M_pop, Serious_Critical, Tests_1M_Pop, TotCases_1M_Pop, flag
        } = arr[i]



        let item_container = document.createElement('div')
        item_container.className = 'item'


        let img_item = document.createElement('div')
        img_item.className = 'sub-item-img'

        let other_item = document.createElement('div')
        other_item.className = 'sub-item-other'

        let img = document.createElement('div')
        img.addEventListener('click',abc)
        function abc(){
            showDetail(arr[i])
        }
        let country = document.createElement('div')
        let total = document.createElement('div')
        let recovered = document.createElement('div')
        let death = document.createElement('div')
        let active = document.createElement('div')
        let more_btn = document.createElement('button')
        more_btn.textContent = 'More'
        more_btn.className = 'more-btn'
        more_btn.addEventListener('click', function () {
            showDetail(arr[i])
        })


        img.innerHTML = `<a href="#"><img src=${flag} alt=""></a>`
        country.innerHTML = `<a href="#">Name -- ${Country}</a>`
        total.innerHTML = `<a href="#">Total Cases -- ${TotalCases}</a>`
        recovered.innerHTML = `<a href="#">Total Recovered -- ${TotalRecovered}</a>`
        death.innerHTML = `<a href="#">Total Deaths -- ${TotalDeaths}</a>`
        active.innerHTML = `<a href="#">Active Cases -- ${ActiveCases}</a>`


        img_item.append(img)
        other_item.append(country, total, recovered, death, active, more_btn)
        item_container.append(img_item, other_item)
        display_div.append(item_container)
        // container.append(sort_div,display_div)
        container.append(display_div)
    }

}







function sortFunction() {
    let sel_val = document.getElementById('sort-fn').value
    // console.log(sel_val)

    if (sel_val == 'name1') {
        arr = arr.sort((a, b) => a.Country > b.Country ? 1 : b.Country > a.Country ? -1 : 0)
        ShowData(arr, container)
    }
    else if (sel_val == 'name2') {
        arr = arr.sort((a, b) => a.Country < b.Country ? 1 : b.Country < a.Country ? -1 : 0)
        ShowData(arr, container)
    }
    else if (sel_val == 'case1') {
        arr = arr.sort((a, b) => a.TotalCases - b.TotalCases)
        ShowData(arr, container)
    }
    else if (sel_val == 'case2') {
        arr = arr.sort((a, b) => b.TotalCases - a.TotalCases)
        ShowData(arr, container)
    }

}






function showDetail(el) {
    console.log(el)
    localStorage.setItem('current_country', JSON.stringify(el))
    window.location.href = 'country.html'
}









