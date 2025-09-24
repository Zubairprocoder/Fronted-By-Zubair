console.log("food recipe app");
let food = document.querySelector(".food");

// Buttons
let buttons = {
  Indian: document.querySelector("#Indian"),
  Russian: document.querySelector("#Russian"),
  China: document.querySelector("#China"),
  Japan: document.querySelector("#Japan"),
  American: document.querySelector("#American"),
  Italy: document.querySelector("#Italy"),
  Canada: document.querySelector("#Canada"),
  British: document.querySelector("#British"),
};

// Map with correct API area names
const countryMap = {
  Indian: "Indian",
  Russian: "Russian",
  China: "Chinese",
  Japan: "Japanese",
  American: "American",
  Italy: "Italian",
  British: "British",
  Canada: "Canadian",
};

// Fetching data from API
const fetchData = async (area) => {
  console.log("Fetching recipes for:", area); // Area name
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  const data = await api.json();
  let recipe = data.meals;
  if (recipe) {
    showData(recipe);
  } else {
    food.innerHTML = `<p class="text-center text-danger">No recipes found for ${area}</p>`;
  }
};

const search = () => {
  let input = document.querySelector("#search");
  let btn = document.querySelector("#searchBtn");
  let resultsBox = document.querySelector("#results");
  let errorMsg = document.querySelector("#errorMsg");

  const doSearch = async (query = null) => {
    let inputVal = query || input.value.trim();

    try {
      // agar input empty hai to Indian category
      if (inputVal === "") inputVal = "Indian";

      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`
      );
      const data = await api.json();
      let recipe = data.meals;

      if (recipe) {
        showData(recipe);
        errorMsg.classList.add("d-none"); // hide error
      } else {
        resultsBox.innerHTML = "";
        errorMsg.textContent =
          "Not found your recipe, please try another recipe name.";
        errorMsg.classList.remove("d-none"); // show error
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      resultsBox.innerHTML = "";
      errorMsg.textContent = "Something went wrong!";
      errorMsg.classList.remove("d-none");
    }
  };

  // Enter key
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doSearch();
  });

  // Button click
  btn.addEventListener("click", () => doSearch());

  // Input clear
  input.addEventListener("input", () => {
    if (input.value.trim() === "") {
      resultsBox.innerHTML = "";
      errorMsg.classList.add("d-none");
      doSearch("Indian"); // default load
    }
  });

  // Default load
  errorMsg.classList.add("d-none"); // ensure hidden
  doSearch("Indian"); // default Indian recipes
};

search();

// Show data function
const showData = (items) => {
  food.innerHTML = items
    .map(
      (meal) => `
        <div class="col-md-4 text-center">
          <div class="card img-fluid hover-scale cursor-pointer">
            <img class="rounded-3" src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}" />
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <button class="btn hover-scale cursor-pointer btn-primary mt-2">View Recipe</button>
            </div>
          </div>
        </div>
      `
    )
    .join("");
};

// Default load
fetchData("Indian");

// Button click events using countryMap
Object.keys(buttons).forEach((key) => {
  buttons[key].addEventListener("click", () => {
    fetchData(countryMap[key]); // correct API name passed
  });
});
