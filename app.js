const parallax2 = document.getElementById('parallax2');

console.log(parallax2);
window.addEventListener('scroll', ()=>{
    let offset = window.pageYOffset;
console.log(offset);
    
    //ALONG X AXIS
    parallax2.style.backgroundPositionX = offset*0.48 + "px";
})