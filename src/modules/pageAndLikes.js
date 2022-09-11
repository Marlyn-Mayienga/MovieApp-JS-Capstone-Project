const filmList = [];
const getfilm = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  for (let i = 10; i < 18; i += 1) {
    filmList.push(data[i]);
  }
};
const showFilms = async (films = filmList) => {
  const allFilms = document.querySelector('.movies');
  // getting likes Data
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/C8E5YouAo1932pr87RVL/likes');
  const res = await response.json();
  // creating each Film and Uploading its contents on the main page
  films.forEach((film, id) => {
    const filmBox = document.createElement('div');
    filmBox.classList.add('filmBoxing');

    filmBox.innerHTML = `
       <img src="${film.image.medium}" alt="${film.name}"><br>
       <h2 class="filmTitle">${film.name}</h2><br>
       <i class="fas fa-heart like"></i><br>
       <div class="likes"> <span class="num-of-likes">${res[id].likes}</span> likes</div><br>
       <button type="button" class="comment-btn">comment</button> `;
    allFilms.append(filmBox);

    // adding like
    const likeBtns = document.querySelectorAll('.like');
    likeBtns.forEach((postLike, ID) => {
      postLike.addEventListener('click', async () => {
        await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/C8E5YouAo1932pr87RVL/likes',
          {
            method: 'POST',
            body: JSON.stringify({ item_id: ID }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          });
        /* eslint-disable */ 
        location.reload();
      });
    });
  });
  await getfilm();
};
export default showFilms;