document.write(`
<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top nav-underline">
    <div class="container-fluid">
        <a class="navbar-brand" href="">
            <img src="images/logo.png" width="30" height="30" class="d-inline-block align-text-top"/>
            Ratayzyk
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Ensembles</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="hauts.html">Hauts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Pantalons</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`)
const url = window.location.pathname.split('/')
console.log(url.findLast())