// variables
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 12;

// functions
playerLivesCount.textContent = playerLives;

//generate data 
const getData = () => [
    { imgSrc: "./Images/hippo-solid.png", name: "hippo" },
    { imgSrc: "./Images/crow-solid.png", name: "crow" },
    { imgSrc: "./Images/dog-solid.png", name: "dog" },
    { imgSrc: "./Images/otter-solid.png", name: "otter" },
    { imgSrc: "./Images/frog-solid.png", name: "frog" },
    { imgSrc: "./Images/shrimp-solid.png", name: "shrimp" },
    { imgSrc: "./Images/cat-solid.png", name: "cat" },
    { imgSrc: "./Images/horse-solid.png", name: "horse" },
    { imgSrc: "./Images/fish-fins-solid.png", name: "fish" },
    { imgSrc: "./Images/cow-solid.png", name: "cow" },
    { imgSrc: "./Images/hippo-solid.png", name: "hippo" },
    { imgSrc: "./Images/crow-solid.png", name: "crow" },
    { imgSrc: "./Images/dog-solid.png", name: "dog" },
    { imgSrc: "./Images/otter-solid.png", name: "otter" },
    { imgSrc: "./Images/frog-solid.png", name: "frog" },
    { imgSrc: "./Images/shrimp-solid.png", name: "shrimp" },
    { imgSrc: "./Images/cat-solid.png", name: "cat" },
    { imgSrc: "./Images/horse-solid.png", name: "horse" },
    { imgSrc: "./Images/fish-fins-solid.png", name: "fish" },
    { imgSrc: "./Images/cow-solid.png", name: "cow" }
];

// randomize cards
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

// card generator function
const cardGenerator = () => {
    const cardData = randomize();
//genrate html
cardData.forEach((item) => {
    const card = document.createElement('div');
    const front = document.createElement('img');
    const back = document.createElement('img');
    card.classList = 'card';
    front.classList = 'front';
    back.classList = 'back';
    // attach arrows to front
    back.src = "./Images/arrows-rotate-solid.svg";
    /// attach img to card and attach name to card
    front.src = item.imgSrc;
    card.setAttribute('name', item.name);
    //attach cards to section
    section.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', (e) => {
        card.classList.toggle('toggleCard');
        checkCards(e);
    });
});
};

//check cards
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped')
    const toggleCard = document.querySelectorAll('.toggleCard')
    // logic
    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute('name') === 
        flippedCards[1].getAttribute('name'))
        { 
            flippedCards.forEach((card) => {
            card.classList.remove('flipped');
            card.style.pointerEvents = 'none';
            });
        }else{
            flippedCards.forEach((card) => {
            card.classList.remove('flipped');
            setTimeout(() =>
            card.classList.remove('toggleCard'), 1000);
                });
                playerLives--;
                playerLivesCount.textContent = playerLives;
                if(playerLives === 0) {
                    restart('Almost..');
                }
        }
    }
    //run check if win
    if(toggleCard.length === 20) {
        restart('Well done!')
    }
};

//restart function
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.front');
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = 'none';
    cardData.forEach((item, index) => {
        setTimeout(() =>
        cards[index].classList.remove('toggleCard'), 500);
        // randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = 'all';
        }, 1000)
    })
    playerLives = 12;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
};

cardGenerator();