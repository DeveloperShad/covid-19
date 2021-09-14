





let container = document.getElementById('container')
let pagination = document.getElementById('pagination')
function fetchNews(page) {
	

	fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/${page || 0}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "5e36723a50mshde1651dd862c138p182e43jsn083540440c94",
			"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
		}
	})
		.then(response => {
			return response.json();
		})
		.then(response => {
			let data = response.news
			console.log(data)
			showData(data,container,pagination)

		})
		.catch(err => {
			console.error(err);
		});
}

fetchNews()

function showData(arr,display,pagination) {
	display.innerHTML = ''
    pagination.innerHTML = ''
	
        for(let i = 1; i < arr.length; i++){ 

		let { urlToImage, title, content, link, pubDate, reference } = arr[i]

		let item_div = document.createElement('div')
		item_div.className = 'item'

		let img_div = document.createElement('div')
		img_div.className = 'image-item'

		img_div.innerHTML = `<img src = ${urlToImage} alt=${title} width="180" height="100" >`

		let other_item = document.createElement('div')
		other_item.className = 'other-item'

		let title_div = document.createElement('div')
		let content_div = document.createElement('div')
		// let pubDate_div = document.createElement('div')
		// let reference_div = document.createElement('div')
		let link_div = document.createElement('div')
	

		title_div.innerHTML = `<h3>${title}</h3>`
		content_div.innerHTML = `<p>${content}</p>`
		link_div.innerHTML = `<a href =${link} target="_blank">More</a>`
		other_item.append(title_div,content_div,link_div)
		item_div.append(img_div,other_item)
		display.append(item_div)

	}
    let next_btn = document.createElement('button')
    let prev_btn = document.createElement('button')
    next_btn.innerHTML = 'Next &#x2192;'
    prev_btn.innerHTML = '&#x2190; Prev'
    next_btn.addEventListener('click',function(){
        Next(1)
    })
    prev_btn.addEventListener('click',function(){
        Next(-1)
    })
    if(x == 0){
        prev_btn.style.opacity = '0.8'
    }
    pagination.append(prev_btn,next_btn)

}

var x = 0
function Next(c){

    x = x+c
    if (x < 0){
        x = 0
    }
    console.log(x)
    fetchNews(x)

}
