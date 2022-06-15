window.addEventListener('scroll', onScroll )

onScroll()


function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSection()

}

function activateMenuAtCurrentSection() {
    const targetLine = scrollY +innerHeight / 2

    //verificar se a seção passou da linha imaginária
    //quais dados vou precisar?

    const sectionTop = home.offsetTop
    const sectionHeight = home.offsetHeight 

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    console.log('chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)
    
}




function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
        }    else {
            navigation.classList.remove('scroll')
        }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 500) {
        backToTopButton.classList.add('show')
        }    else {
            backToTopButton.classList.remove('show')
        }
}


function openMenu() {
    document.body.classList.add('menu-expended')
}

function closeMenu() {
    document.body.classList.remove ('menu-expended')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content

`);