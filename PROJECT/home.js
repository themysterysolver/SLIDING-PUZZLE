class tile{
    constructor(count){
        this.element=document.createElement('div');
        this.count=count;
        this.score=10000;
        this.text=`${count}x${count}`;
        this.element.textContent=this.text;
        this.element.className='tile';
    }
}
const box=document.getElementById('box');
const rows=2,cols=2;
let count=2;
for(let row=0;row<rows;row++){
    for(let col=0;col<cols;col++){
        const t=new tile(count++);
        box.appendChild(t.element);
    }
}