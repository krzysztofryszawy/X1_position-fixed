// window.scrollY - pozycja jak daleko przewinieta jest strona

// document.documentElement.offsetHeight - dlugosc calej strony

// document.body.offsetHeight - dlugosc body

// window.window.innerHeight - wysokosc okna przegladarki

//    if (topic2.getBoundingClientRect().top <= (em) ) {



//przypina stronę poprzez nadanie klasy .pin i usuwa klasę .*start    
function przypnij(nr) {
    let tst = document.querySelector(`.s${nr}`)
    tst.classList.add(`pin${nr}`)
    tst.classList.remove(`s${nr}start`)
}    
    
function odepnij(nr) {
    let tst = document.querySelector(`.s${nr}`)
    tst.classList.remove(`pin${nr}`)
    tst.classList.add(`s${nr}start`)
}


//słuchanie czy zmienia się pozycja scrolla
window.addEventListener("scroll", pozycja);



//określanie czy strona ma być przypięta czy nie
function pozycja() {
    if (window.scrollY > 0.9 * window.innerHeight ) {
            przypnij(2);
        } else odepnij(2);
    
    if (window.scrollY > 1.83 * window.innerHeight) {
            przypnij(3);
        } else odepnij(3);
    
    if (window.scrollY > 2.37 * window.innerHeight) {
            przypnij(4);
        } else odepnij(4);
    }


//zrobic foreach // slucha czy jest klik na nagłówku strony
let topic1 = document.getElementById("topic1");
let topic2 = document.getElementById("topic2");
let topic3 = document.getElementById("topic3");
let topic4 = document.getElementById("topic4");

topic1.addEventListener("click", activeTopic)
topic2.addEventListener("click", activeTopic)
topic3.addEventListener("click", activeTopic)
topic4.addEventListener("click", activeTopic)

// po kliknięciu scrolluje dokument tak aby była widoczna strona
function activeTopic() {
    console.log(this.id);
    
    if (this.id === "topic1") {
        window.scrollTo(0,0);
    }
    
    if (this.id === "topic2") {
        window.scrollTo(0,(0.95 * window.innerHeight));
    }

    if (this.id === "topic3") {
        window.scrollTo(0,(1.83 * window.innerHeight));
    }

    if (this.id === "topic4") {
        window.scrollTo(0,(2.2 * window.innerHeight));
    }
}


