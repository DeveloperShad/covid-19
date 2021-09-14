
var current_country = JSON.parse(localStorage.getItem('current_country'))
console.log(current_country)
let objKey = Object.keys(current_country)
console.log(objKey)

let country_container = document.getElementById('country-container')

let {
    id, rank, Country, Continent, TwoLetterSymbol, ThreeLetterSymbol, Infection_Risk, Case_Fatality_Rate, Test_Percentage, Recovery_Proporation, TotalCases, NewCases, TotalDeaths, NewDeaths, TotalRecovered, NewRecovered, ActiveCases, TotalTests, Population, one_Caseevery_X_ppl, one_Deathevery_X_ppl, one_Testevery_X_ppl, Deaths_1M_pop, Serious_Critical, Tests_1M_Pop, TotCases_1M_Pop, flag
} = current_country;

let table = document.createElement('table')
let caption = document.createElement('caption')
caption.innerHTML = `<h2>Detail Overview Of COVID-19 Of ${Country}</h2>`
table.append(caption)

let tbody = document.createElement('tbody')

let tr1 = document.createElement('tr')
let td1 = document.createElement('td')
let td2 = document.createElement('td')
td1.textContent = 'Id'
td2.textContent = id
tr1.append(td1,td2)

let tr2 = document.createElement('tr')
let td3 = document.createElement('td')
let td4 = document.createElement('td')
td3.textContent = 'Rank'
td4.textContent = rank
tr2.append(td3,td4)

let tr3 = document.createElement('tr')
let td5 = document.createElement('td')
let td6 = document.createElement('td')
td5.textContent = 'Country'
td6.textContent = Country
tr3.append(td5,td6)

let tr4 = document.createElement('tr')
let td7 = document.createElement('td')
let td8 = document.createElement('td')
td7.textContent = 'Continent'
td8.textContent = Continent
tr4.append(td7,td8)

let tr5 = document.createElement('tr')
let td9 = document.createElement('td')
let td10 = document.createElement('td')
td9.textContent = 'Two Letter Symbol'
td10.textContent = TwoLetterSymbol
tr5.append(td9,td10)

let tr6 = document.createElement('tr')
let td11 = document.createElement('td')
let td12 = document.createElement('td')
td11.textContent = 'Three Letter Symbol'
td12.textContent = ThreeLetterSymbol
tr6.append(td11,td12)

let tr7 = document.createElement('tr')
let td13 = document.createElement('td')
let td14 = document.createElement('td')
td13.textContent = 'Infection Risk'
td14.textContent = Infection_Risk
tr7.append(td13,td14)

let tr8 = document.createElement('tr')
let td15 = document.createElement('td')
let td16 = document.createElement('td')
td15.textContent = 'Case Fatality Rate'
td16.textContent = Case_Fatality_Rate
tr8.append(td15,td16)

let tr9 = document.createElement('tr')
let td17 = document.createElement('td')
let td18 = document.createElement('td')
td17.textContent = 'Test Percentage'
td18.textContent = Test_Percentage
tr9.append(td17,td18)

let tr10 = document.createElement('tr')
let td19 = document.createElement('td')
let td20 = document.createElement('td')
td19.textContent = 'Recovery Proportion'
td20.textContent = Recovery_Proporation
tr10.append(td19,td20)

let tr11 = document.createElement('tr')
let td21 = document.createElement('td')
let td22 = document.createElement('td')
td21.textContent = 'Total Cases'
td22.textContent = TotalCases
tr11.append(td21,td22)

let tr12 = document.createElement('tr')
let td23 = document.createElement('td')
let td24 = document.createElement('td')
td23.textContent = 'New Cases'
td24.textContent = NewCases
tr12.append(td23,td24)

let tr13 = document.createElement('tr')
let td25 = document.createElement('td')
let td26 = document.createElement('td')
td25.textContent = 'Total Deaths'
td26.textContent = TotalDeaths
tr13.append(td25,td26)

