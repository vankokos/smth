function myFunction () {
    var elem = document.querySelector('#seen');

    if (elem.style.display == "grid") {
        elem.style.display = "none";
        elem.style.height = "0px"
        document.querySelector('#seenbutton').innerHTML = "SHOW MORE PROJECTS"
    } else {
        elem.style.display = "grid";
        elem.style.height = "400px"
        document.querySelector('#seenbutton').innerHTML = "SHOW LESS PROJECTS"
    }
}