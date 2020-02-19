function startAnim (ball) {
    ball.classList.add("anim")
    setTimeout(function(){ resetAnim(this) }, 3000);
}

function resetAnim (page) {
    document.querySelector('.container').classList.remove("anim")
}