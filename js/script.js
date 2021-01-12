/*FIRST*/
function functionShowFirst() {
  document.getElementById("openFirst").style.display = "flex";
  document.getElementById("showMoreFirst").style.display = "none";
}

function functionHideFirst() {
    document.getElementById("openFirst").style.display = "none";
    document.getElementById("showMoreFirst").style.display = "block";
}

/*Second*/
function functionShowSecond() {
    document.getElementById("openSecond").style.display = "flex";
    document.getElementById("showMoreSecond").style.display = "none";
}
  
function functionHideSecond() {
    document.getElementById("openSecond").style.display = "none";
    document.getElementById("showMoreSecond").style.display = "block";
}

  /*Third*/
function functionShowThird() {
    document.getElementById("openThird").style.display = "flex";
    document.getElementById("showMoreThird").style.display = "none";
}
  
function functionHideThird() {
    document.getElementById("openThird").style.display = "none";
    document.getElementById("showMoreThird").style.display = "block";
}
  /*Fourth*/
function functionShowFourth() {
    document.getElementById("openFourth").style.display = "flex";
    document.getElementById("showMoreFourth").style.display = "none";
  }
  
function functionHideFourth() {
    document.getElementById("openFourth").style.display = "none";
    document.getElementById("showMoreFourth").style.display = "block";
}
  /*Fifth*/
function functionShowFifth() {
    document.getElementById("openFifth").style.display = "flex";
    document.getElementById("showMoreFifth").style.display = "none";
  }
  
  function functionHideFifth() {
      document.getElementById("openFifth").style.display = "none";
      document.getElementById("showMoreFifth").style.display = "block";
  }
  /*Sixth*/
function functionShowSixth() {
    document.getElementById("openSixth").style.display = "flex";
    document.getElementById("showMoreSixth").style.display = "none";
  }
  
  function functionHideSixth() {
      document.getElementById("openSixth").style.display = "none";
      document.getElementById("showMoreSixth").style.display = "block";
  }

  
  let menu = $(".info");



 menu.hover(
    function(){
        $(this).addClass("hover")
     }, function(){
         $(this).removeClass("hover");
    }
 )

 function myFunction() {
    var x = document.getElementById("monMenu");
    if (x.style.display === "block") {
     x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  $("#open").click(function() { 
    $("#close").css('display', 'block');
    $("#open").css('display', 'none');
});

$("#close").click(function() {
    $("#close").css('display', 'none');
    $("#open").css('display', 'block');
});

window.addEventListener("resize" , function() {
    var width = window.innerWidth
    var x = document.getElementById("monMenu");
    if (width > 768){
        x.style.display = "flex"
    } else {
        x.style.display = "none"
        $("#close").css('display', 'none');
        $("#open").css('display', 'block');
    }
}
) 