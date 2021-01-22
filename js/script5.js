function toggleFunc () {
    var elementsbg = document.querySelectorAll(".white")
    var elementsbgThree = document.querySelectorAll(".blacker")
    var text = document.querySelectorAll(".blacktext")
    var elementsbgTwo = document.querySelectorAll(".grey")
    for(let i = 0; i < elementsbg.length; i++) {
        elementsbg[i].classList.toggle("black")
    }
    for(let i = 0; i < text.length; i++) {
        text[i].classList.toggle("whitetext")
    }
    for(let i = 0; i< elementsbgTwo.length; i++) {
        elementsbgTwo[i].classList.toggle("blacktwo")
    }
    for(let i = 0; i< elementsbgThree.length; i++) {
        elementsbgThree[i].classList.toggle("blackest")
    }

}