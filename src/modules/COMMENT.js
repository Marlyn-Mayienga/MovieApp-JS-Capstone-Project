import display from './display.js';

let list = [];
const getData = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  list = [];
  for (let i = 10; i < 18; i += 1) {
    list.push(data[i]);
  }
};

const commentPopups = async () => {
  await getData();
  await display();
  const popupContent = document.querySelector('.commentPop');
  const commentBtns = document.querySelectorAll('.commentBtn');
  const greypopup = document.querySelector('.popup');

  commentBtns.forEach((btn, id) => {
    btn.addEventListener('click', () => {
      greypopup.classList.add('activate-popup');
      document.body.style.overflow = 'hidden';

      popupContent.innerHTML = `
          <div class="mod active">
          <div class="button-container"> 
          <button type="button" class="closeBtn" >&#10008;</button></div>
          <div class="img-info-container">
           <div class="img-container"><img src="${list[id].image.original}" alt=""/></div>
           <div class="info"> 
              <h2 class="film-title">${list[id].name}</h2>
              <div class="data">
                <div>
                  <p>Genres : ${list[id].genres}</p>
                  <p>Premiered: ${list[id].premiered}</p>
                </div>
                <div>
                  <p>Runtime : ${list[id].runtime}</p>
                  <p>Rating : ${list[id].rating.average}</p>
                </div>
              </div>
  
             <div>
                <h2 class="comment-list">Comments</h2>
                <div id=""></div>
              </div>
  
                <h2 class="add-comment">Add comment</h2>
                <form>
                <input type="text" class="username" placeholder="Your name"/>
                <input type="textarea" class="comment" placeholder="Add Your comment"/>
                <button type="submit" class="submitBtn">Submit</button>
                </form>
                </div>
            </div>
      </div>
        `;

      const closeButtons = document.querySelectorAll('.closeBtn');
      const removebtn = document.querySelectorAll('.mod');

      closeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          removebtn.forEach((btn) => {
            btn.classList.remove('active');
          });
          document.body.style.overflow = 'auto';
          greypopup.classList.remove('activate-popup');
        });
      });
    });
  });
};

export default commentPopups;