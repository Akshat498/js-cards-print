import { cardContent } from "./data.js";
const cardContainer = document.getElementById('card-container');

cardContent.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.classList.add('col-12', 'col-md-6', 'col-xl-3', 'mb-4');

    cardElement.innerHTML = `
        <div class="card ">
            <img src="${card.image}" class="card-img-top w-100" alt="${card.title}">
            <div class="card-body p-0">
                <h5 class="card-title work-sans-font text-black fw-medium fs-md lh-24 pt-24 mb-0">${card.title}</h5>
                <div class="gap-8 pt-12 align-items-center ">
                 <a class="svg-container position-absolute icons d-flex justify-content-center align-items-center">${card.svg_one}</a>
                  <a class="svg-container-2 position-absolute icons d-flex justify-content-center align-items-center">${card.svg_two}</a>
                       <a class="svg-container-3 position-absolute icons d-flex justify-content-center align-items-center">${card.svg_three}</a>
                             <a class="svg-container-4 position-absolute icons d-flex justify-content-center align-items-center">${card.svg_four}</a>
                </div>
                <p class="date fs-sm work-sans-font lh-24 fc-grey text-center fw-normal mb-3">${card.description}</p>
            </div>
        </div>`;
    cardContainer.appendChild(cardElement);
});
