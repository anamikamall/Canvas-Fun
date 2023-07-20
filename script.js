const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
//to set size of canvas as window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//to set color of stroke
ctx.strokeStyle ="#BADA55";
//to set end of the line and joining of line as squred off or round
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 80;
// ctx.globalCompositeOperation = 'multiply'; //will blend the colors

//kind of flag that draws only when it is true i.e mouse is clicked
let isDrawing = false;
let lastX =0; //coordinates of position from where to draw
let lastY =0;
let hue = 0;
let direction = true;

const draw = (e) => {
    if(!isDrawing)
    return ; //stop the function from running when they are not moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // hue ,saturation, lightness
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke(); //will not draw till u call this method
    //update lastx, lastY to where u left
    // lastX= e.offsetX;
    // lastY= e.offsetY;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue >=360)
    hue=0;

    if(ctx.lineWidth >= 80 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if(direction) {
        ctx.lineWidth ++ ;
    } else {
        ctx.lineWidth -- ;
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];

});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
