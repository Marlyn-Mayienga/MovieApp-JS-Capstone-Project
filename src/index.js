import './style.css';
import display from './modules/display.js';
import likes from './modules/likes.js';

import commentPopups from './modules/COMMENT.js';

display();
setTimeout(() => {
  likes.displayLikes();
  likes.avtivateLikeBtns();
}, 1000);
commentPopups();
