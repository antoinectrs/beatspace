// document.addEventListener("touchmove", () => {
//     let mouseX = event.touches[0].clientX;; // Gets Mouse X
//     let mouseY = event.touches[0].clientY; // Gets Mouse Y
//     // const distCenter = DistanceSimple(0, mouseY);
//     const distDebug = Distance(0,window.innerWidth/2, mouseY,window.innerWidth/2);
//     translatecircle(distDebug);
//    
// });
function sqr(a) {
    return a * a;
}
function DistanceSimple(x1, y1) {
    return Math.sqrt(sqr(y1) + sqr(x1));
}
function Distance(x1, y1, x2, y2) {
    return Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1));
}
function soundByMap(distCenter) {
    const minVolume = 0;
    const maxVolume = 100;
    let leadFader = (mapRange(distCenter, 0,  PARAMS.maxDistance, minVolume, maxVolume)).toFixed(2);
    // let leadFader = (mapRange(distCenter, 0,  window.innerHeight, 0.25, 1.8)).toFixed(2);
    // console.log(PARAMS.maxDistance);
    console.log(leadFader);
    // document.getElementById("lead").stepDown(10);
    sample.crossfade(leadFader, maxVolume);
    // if(setTemp)
    // changeTempo(setTemp);
   
}