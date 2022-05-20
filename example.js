const container = document.querySelector(".container");

const student = {
  firstName: "Harry",
  lastName: "Potter",
  house: "Gryffendor",
  bestFriend: "Ron",
};

const createHTML = (object) => {
  return `<div class="card">
      <h1 class="card__firstName">First Name: ${object[0].firstName}</h1>
      <h2>Last Name: ${object[0].lastName}</h2>
      <h3>House: ${object[0].house}</h3>
      <h4>Best Friend: ${object[0].bestFriend}</h4>
    </div>`;
};

container.innerHTML = createHTML(student);
