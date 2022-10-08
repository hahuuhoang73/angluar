window.addEventListener("scroll",function (){
  var header = document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY>0)


})
window.addEventListener("click",function () {
  document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  }
  document.getElementById('prev').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
  }


})

window.addEventListener("click",function () {
document.getElementById('next1').onclick = function(){
  const wtdthIteam = document.querySelector('.mot1').offsetWidth;
  document.getElementById('container3').scrollLeft += wtdthIteam;
}
document.getElementById('prev1').onclick = function(){
  const wtdthIteam = document.querySelector('.mot1').offsetWidth;
  document.getElementById('container3').scrollLeft -= wtdthIteam;
}
})

window.addEventListener("click",function () {
  document.getElementById('next2').onclick = function(){
    let lists = document.querySelectorAll('.item10');
    document.getElementById('slide10').appendChild(lists[0]);
  }
  document.getElementById('prev2').onclick = function(){
    let lists = document.querySelectorAll('.item10');
    document.getElementById('slide10').prepend(lists[lists.length - 1]);
  }
})


  function cong() {
    var value = parseInt(document.getElementById('1').value, 10);
    value = isNaN(value) ? 1 : value;
    value++;
    document.getElementById('1').value = value;
  }
  function tru() {
    var value = parseInt(document.getElementById('1').value, 10);
    value = isNaN(value) ? 1 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('1').value = value;
  }

function cong1() {
  var value = parseInt(document.getElementById('5').value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  document.getElementById('5').value = value;
}
function tru1() {
  var value = parseInt(document.getElementById('5').value, 10);
  value = isNaN(value) ? 1 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('5').value = value;
}







function openNav() {
  document.getElementById("cart-dropdown").style.left = "935px";
  document.getElementById("closeMask").style.display = "block";



}

function closeNav() {
  document.getElementById("cart-dropdown").style.left= "1590px";
  document.getElementById("closeMask").style.display = "none";
}

// function mo(){
//   document.getElementById("mathang").style.display = "block";
//
// }

