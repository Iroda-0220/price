


//by me
const elBtn = document.getElementById('darkMode');
const body = document.body;
const btnParent= document.querySelector('.btn-light');


let elText = document.querySelector('.text_1')
let elText_1 = document.querySelector('.text-2')
let elText_2 = document.querySelector('.text-3')

let isDarkMode ;

// elBtn.classList.toggle(active)

elBtn.addEventListener('click',function (){

     isDarkMode = !isDarkMode;

    
     if( isDarkMode){
     body.classList.add('dark-mode')
   
     elText.textContent = "$199.99"
     elText_1.textContent = "$249.99"
     elText_2.textContent = "$399.99"



    //  elBtn.classList.toggle('active')
    // btnParent.classList.toggle('btn_parent')
    
     }else{
     body.classList.remove('dark-mode');
  
    //  elBtn.classList.toggle(active)

  }

  elBtn.classList.toggle('active')
   btnParent.classList.toggle('btn_parent')
});