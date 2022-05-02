/*
Author: Aaron Zhang
Date: May 1 2022
Description: Handles the use of a cookie to change text on the website.
*/

function eatCookie() { // Sets a cookie
    document.cookie = "ateCookie=true; path=/";
}

function vomitCookie() { // Deletes the cookie by marking it as five decades past expiry date
    document.cookie = "ateCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

    let x = document.cookie;
    if (x === "ateCookie=true") { // If the cookie is set, show the alt title and "funtext"
        document.getElementById("title2").classList.remove("hidden");
        document.getElementById("funtext").classList.remove("hidden");
    }
