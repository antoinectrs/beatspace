window.addEventListener("load", function (event) {
    playingTrack();
});
function playingTrack() {
    const playerDiv = document.getElementById("playDiv")
    playerDiv.addEventListener("touchstart", function () {
            player.play();
            
        }, false);
}