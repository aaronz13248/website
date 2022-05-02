/*
Author: Aaron Zhang
Date: May 1 2022
Description: Handles opening and closing the sidebar navigaton menu.
*/

function openNav() { // Sets margins 125px to the right, expands the navbar into visibility, then hides open button
    document.getElementById("navMenu").style.height = "1500px";
    document.getElementById("navMenu").style.width = "200px";
    document.getElementById("main").style.marginLeft = "225px";
    document.getElementById("main").style.marginRight = "175px";
    document.getElementById("openBtn").classList.add("hidden");
  }

  function closeNav() { // Sets margins 125px to the left, shrinks the navbar into oblivion, then shows open button
    document.getElementById("navMenu").style.height = "0px";
    document.getElementById("navMenu").style.width = "0px";
    document.getElementById("main").style.marginLeft = "100px";
    document.getElementById("main").style.marginRight = "300px";
    document.getElementById("openBtn").classList.remove("hidden");
  }

  openNav();