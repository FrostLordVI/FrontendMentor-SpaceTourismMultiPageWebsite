const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const role = document.querySelector('#role')
const surname = document.querySelector('#surname')
const description = document.querySelector('#description')
const personImg = document.querySelector('#personImg')
const main = document.querySelector('#main')

let technology;



let http = new XMLHttpRequest();
	http.open('get', 'https://frostlordvi.github.io/jsonapi11/data.json', true);
	http.send();
	http.onload = function(){

	      technology = JSON.parse(this.responseText); 
          console.log(technology)  
	   
                if(screen.width<901){
            
            personImg.src = technology.technology[0].images.landscape    
        }
	}
    


function choose(){
    let id = this.id

    if(id==='option1'){

        
        surname.innerHTML  = technology.technology[0].name
        description.innerHTML = technology.technology[0].description

        option1.classList.add('chosen')
        option2.classList.remove('chosen')
        option3.classList.remove('chosen')


        if(screen.width<901){
            personImg.src = technology.technology[0].images.landscape    
        }else{
        personImg.src = technology.technology[0].images.portrait
    }
    }else if(id==='option2'){

        surname.innerHTML  = technology.technology[1].name
        description.innerHTML = technology.technology[1].description

        
        option1.classList.remove('chosen')
        option2.classList.add('chosen')
        option3.classList.remove('chosen')
        
        if(screen.width<901){
            personImg.src = technology.technology[1].images.landscape    
        }else{
        personImg.src = technology.technology[1].images.portrait
        }
    }else if(id==='option3'){

       
        surname.innerHTML  = technology.technology[2].name
        description.innerHTML = technology.technology[2].description
         
        option1.classList.remove('chosen')
        option2.classList.remove('chosen')
        option3.classList.add('chosen')

        if(screen.width<901){
            personImg.src = technology.technology[2].images.landscape    
        }else{
        personImg.src = technology.technology[2].images.portrait
        }
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

option1.addEventListener('click',choose)
option2.addEventListener('click',choose)
option3.addEventListener('click',choose)