function openNav() {
    document.getElementById("navMenu").style.height = "1500px";
    document.getElementById("navMenu").style.width = "200px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.marginRight = "150px";
    document.getElementById("openBtn").classList.add("hidden");
  }

  function closeNav() {
    document.getElementById("navMenu").style.height = "0px";
    document.getElementById("navMenu").style.width = "0px";
    document.getElementById("main").style.marginLeft = "100px";
    document.getElementById("main").style.marginRight = "300px";
    setTimeout (function() {
    document.getElementById("openBtn").classList.remove("hidden");
    }, 500);
  }