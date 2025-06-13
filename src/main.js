document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabContainer = document.querySelector('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY

        if (scrollPosition < heroHeight) {
            hideHeader();
        } else {
            showHeader();
        }
    })
    
    // Programação das abas da sessão de atrações
    for (let i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener('click', function(botao) {
            const targetTab = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            hideAllTabs();
            tab.classList.add('shows__list--is--active');
            removeActiveButton();
            botao.target.classList.add('shows__tabs__button--is--active');

        })
    }

    // Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openCloseAnswer)
    }
})

function hideHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');

}

function showHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');

}

function openCloseAnswer(element) {
    const classe = 'faq__questions__item--active';
    const parent = element.target.parentNode;

    parent.classList.toggle(classe);
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}


function hideAllTabs() {
    const tabContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabContainer.length; i++) {
        tabContainer[i].classList.remove('shows__list--is--active');

    }
}