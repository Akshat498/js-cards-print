const cardsData = [
    {
        image: "/assets/images/png/Gustavo Hertwiz.png",
        title: "Gustavo Herwitz",
        description: "UI/UX Designer",
    },
    {
        image: "/assets/images/png/Phillip Curtis.png",
        title: "Phillip Curtis",
        description: "Graphic Designer",
    },
    {
        image: "/assets/images/png/Talan Torff.png",
        title: "Talan Torff",
        description: "Web Developer",
    },
    {
        image: "/assets/images/png/Abram Vaccaro.png",
        title: "Abram Vaccaro",
        description: "App Developer",
    },
];

function createCard(cardsData) {
    const card = document.createElement('div');
    card.classList.add('col-12', 'col-md-6', 'col-xl-3', 'mb-4');
    let cardContent = `
    <div class="card  rounded-4">
      <img src="${cardsData.image}" class="card-img-top  w-100" alt="${cardsData.title}">
      <div class="card-body p-0">
        <h5 class="card-title work-sans-font text-black fw-medium  fs-md lh-24 pt-24 mb-0 ">${cardsData.title}</h5>
        <div class=" gap-8 pt-12 align-items-center ">
          <p class="date fs-sm work-sans-font lh-24 fc-grey text-center   fw-normal mb-3 text-center">${cardsData.description}</p>
        </div>
    </div>
  `;
    card.innerHTML = cardContent;
    return card;
}

const cardContainer = document.getElementById('card-container');
cardsData.forEach(cardData => {
    const card = createCard(cardData);
    cardContainer.appendChild(card);

});