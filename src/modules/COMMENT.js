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
                <div class="allComments"></div>
              </div>
  
                <h2 class="add-comment">Add comment</h2>
                <div class="commentForm">
                <input type="text" class="username" placeholder="Your name"/>
                <input type="textarea" class="comment" placeholder="Add Your comment"/>
                <button type="submit" class="submitBtn">Submit</button>
                </div>
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

      const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
      const key = '2yjaO516ihOM58A91oBf';
      const submitBtn = document.querySelector('.submitBtn');
      submitBtn.addEventListener('click', () => {
        // eslint-disable-next-line camelcase
        const item_id = id;
        const usernameInput = document.querySelector('.username');
        const commentInput = document.querySelector('.comment');
        const username = usernameInput.value;
        const comment = commentInput.value;
        const dataToSend = JSON.stringify({ item_id, username, comment });
        async function postData(url = '', data = {}) {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: data,
          });
          /* eslint-disable */
          getcommentData();
          const count = document.querySelectorAll('.left');
          const total = count.length;
          const counter = document.querySelector('.comment-list');
          counter.innerHTML = `Comments (${total + 1})`;
          return response;
        }

        postData(`${url}${key}/comments`, dataToSend)
          .then((json) => {
            // eslint-disable-next-line no-unused-expressions
            json;
          })
          .catch((err) => {
            // eslint-disable-next-line no-unused-expressions
            err;
          });
        usernameInput.value = '';
        commentInput.value = '';
      });

      async function getData(url = '') {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        });
        return response;
      }
      const allComments = document.querySelector('.allComments');

      const getcommentData = () => {
        getData(`${url}${key}/comments?item_id=${id}`).then(async (res) => {
          const array = await res.json();
          return array;
        })
          .then((array) => {
            if (array.length > 0) {
              const getting = array
                .map((items) => `
                  <div class="left">
                    <p class="eachScore">${items.creation_date} <span>${items.username}:</span>
                    <span class="numberSc">${items.comment}</span></p>
                  </div>`)
                .join(' ');
              allComments.innerHTML = getting;
            // eslint-disable-next-line no-empty
            } else {
            }
          });
      };
      getcommentData();

      setTimeout(() => {
        const count = document.querySelectorAll('.left');
        const total = count.length;
        const counter = document.querySelector('.comment-list');
        counter.innerHTML = `Comments (${total})`;
      }, 2000);
    });
  });
};

export default commentPopups;