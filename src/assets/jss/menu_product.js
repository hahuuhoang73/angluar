//Back to Top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//ChuyenTrang
window.addEventListener("click", function (){
  var btnContainer = document.getElementById("chuyen-trang");
  var btns = btnContainer.getElementsByClassName("btn-trang");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("ac-nut");
      current[0].className = current[0].className.replace(" ac-nut", "");
      this.className += " ac-nut";
    });
  }
})

//Active Button
// window.addEventListener("click", function (){
//   var btnContainer = document.getElementById("an-hien");
//   var btns = btnContainer.getElementsByClassName("nut-danhmuc");
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   }
// })

function thanhcong(){
  alert('Reset Successful')
}


