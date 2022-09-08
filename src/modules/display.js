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
      <span class="heart" style="font-size:100%; cursor:pointer;"><i class="fas fa-heart"></i></span>
      <div class="likes">
      <span class="num">0</span> <span>likes</span>
    </div>
    </div>
    
    <button type="button" class="btn btn-primary btn-sm commentBtn">Comments</button><br>
    `;
    section.appendChild(div);
  });
};

export default display;