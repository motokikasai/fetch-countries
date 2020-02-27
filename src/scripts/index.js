// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "regenerator-runtime/runtime";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const endpoint = "https://restcountries.eu/rest/v2/all";

document.addEventListener("DOMContentLoaded", event => {
  fetch(endpoint)
    .then(res => {
      if (res) {
        // console.log(res);
        return res.json();
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    })
    .then(data => {
      // console.log(data[0]);

      const ul = document.createElement("ul");
      document.querySelector("main").appendChild(ul);

      const arrayOfCountryNames = data.forEach(item => {
        const eachLiItem = `<li>${item.name}</li>`;
        // eachLiItem.innerHTML = `<li>${item.name}</li>`;
        console.log(eachLiItem);

        document.querySelector("ul").innerHTML = eachLiItem;

        // const liIntoHtml = eachLiItem.innerHTML;
        // console.log(liIntoHtml);
      });
    })
    .catch(e => {
      console.log(e);
    });
});
