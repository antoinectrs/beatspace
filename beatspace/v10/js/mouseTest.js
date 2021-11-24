document.addEventListener("mousemove", () => {
    let mouseX = event.clientX; // Gets Mouse X
    let mouseY = event.clientY; // Gets Mouse Y
    const distCenter = Distance(mouseX, mouseY, window.innerWidth / 2, window.innerHeight / 2)
    translatecircle(distCenter)
    
    if (PARAMS.beginShare == true) {
       let tempoMap= soundByMap(distCenter);
    }
});
function sqr(a) {
    return a * a;
}
function Distance(x1, y1, x2, y2) {
    return Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1));
}
function soundByMap(distCenter) {
    let setTemp = (mapRange(distCenter, 0, 500, 0.75, 1.5)).toFixed(1);
    changeTempo(setTemp);
    // console.log( setVolume);
}