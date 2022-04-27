function eatCookie() {
    document.cookie = "ateCookie=true";
}

    let x = document.cookie;
    if (x == "ateCookie=true") {
        document.getElementById("title").classList.add("hidden");
        document.getElementById("title2").classList.remove("hidden");
    }
