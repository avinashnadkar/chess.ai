let gameLayout = document.getElementById('canvas');

//height and width for chess board
gameLayout.height = 480;
gameLayout.width = 480;

//box context
let boxCtx = gameLayout.getContext('2d');

//constructor class for boxes
class chessBox {
    constructor(h,w,x,y,color){
        this.h = h;
        this.w = w;
        this.x = x;
        this.y = y;
        this.color = color;
    }
}

//matrix of boxes (box objects will be stored in this array)
let matrix = [];

//init data for objects
let x_pos = 0;
let y_pos = 0;
let boxColor = ""

//Add box objects in matrix
for(let i=0;i<8;i++){
   let emptyArr = [];
   for(let j=0;j<8;j++){
       if((i%2 == 1 && j%2==1) || (i%2 == 0 && j%2==0)){
        boxColor  = "white";
       }else{
        boxColor  = "#3c1321";
       }
       let box = new chessBox(60,60,x_pos,y_pos,boxColor);
       emptyArr[j] = box;
       x_pos += 60;
   }
   matrix[i] = emptyArr;
   x_pos = 0;
   y_pos += 60;
}


//Draw boxContext in canvas
for(let row = 0;row<8;row++){
    for(let column=0; column<8;column++){
        boxCtx.fillStyle = matrix[row][column].color;
        boxCtx.fillRect(matrix[row][column].x,matrix[row][column].y,matrix[row][column].w,matrix[row][column].h)
    }
}

