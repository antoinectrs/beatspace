const player = document.querySelector('.player_audio');
// const playerDisplay = document.querySelector('.player_display');

const changeTempo = function () {
  player.playbackRate = tempoInput.value;
  tempoDisplay.textContent = tempoInput.value;
};

// const changeSongURL = function (e) {
//   player.src = urlInput.value;
//   let filename = player.src.split('\\').pop().split('/').pop();
//   playerDisplay.textContent = filename;
// }

// const changeSongFile = function (e) {
//   const target = e.currentTarget;
//   const file = target.files[0];

//   let reader;

//   if (target.files && file) {
//     reader = new FileReader();
//     reader.onload = function (e) {
//       console.log(e.target)
//       player.setAttribute('src', e.target.result);
//       playerDisplay.textContent = file.name;
//       // player.play(); // auto play on load
//     }
//     reader.readAsDataURL(file);
//   }
// };

// Get the song from:
// const urlInput = document.getElementById('url_input');
// urlInput.addEventListener("change", changeSongURL, false);


// Or upload an MP3:
// const uploadInput = document.getElementById('upload_input');
// uploadInput.addEventListener('change', changeSongFile, false);


// Playback tempo 
const tempoInput = document.getElementById('tempo_input');
tempoInput.addEventListener("change", changeTempo, false);
const tempoDisplay = document.querySelector('.tempo_display');
tempoDisplay.textContent = tempoInput.value;

// Chords from:
// const vtt = document.getElementById('url_input').value.replace('.mp3', '.vtt');

// const player_chords = document.getElementById('player-chords');

// player_chords.src = vtt;
player.src = "./../music/tempo1/yokota.mp3";
// changeSongURL();
changeTempo();