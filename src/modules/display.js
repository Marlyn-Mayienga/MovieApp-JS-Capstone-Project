let list = [];
const getData = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  list = [];
  for (let i = 10; i < 18; i += 1) {
    list.push(data[i]);
  }
};

const display = async () => {
  const section = document.querySelector('.movies');
  if (section.innerHTML) {
    return;
  }
  if (list.length === 0) {
    await getData();
  }
  list.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
    <img src="${item.image.medium}" alt="${item.name}">
    <div class="item-header">
      <h3>${item.name}</h3>
      <span class="heart" style="font-size:200%; cursor:pointer;">&hearts;</span>
    </div>
    <div class="likes">
      <span class="num">0</span> <span>likes</span>
    </div>
    <button type="button" class="btn btn-primary btn-sm commentBtn">Comments</button><br>
    `;
    section.appendChild(div);
  });
  // const movies = document.querySelector('.movies');
  // movies.innerHTML = `Series (${section.childElementCount})`;
};

export default display;