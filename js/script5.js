function toggleFunc () {
    var header = document.querySelector('#header');
    var toggle = document.querySelector('#toggle')
    var headerText = document.querySelectorAll('.header__inner-menu-item-link')
    var bgText = document.querySelector('.bg__inner-text-big')
    var about = document.querySelector('.about')
    var aboutInner = document.querySelectorAll('.about__inner')

    if (header.style.background == "white" || header.style.background =="") {
        header.style.background = "#373A39";
        toggle.style.background = "#373A39";
        for (let i = 0; i < headerText.length; i++) {
            headerText[i].style.color = "white";
        }
        bgText.style.color = "#373A39";
    } else {
        header.style.background = "white";
        toggle.style.background = "white"
        for (let i = 0; i < headerText.length; i++) {
            headerText[i].style.color ="#373A39";
        }
        bgText.style.color = "white";
    }
}