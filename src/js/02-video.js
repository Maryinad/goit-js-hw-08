import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function (data) {
  //   console.log(data);
  console.log(data.seconds);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};
player.on('timeupdate', throttle(onPlay, 1000));

// const currentTime = localStorage.getItem('videoplayer-current-time');
// console.log(currentTime);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
