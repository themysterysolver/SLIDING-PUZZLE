class tile{
    constructor(val,id,x,y){
        this.x=x;
        this.y=y;
        this.element=document.createElement('div');
        this.element.className='tile';
        this.value=val;
        this.element.textContent=this.value;
        this.element.id=id;
        if(this.value===''){
            this.element.classList.add('empty');
        }
        this.setPos();
    }
    setPos(){
        const tileSize=105;
        this.element.style.transform=`translate(${this.x*tileSize}px,${this.y*tileSize}px)`;
    }
}
const board=document.getElementById('board');
const tiles=[];

for(let i=0;i<15;i++){
    const col=Math.floor(i/4);
    const row=i%4;
    const t=new tile(i+1,`tile-${i+1}`,row,col);
    board.appendChild(t.element);
    tiles.push(t);
}
const emptyTile=new tile('','tile-16',3,3);
tiles.push(emptyTile);
board.appendChild(emptyTile.element);

function shuffle(){
    const keys=["Left","Up","Right","Down"]
    const size=4;
    for(let i=0;i<1000;i++){
        const rIdx=Math.floor(Math.random()*size);
        swapTile(keys[rIdx]);
    }
    for(let i=0;i<5;i++){
        swapTile("Up");
        swapTile("Left");
    }
}
function swapTile(direction){
    let targetX=emptyTile.x;
    let targetY=emptyTile.y;
    switch(direction){
        case 'Left':
            targetX+=1;
            break;
        case 'Right':
            targetX-=1;
            break;
        case 'Up':
            targetY+=1;
            break;
        case 'Down':
            targetY-=1
            break;
        default:
            return;
    }
    const destTile=tiles.find((tile)=>tile.x===targetX && tile.y===targetY);
    if(destTile){
        const tempX=destTile.x;
        const tempY=destTile.y;

        destTile.x=emptyTile.x;
        destTile.y=emptyTile.y;

        emptyTile.x=tempX;
        emptyTile.y=tempY;

        destTile.setPos();
        emptyTile.setPos();
    }
}
document.addEventListener('keydown',(event)=>{
    let direction;
    switch(event.key){
        case 'ArrowLeft':
            direction="Left";
            break;
        case 'ArrowRight':
            direction="Right";
            break;
        case 'ArrowUp':
            direction="Up";
            break;
        case 'ArrowDown':
            direction="Down";
            break;
        default:
            return;
    }
    swapTile(direction);
});
shuffle();