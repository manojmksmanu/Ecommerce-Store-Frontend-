var load = document.getElementById('loading');
function  myfunction(){
    setTimeout(() => {
        load.style.display='none';
    }, 1000);
    
    
}

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


    bar.addEventListener('click',() =>
    {
        nav.classList.add('active');
    }
    )

close.addEventListener('click',() =>{
    nav.classList.remove('active');
})


// var show=document.getElementById('jai');
// console.log(show);
// show.onclick = function(){
//     location.href= "http://127.0.0.1:5501/singleproduct.html"
// };
// var show=document.getElementById('pro');
// console.log(show);
// show.addEventListener('click', ()=> {
//     location.href= "http://127.0.0.1:5501/singleproduct.html"
// })

///////////login page//////////

var btn = document.getElementById('btn');
var login_btn = document.getElementById('login-btn');
var signup_btn = document.getElementById('signup-btn');
var login_page= document.getElementById('login');
var signup_page= document.getElementById('signup');
var full_form = document.getElementById('final');
var forgetbtn= document.getElementById('forget-pw');
var forgetpage= document.getElementById('forget-page');
var forget_cancel= document.getElementById('forget-cancel');


forgetbtn.addEventListener('click',(e)=>{
    e.preventDefault();

    forgetpage.style.display = 'block'
    full_form.style.display = 'none';
    
})
forget_cancel.addEventListener('click',()=>{
    forgetpage.style.display = 'none'
    full_form.style.display = 'block';
   
})

signup_btn.addEventListener('click',()=>{
    login_page.style.left= "-400px";
    signup_page.style.left= "50px";
    btn.style.left="150px";
console.log('hello')
})
login_btn.addEventListener('click',()=>{
    login_page.style.left= "50px";
    signup_page.style.left= "400px";
    btn.style.left="0px";
console.log('hello')
})


///////////Shop page javascript//////////////////
var mainimage = document.getElementById('main-image');
var smallimage = document.getElementsByClassName('small-image');

smallimage[0].onclick = function(){
    mainimage.src = smallimage[0].src;

}
smallimage[1].onclick = function(){
    mainimage.src = smallimage[1].src;
}
smallimage[2].onclick = function(){
    mainimage.src = smallimage[2].src;

}
smallimage[3].onclick = function(){
    mainimage.src = smallimage[3].src;
}



