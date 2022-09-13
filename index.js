console.log("hello")

function removeTranslation() {
    setTimeout(
        setTranslation1
    , 500)
    setTimeout(
        setTranslation2
    , 1000)
    setTimeout(
        setTranslation3
    , 1500)
}

function setTranslation1() {
    document.documentElement.style.setProperty("--translation-1", "0%")
}

function setTranslation2() {
    document.documentElement.style.setProperty("--translation-2", "0%")
}

function setTranslation3() {
    document.documentElement.style.setProperty("--translation-3", "0%")
}