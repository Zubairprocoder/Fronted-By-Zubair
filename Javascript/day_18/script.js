function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewstr;
  if (views < 1000) {
    viewstr = views;
  } else if (views > 1000000) {
    viewstr = views / 1000000 + "M";
  } else {
    viewstr = views / 1000 + "k";
  }
  let html = `  <div class="card">
        <div class="image">
          <img src="${thumbnail}" alt="youtube" />
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>${title}</h1>
          <p>${cName} . ${viewstr} views . ${monthsOld} months ago </p>
        </div>
      </div>`;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}
createCard(
  "Introduction to backend | Sigma Web Developement #2",
  "codewidthzubair",
  560000,
  7,
  "31:22",
  "/thumbnail.png"
);
