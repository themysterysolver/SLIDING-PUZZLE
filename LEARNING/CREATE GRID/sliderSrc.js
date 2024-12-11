class tile{
    constructor(val,id){
        this.element=document.createElement('div');
        this.element.className='tile';
        this.value=val;
        this.element.textContent=this.value;
        this.element.id=id;
        if(this.value===''){
            this.element.classList.add('empty');
        }
    }
}
const board=document.getElementById('board');

for(let i=1;i<16;i++){
    const t=new tile(i,`tile-${i}`);
    board.appendChild(t.element);
}
const emptyTile=new tile('','tile-16');
board.appendChild(emptyTile.element);