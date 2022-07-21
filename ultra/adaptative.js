var objeto
var objAR

window.addEventListener('load', () => {
    objeto = document.querySelector("canvas")
    objAR = objeto.width/objeto.height
    setSize()
})

window.addEventListener('resize', setSize)

function setSize() {
    scrAR = window.innerWidth/window.innerHeight

    if(objAR < scrAR) {
        objeto.style.width = "auto"
        objeto.style.height = "100%"
    }
    else {
        objeto.style.width = "100%"
        objeto.style.height = "auto"
    }
}