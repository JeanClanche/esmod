document.addEventListener("DOMContentLoaded", function() {//quand la page est chargée
    leModal = new bootstrap.Modal(this.getElementById('leModal'))
});

function modal(id){
    leModal.show()
}