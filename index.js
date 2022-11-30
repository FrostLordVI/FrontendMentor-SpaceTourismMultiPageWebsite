
const firstA = document.querySelector("#moon2")
const secondA = document.querySelector("#mars")
const thirdA = document.querySelector("#europa")
const fourthA = document.querySelector("#titan")

const name = document.querySelector("#name")
const region = document.querySelector("#region")

const description = document.querySelector("#description")
const distanceNum = document.querySelector("#distanceNum")



let destName;


let http = new XMLHttpRequest();
	http.open('get', 'https://frostlordvi.github.io/jsonapi11/data.json', true);
	http.send();
	http.onload = function(){
	   if(this.readyState == 4 && this.status == 200){
	      destName = JSON.parse(this.responseText); 
          console.log(destName)  
	   }
	}

function choose(){
let id = this.id



if(id==='moon2'){
    firstA.classList.add('chosen')
    secondA.classList.remove('chosen')
    thirdA.classList.remove('chosen')
    fourthA.classList.remove('chosen')

    name.innerHTML = destName.destinations[0].name
    region.src = destName.destinations[0].images.png
    region.alt='moon'
    description.innerHTML=destName.destinations[0].description
    distanceNum.innerHTML=destName.destinations[0].distance
    timeNum.innerHTML=destName.destinations[0].travel


}else if(id==='mars'){
    secondA.classList.add('chosen')
    firstA.classList.remove('chosen')
    thirdA.classList.remove('chosen')
    fourthA.classList.remove('chosen')

    name.innerHTML = destName.destinations[1].name
    region.src = destName.destinations[1].images.png
    region.alt='mars'
    description.innerHTML=destName.destinations[1].description
    distanceNum.innerHTML=destName.destinations[1].distance
    timeNum.innerHTML=destName.destinations[1].travel

}else if(id==='europa'){
    thirdA.classList.add('chosen')
    secondA.classList.remove('chosen')
    firstA.classList.remove('chosen')
    fourthA.classList.remove('chosen')

    name.innerHTML = destName.destinations[2].name
    region.src = destName.destinations[2].images.png
    region.alt='europa'
    description.innerHTML=destName.destinations[2].description
    distanceNum.innerHTML=destName.destinations[2].distance
    timeNum.innerHTML=destName.destinations[2].travel
}else{
    fourthA.classList.add('chosen')
    secondA.classList.remove('chosen')
    thirdA.classList.remove('chosen')
    firstA.classList.remove('chosen')

    name.innerHTML = destName.destinations[3].name
    region.src = destName.destinations[3].images.png
    region.alt='titan'
    description.innerHTML=destName.destinations[3].description
    distanceNum.innerHTML=destName.destinations[3].distance
    timeNum.innerHTML=destName.destinations[3].travel
}
}

const burger = document.querySelector("#burger")
const menu = document.querySelector("#menu")
const burger1= document.querySelector("#burger1")
const burger2 = document.querySelector("#burger2")
const burger3 = document.querySelector("#burger3")

function burg(){
    menu.classList.toggle('yes')
    burger1.classList.toggle('yes')
    burger2.classList.toggle('yes')
    burger3.classList.toggle('yes')
} 

burger.addEventListener('click',burg)

firstA.addEventListener('click',choose)
secondA.addEventListener('click',choose)
thirdA.addEventListener('click',choose)
fourthA.addEventListener('click',choose)

