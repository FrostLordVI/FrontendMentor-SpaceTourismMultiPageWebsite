const role = document.querySelector('#role')
const surname = document.querySelector('#surname')
const description = document.querySelector('#description')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const personImg = document.querySelector('#personImg')

let crew;


let http = new XMLHttpRequest();
	http.open('get', 'data.json', true);
	http.send();
	http.onload = function(){
	   if(this.readyState == 4 && this.status == 200){
	      crew = JSON.parse(this.responseText); 
          console.log(crew)  
	   }
	}

function choose(){
   let id = this.id

   if(id==='option1'){

        role.innerHTML = crew.crew[0].role
        surname.innerHTML=crew.crew[0].name
        description.innerHTML=crew.crew[0].bio
        personImg.src=crew.crew[0].images.png
       
        personImg.alt='Douglas Hurley'

        option1.classList.add('chosen')
        option2.classList.remove('chosen')
        option3.classList.remove('chosen')
        option4.classList.remove('chosen')

   }else if(id==='option2'){

    role.innerHTML = crew.crew[1].role
    surname.innerHTML=crew.crew[1].name
    description.innerHTML=crew.crew[1].bio
    personImg.src=crew.crew[1].images.png
    
    personImg.alt='Mark Shuttleworth'

    option1.classList.remove('chosen')
    option2.classList.add('chosen')
    option3.classList.remove('chosen')
    option4.classList.remove('chosen')

   }else if(id==='option3'){

    role.innerHTML = crew.crew[2].role
    surname.innerHTML=crew.crew[2].name
    description.innerHTML=crew.crew[2].bio
    personImg.src=crew.crew[2].images.png
    
    personImg.alt='Victor Glover'

    option1.classList.remove('chosen')
    option2.classList.remove('chosen')
    option3.classList.add('chosen')
    option4.classList.remove('chosen')

   }else if(id==='option4'){

    role.innerHTML = crew.crew[3].role
    surname.innerHTML=crew.crew[3].name
    description.innerHTML=crew.crew[3].bio
    personImg.src=crew.crew[3].images.png
  
    personImg.alt='Anousheh Ansari'

    option1.classList.remove('chosen')
    option2.classList.remove('chosen')
    option3.classList.remove('chosen')
    option4.classList.add('chosen')

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
    console.log('sdds')
} 

burger.addEventListener('click',burg)

option1.addEventListener('click',choose)
option2.addEventListener('click',choose)
option3.addEventListener('click',choose)
option4.addEventListener('click',choose)