let tr14 = document.createElement('tr')
let td27 = document.createElement('td')
let td28 = document.createElement('td')
td27.textContent = 'New Deaths'
td28.textContent = NewDeaths
tr14.append(td27,td28)

let tr15 = document.createElement('tr')
let td29 = document.createElement('td')
let td30 = document.createElement('td')
td29.textContent = 'Total Recoverd'
td30.textContent = TotalRecovered
tr15.append(td29,td30)

let tr16 = document.createElement('tr')
let td31 = document.createElement('td')
let td32 = document.createElement('td')
td31.textContent = 'New Recovered'
td32.textContent = NewRecovered
tr16.append(td31,td32)

let tr17 = document.createElement('tr')
let td33 = document.createElement('td')
let td34 = document.createElement('td')
td33.textContent = 'Active Cases'
td34.textContent = ActiveCases
tr17.append(td33,td34)

let tr18 = document.createElement('tr')
let td35 = document.createElement('td')
let td36 = document.createElement('td')
td35.textContent = 'Total Tests'
td36.textContent = TotalTests
tr18.append(td35,td36)

let tr19 = document.createElement('tr')
let td37 = document.createElement('td')
let td38 = document.createElement('td')
td37.textContent = 'Population'
td38.textContent = Population
tr19.append(td37,td38)


let tr20 = document.createElement('tr')
let td39 = document.createElement('td')
let td40 = document.createElement('td')
td39.textContent = 'One Case On Every'
td40.textContent = `${one_Caseevery_X_ppl} People`
tr20.append(td39,td40)

// let tr21 = document.createElement('tr')
// let td41 = document.createElement('td')
// let td42 = document.createElement('td')
// tr21.append(td41,td42)

let tr22 = document.createElement('tr')
let td43 = document.createElement('td')
let td44 = document.createElement('td')
td43.textContent = 'One Death On Every'
td44.textContent = `${one_Deathevery_X_ppl} People`
tr22.append(td43,td44)

let tr23 = document.createElement('tr')
let td45 = document.createElement('td')
let td46 = document.createElement('td')
td45.textContent = 'One Test On Every'
td46.textContent = `${one_Testevery_X_ppl} People`
tr23.append(td45,td46)

let tr24 = document.createElement('tr')
let td47 = document.createElement('td')
let td48 = document.createElement('td')
td47.textContent = 'Deaths On Per Million Population'
td48.textContent = `${Deaths_1M_pop} People`
tr24.append(td47,td48)

let tr25 = document.createElement('tr')
let td49 = document.createElement('td')
let td50 = document.createElement('td')
td49.textContent = 'Serious/Critical'
td50.textContent = Serious_Critical
tr25.append(td49,td50)

let tr26 = document.createElement('tr')
let td51 = document.createElement('td')
let td52 = document.createElement('td')
td51.textContent = 'Test On Per Million Population'
td52.textContent = Tests_1M_Pop
tr26.append(td51,td52)

let tr27 = document.createElement('tr')
let td53 = document.createElement('td')
let td54 = document.createElement('td')
td53.textContent = 'Total Cases On Per Million Population'
td54.textContent = TotCases_1M_Pop
tr27.append(td53,td54)

let tr28 = document.createElement('tr')
let td55 = document.createElement('td')
let td56 = document.createElement('td')
td55.textContent = 'National Flag'
td56.innerHTML = `<img src = ${flag} width = "100" alt=${Country}>`
tr28.append(td55,td56)

tbody.append(tr28,tr3,tr2,tr4,tr5,tr6,tr7,tr8,tr9,tr10,tr11,tr12,tr13,tr14,tr15,tr16,tr17,tr18,tr19,tr20,tr22,tr23,tr24,tr25,tr26,tr27,tr1)


table.append(tbody)
country_container.append(table)



function shad(x){
    console.log(x)
}

document.getElementsByTagName('a').href = '#'