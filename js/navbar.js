//récupération de l'url actuel
const url = window.location.pathname.split('/')
const page = url[url.length -1]

//inserre la navbar dans le document
async function addNav() {
    const resp = await fetch("includes/navbar.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);
}

document.addEventListener("DOMContentLoaded", async function() {//quand la page est chargée
    await addNav()
    let element
    switch(page){
        case "":
            element = "hauts"
            break
        case "index" :
            element = "hauts"
            break
        case "pantalons":
            element = "pantalons"
            break
        case "vestes":
            element = "vestes"
            break
        case "robes":
            element = "robes"
            break
        case "manteaux":
            element = "manteaux"
            break
        default:
            element = "hauts"

    }
    document.getElementById(element).classList.add("active")
})