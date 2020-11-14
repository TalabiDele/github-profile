const profileInfo = document.querySelector(".profile-info"),
  repoItem = document.querySelector(".repo-item"),
  profileImg = document.querySelector(".profile-img"),
  repoNumDOM = document.querySelector(".repo-num");

async function fetchData() {
  const res = await fetch("https://api.github.com/users/talabidele");
  const data = await res.json();

  profileInfo.innerHTML = `
    <img src=${data.avatar_url} class=img-round />
    <h2>${data.login}</h2>
    <p>${data.name}</p>
    <p>${data.bio}</p>
  `;
  profileImg.innerHTML = `
    <img src=${data.avatar_url} class=img-small />
  `;
  repoNumDOM.textContent = `
    ${data.public_repos} results for public repos
  `;
}

async function fetchRepoData() {
  const res = await fetch("https://api.github.com/users/talabidele/repos");
  const data = await res.json();

  data.forEach((item) => {
    if (item.language !== "html") {
      console.log("yes");
    } else {
      console.log("html");
    }
  });

  repoItem.innerHTML = `
    ${data
      .map(
        (item) => `
        <div class='repo'>
          <div class="split">
            <a class="repo-name">${item.name}</a>
            <button class="btn-small-primary"><i class="far fa-star"></i>  Star</button>
          </div>
          ${
            item.description !== null
              ? `<p class="show description">${item.description}</p>`
              : `<p class='hide description'>${item.description}</p>`
          }
          <div class='bottom'>
            ${
              item.language !== null
                ? `${
                    item.language !== "html"
                      ? `<div class="css-color"></div>`
                      : `<div class="html-color"></div>`
                  }<p class="show">${item.language}</p>`
                : `<p class='hide'>${item.language}</p>`
            }
            <p>Updated on ${
              new Date(item.updated_at).getDate() +
              " " +
              new Date(item.updated_at).toLocaleString("default", {
                month: "short",
              })
            }</p>

          </div>
        </div>`
      )
      .join("")}
  `;
  console.log(data);
}

fetchData();
fetchRepoData();

const info = {
  name: "dele",
  lastName: "Talabi",
  age: 24,
};

console.log(info.name);
console.log(info.age);
