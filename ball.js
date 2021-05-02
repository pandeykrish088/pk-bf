class Ball {
    constructor() {
        this.x = 500;
        this.y =300;
    }
   
    getPosition(){
    var refBallPosition = database.ref('ball/position');
    refBallPosition.on("value", ()=>{
        position = data.val();
        console.log(position.x);
        ball.x = position.x;
        ball.y = position.y;
    });
    }

    writePosition(x,y){
        database.ref('ball/position').set({
          'x': position.x + x ,
          'y': position.y + y
        })
      }
      
   
      
}
