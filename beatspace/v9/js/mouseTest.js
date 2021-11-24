document.addEventListener("mousemove", () => {
    let mousex = event.clientX; // Gets Mouse X
    let mousey = event.clientY; // Gets Mouse Y
    // console.log([mousex, mousey]); // Prints data
    translatecircle(Distance( mousex,mousey,  window.innerWidth/2,  window.innerHeight/2))
});
function sqr(a) {
    return a*a;
}
 
function Distance(x1, y1, x2, y2) {
    return Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1));
}