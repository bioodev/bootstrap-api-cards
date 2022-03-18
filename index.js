const getData = () => {
  /**
   * the json format of the api fecthed
   */
  let dataFetched;
  /**
   * to fetch the api
   */
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dataFetched = data; //initialized dataFetched

      data.forEach((element) => {
        const rootElement = document.getElementById("root");
        rootElement.setAttribute("class", "row row-cols-1 row-cols-md-3 g-4");
        const cardElement = document.createElement("div");
        cardElement.setAttribute(
          "class",
          "card text-white bg-secondary mb-3 h-100"
        );
        const divContainingHeader = document.createElement("div");
        divContainingHeader.setAttribute("class", "card-header");
        const divContainingParagraph = document.createElement("div");
        divContainingParagraph.setAttribute("class", "card-body");
        const headerOfCardElement = document.createElement("h3");
        headerOfCardElement.setAttribute("class", "card-title mb-0");
        const bodyOfCardElement = document.createElement("p");
        bodyOfCardElement.setAttribute("class", "card-text");
        const divcolElement = document.createElement("div");
        divcolElement.setAttribute("class", "col");

        const divContainingExtra = document.createElement("div");
        divContainingExtra.setAttribute("class", "d-flex justify-content-end");
        const extraOfCardElement = document.createElement("span");
        extraOfCardElement.setAttribute("class", "badge bg-dark");

        headerOfCardElement.textContent = element.title;
        extraOfCardElement.textContent = element.release_date;

        bodyOfCardElement.textContent = `${element.description.substring(
          0,
          300
        )}...`;
        divContainingHeader.appendChild(headerOfCardElement);
        divContainingParagraph.appendChild(bodyOfCardElement);
        divContainingExtra.appendChild(extraOfCardElement);
        divContainingParagraph.appendChild(divContainingExtra);

        cardElement.appendChild(divContainingHeader);
        cardElement.appendChild(divContainingParagraph);
        divcolElement.appendChild(cardElement);
        rootElement.appendChild(divcolElement);
      });
    });
};

window.addEventListener("load", () => {
  getData();
});
