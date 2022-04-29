function openNav() {
    document.getElementById("navMenu").style.height = "3000px";
    document.getElementById("navMenu").style.width ="200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("main").style.marginRight = "200px";
    document.getElementById("openBtn").classList.add("hidden");
  }

  function closeNav() {
    document.getElementById("navMenu").style.height = "0%";
    document.getElementById("navMenu").style.width = "0%";
    document.getElementById("main").style.marginLeft = "100px";
    document.getElementById("main").style.marginRight = "300px";
    setTimeout (function() {
    document.getElementById("openBtn").classList.remove("hidden");
    }, 500);
  }