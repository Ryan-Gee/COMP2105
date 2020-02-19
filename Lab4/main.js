function dropPage (page) {

    page.classList.add("drop")
    setTimeout(function(){ resetPage(this) }, 2000);
}

function resetPage (page) {
    document.querySelector('.p2').classList.remove("drop")
}

function throwPlane (plane) {
    plane.classList.add("fly")
    setTimeout(function(){ resetPlane(this) }, 5000);
}

function resetPlane (plane) {
    document.querySelector('img').classList.remove("fly")
}

