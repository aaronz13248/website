function eatCookie() {
    document.cookie = "ateCookie=true; path=/";
}

function vomitCookie() {
    document.cookie = "ateCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

    let x = document.cookie;
    if (x === "ateCookie=true") {
        document.getElementById("title").classList.add("hidden");
        document.getElementById("title2").classList.remove("hidden");
        document.getElementById("funText").classList.remove("hidden");
    }
