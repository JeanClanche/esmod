document.addEventListener("DOMContentLoaded", function() {//quand la page est chargée
    leModal = new bootstrap.Modal(this.getElementById('leModal'))

    //change le curseur sur les images
    const imgs = document.querySelectorAll('img')
    imgs.forEach(function(img){
        img.style.cursor = "zoom-in"
    })

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