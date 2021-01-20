function myFunction () {
    var elem = document.querySelector('#seen');

    if (elem.style.display == "grid") {
        elem.style.display = "none";
        document.querySelector('#seenbutton').innerHTML = "SHOW MORE PROJECTS"
    } else {
        elem.style.display = "grid";
        document.querySelector('#seenbutton').innerHTML = "SHOW LESS PROJECTS"
    }
}