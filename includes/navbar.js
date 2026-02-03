const url = window.location.pathname.split('/')
const page = url[url.length -1]
let navbar = `
<nav class="navbar navbar-expand-lg sticky-top nav-underline">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
            <img src="images/logo.png" width="30" height="30" class="d-inline-block align-text-top"/>
            Ratayzyk
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

                <li class="nav-item">
                    <a class="nav-link`
                    if(page == "index.html"){navbar+=" active"}
                    navbar +=
                    `" href="index.html">Hauts</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link`
                    if(page == "pantalons.html"){navbar+=" active"}
                    navbar +=
                    `" href="pantalons.html">Pantalons</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link`
                    if(page == "vestes.html"){navbar+=" active"}
                    navbar +=
                    `" href="vestes.html">Vestes</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link`
                    if(page == "manteaux.html"){navbar+=" active"}
                    navbar +=
                    `" href="manteaux.html">Manteaux</a>
                </li>

            </ul>
        </div>
    </div>
</nav>
`
document.write(navbar)