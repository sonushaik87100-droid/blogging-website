const foods = [
  {
    name: "Pesarattu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUVM_CIlo8ZgSH_t4V6LaFgfOBGR4X5CqNL-QvvSaOw&s=10",
    description: "A crisp savory crepe made from green gram. It is a traditional Andhra breakfast and is commonly served with ginger chutney."
  },
  {
    name: "Gongura Pachadi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgAyyy3o73hduTvrXNIPiTJ1F2WGmnE5KTsUYr5QqFmg&s=10",
    description: "A tangy and spicy chutney made from gongura (roselle) leaves. It is traditionally enjoyed with hot rice and ghee."
  },
  {
    name: "Gutti Vankaya",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ068D6mr6adP6DDzO1bJJ1GL5tNlMJ6GMLX9VSaRkRg&s=10",
    description: "Small brinjals are stuffed with roasted spices and cooked into a rich, aromatic Andhra curry."
  },
  {
    name: "Pulihora",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJtToC-nx1EYHTcv5oW4KR6P8cfXP8Z0F0lj1XVLqoA&s=10",
    description: "Tangy tamarind rice tempered with spices, curry leaves and peanuts, commonly prepared for festivals and special occasions."
  },
  {
    name: "Chepala Pulusu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHnZRmwETssTSI0ZtzGHG9te1P7huPbjdXT4a9gT9Fw&s=10",
    description: "A traditional fish stew cooked in a tamarind-based sauce with spices, giving it a distinctive tangy flavor."
  },
  {
    name: "Andhra Chicken Curry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShHhPOB-Qd-u0EF_6E2hHNNJfKye0vCkZAe-RJi0SLmw&s=10",
    description: "A bold chicken preparation using local spices and chilies, known for its aromatic and spicy flavor."
  },
  {
    name: "Ulavacharu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTasJZ5bWW9py0OZ7LF1nTaPa3YmSupgyzPY315zsxx-Q&s=10",
    description: "A rich horse-gram stew with a rustic, deep flavor that is traditionally served with rice."
  },
  {
    name: "Bobbatlu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkek1xbwN9LINwyXLYa6Bs8MrwVVldvCCeSORScN7Wyg&s",
    description: "A soft sweet flatbread filled with jaggery and lentils, traditionally enjoyed during festivals."
  },
  {
    name: "Pootharekulu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CqFhNdCjRLNjdqJEg81JXTu58u9SBmcY1hcGqXn0vg&s=10",
    description: "A delicate Andhra sweet made from paper-thin rice starch sheets layered with sugar or jaggery and ghee."
  },
  {
    name: "Ariselu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82-XzlEJYaycqncF3GPu0LBl7mDgmKqilfLSYrgUg6w&s=10",
    description: "A traditional festive sweet made with rice flour and jaggery, shaped and fried until golden."
  }
];

const loginPage = document.getElementById("loginPage");
const dashboard = document.getElementById("dashboard");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const logoutBtn = document.getElementById("logoutBtn");
const foodGrid = document.getElementById("foodGrid");
const searchBox = document.getElementById("searchBox");
const noResults = document.getElementById("noResults");

function renderFoods(list) {
  foodGrid.innerHTML = "";

  list.forEach((food) => {
    const card = document.createElement("article");
    card.className = "food-card";
    card.innerHTML = `
      <img src="${food.image}" alt="${food.name}">
      <div class="food-body">
        <h3>${food.name}</h3>
        <p>${food.description}</p>
      </div>
    `;
    foodGrid.appendChild(card);
  });

  noResults.classList.toggle("hidden", list.length !== 0);
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    loginPage.classList.add("hidden");
    dashboard.classList.remove("hidden");
    logoutBtn.classList.remove("hidden");
    loginMessage.textContent = "";
    renderFoods(foods);
  } else {
    loginMessage.textContent = "Invalid username or password.";
    loginMessage.style.color = "#c62828";
  }
});

logoutBtn.addEventListener("click", () => {
  dashboard.classList.add("hidden");
  loginPage.classList.remove("hidden");
  logoutBtn.classList.add("hidden");
  loginForm.reset();
  searchBox.value = "";
});

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase().trim();
  const filtered = foods.filter(food =>
    food.name.toLowerCase().includes(query) ||
    food.description.toLowerCase().includes(query)
  );
  renderFoods(filtered);
});
