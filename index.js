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
var show=document.getElementById('pro');
console.log(show);
show.addEventListener('click', ()=> {
    location.href= "http://127.0.0.1:5501/singleproduct.html"
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



