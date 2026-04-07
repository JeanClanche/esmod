//récupération de l'url actuel
const url = window.location.pathname.split('/')
const page = url[url.length -1]

document.addEventListener("DOMContentLoaded", async function() {//quand la page est chargée
    await addNav()
    await addModal()
    element = ""
    switch(page){
        case "index" || "" :
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
        case "jupes":
            element = "jupes"
            break
        default:
            element = "hauts"

    }
    document.getElementById(element).classList.add("active")
    leModal = new bootstrap.Modal(this.getElementById('leModal'))
    remplirPoulet()
});

//ajoute les images dans le caroussel du modal, puis affiche ce dernier
function modal(id){
    const leBody = document.getElementById('carouselModalBody')
    const indicators = document.getElementById('carouselModalIndicators')
    clearCarousel()

    //récupère les images à afficher dans le caroussel dans une liste
    const images = document.querySelectorAll('.'+id)
    //console.log(images)

    //ajoute ces images au caroussel
    var n = 0
    images.forEach(function(image){
        const div = document.createElement('div')
        div.classList.add('carousel-item')

        //création de l'image
        const img = document.createElement('img')
        img.classList = image.classList
        img.setAttribute('src', image.getAttribute('src'))
        div.append(img)

        //création de l'indicateur
        const indicator = document.createElement('button')
        indicator.setAttribute('type', 'button')
        indicator.setAttribute('data-bs-target', '#carouselModal')
        indicator.setAttribute('data-bs-slide-to', n)
        indicators.append(indicator)

        leBody.append(div)
        n++
    })

    leBody.firstChild.classList.add('active')
    indicators.firstChild.classList.add('active')

    leModal.show()
}

function clearCarousel(){
    /**
     * Vide les images du caroussel du modal
     */
    const c = document.getElementById('carouselModalBody')
    const d = document.getElementById('carouselModalIndicators')
    //console.log(c)
    while(c.lastChild){
        c.removeChild(c.lastChild)
    }
    while(d.lastChild){
        d.removeChild(d.lastChild)
    }
}

async function remplirPoulet(){
    /**
     * remplis la row contenant les différents vetements, avec pour chacun un caroussel et une card descriptive
     */

    const json = await fetch(`data/${element}.json`)
    const data = await JSON.parse(await json.text())

    let i = 0
    data.forEach((e) => {
        //pour chaque vêtement        

        const hr = document.createElement('hr')

        //création d'un caroussel
        const row = document.createElement('div')
        row.classList.add('row', 'rounded', 'mx-1', 'my-5', 'p-2', 'justify-content-center', 'd-flex')

        const colCaroussel = document.createElement('div')
        colCaroussel.classList.add('col-md-4', 'text-center', 'align-self-center')
        if(i%2 == 1){
            colCaroussel.classList.add('order-md-last')
        }

        const caroussel = document.createElement('div')
        caroussel.classList.add('carousel', 'slide', 'm-3')
        caroussel.setAttribute('id', `car${i}`)

        //conteneur pour les indicateurs en bas du caroussel
        const indicators = document.createElement('div')
        indicators.classList.add('carousel-indicators')

        //conteneur pour les div.carousel-item contenant les images
        const inner = document.createElement('div')
        inner.classList.add('carousel-inner')

        //bouton précédent
        const prec = document.createElement('button')
        prec.classList.add('carousel-control-prev')
        prec.setAttribute('type', 'button')
        prec.setAttribute('data-bs-target', `#car${i}`)
        prec.setAttribute('data-bs-slide', 'prev')
        const iconPrec = document.createElement('span')
        iconPrec.classList.add('carousel-control-prev-icon')
        const precTxt = document.createElement('span')
        precTxt.classList.add('visually-hidden')
        precTxt.textContent = "Précédent"
        prec.append(iconPrec, precTxt)

        //bouton suivant
        const suiv = document.createElement('button')
        suiv.classList.add('carousel-control-next')
        suiv.setAttribute('type', 'button')
        suiv.setAttribute('data-bs-target', `#car${i}`)
        suiv.setAttribute('data-bs-slide', 'next')
        const iconSuiv = document.createElement('span')
        iconSuiv.classList.add('carousel-control-next-icon')
        const suivTxt = document.createElement('span')
        suivTxt.classList.add('visually-hidden')
        suivTxt.textContent = "Suivant"
        suiv.append(iconSuiv, suivTxt)

        let j = 0
        e['images'].forEach((ee) => {
            // pour chaque image du vêtement
            const indicateur = document.createElement('button')
            indicateur.setAttribute('type', 'button')
            indicateur.setAttribute('data-bs-target', `#car${i}`)
            indicateur.setAttribute('data-bs-slide-to', `${j}`)
            const item = document.createElement('div')
            item.classList.add('carousel-item')
            const img = document.createElement('img')
            img.classList.add('d-block', 'w-100', `a${i}`, 'rounded-5')
            img.setAttribute('src', `${ee}`)
            img.setAttribute('onclick', `modal("a${i}")`)
            if(j == 0){
                indicateur.classList.add('active')
                item.classList.add('active')
            }
            item.append(img)
            inner.append(item)
            indicators.append(indicateur)
            j++
        })
        //fin de la création du caroussel

        //création d'une carte
        const colCard = document.createElement('div')
        colCard.classList.add('col')
        const card = document.createElement('div')
        card.classList.add('card', 'border-danger')
        const cardHeader = document.createElement('div')
        cardHeader.classList.add('card-header')
        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title', 'mb-0')
        cardTitle.textContent = e['name']
        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        const cardTxt = document.createElement('p')
        cardTxt.classList.add('card-text')
        cardTxt.textContent = e['desc']

        const cardList = document.createElement('ul')
        cardList.classList.add('list-group', 'list-group-flush')
        e['liste'].forEach((eee) => {
            const li = document.createElement('li')
            li.classList.add('list-group-item')
            li.textContent = eee
            cardList.append(li)
        })
        
        cardBody.append(cardTxt, cardList)
        cardHeader.append(cardTitle)
        card.append(cardHeader, cardBody)
        colCard.append(card)

        caroussel.append(indicators, inner, prec, suiv)
        colCaroussel.append(caroussel)
        row.append(colCaroussel, colCard)
        document.getElementById('poulet').append(hr, row)
        i++
    })
}


//inserre la navbar dans le document
async function addNav() {
    const resp = await fetch("includes/navbar.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);
}
//inserre le modal dans le document
async function addModal() {
    const resp = await fetch("includes/modal.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
}