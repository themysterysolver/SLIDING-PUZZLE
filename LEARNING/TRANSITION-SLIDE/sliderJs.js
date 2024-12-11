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
    const row=Math.floor(i/4);
    const col=i%4;
    const t=new tile(i+1,`tile-${i+1}`,row,col);
    board.appendChild(t.element);
    tiles.push(t);
}
const emptyTile=new tile('','tile-16',3,3);
tiles.push(emptyTile);
board.appendChild(emptyTile.element);

document.addEventListener('keydown',(event)=>{
    let targetX=emptyTile.x;
    let targetY=emptyTile.y;
    switch(event.key){
        case 'ArrowLeft':
            targetX+=1;
            break;
        case 'ArrowRight':
            targetX-=1;
            break;
        case 'ArrowUp':
            targetY+=1;
            break;
        case 'ArrowDown':
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
});