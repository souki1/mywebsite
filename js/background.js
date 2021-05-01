
let menu = document.getElementById('menu')
let nav = document.getElementById('navbar')

    function  men(){
        menu.onclick=()=>{

            nav.classList.add('activate-bar')
            nav.style.display="grid"
            
        }

    }


let  moon =  document.getElementById('moon')

let ul = document.getElementById('ul')
let clos= document.getElementById('close')

function closees(){
    clos.onclick=()=>{
        nav.classList.remove('activate-bar')
       nav.style.right = "0px"
    }
}


let navbar = document.getElementById('container1')
let count =1
moon.onclick=()=>{
        count++
        if(count%2!==0){
            moon.src=('./images/moon.png')
            navbar.style.background = "black"
            ul.classList.add('ul')
        }
        else{

            moon.src=("./images/sun.png")
            navbar.style.background="white"
        }
    }
