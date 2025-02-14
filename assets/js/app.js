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
    card.classList.add('col-12', 'col-md-6', 'col-xl-3', 'mb-24');
    let cardContent = `
    <div class="card  rounded-4">
      <img src="${cardsData.image}" class="card-img-top  w-100" alt="${cardsData.title}">
      <div class="card-body p-0">
        <h5 class="card-title poppins-font text-black fw-semibold fs-md lh-150 mt-21 mb-0 ">${cardsData.title}</h5>
        <div class=" gap-8 mt-12 align-items-center ">
          <p class="date fs-sm poppins-ont lh-150 text-black text-center  fw-normal opacity-60 mb-4 text-center">${cardsData.description}</p>
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