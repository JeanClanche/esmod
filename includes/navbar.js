const url = window.location.pathname.split('/')
const page = url[url.length -1]

async function addNav() {
    const resp = await fetch("includes/navbar.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);
}

document.addEventListener("DOMContentLoaded", async function() {//quand la page est chargée
    await addNav()
    let element
    switch(page){
        case "index.html" :
            element="hauts"
            break
        case "pantalons.html":
            element="pantalons"
            break
        case "vestes.html":
            element="vestes"
            break
        case "robes.html":
            element = "robes"
            break
        case "manteaux.html":
            element="manteaux"
            break
        default:
            element="hauts"

    }
    document.getElementById(element).classList.add("active")
})