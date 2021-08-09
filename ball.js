class Ball{

    constructor(x,y){
        this.body = Bodies.circle(x,y,20)
        this.image = loadImage("ball.png")
        World.add(world,this.body)
    }
 
        display(){

        image(this.image,this.body.position.x,this.body.position.y,40,40) 

        }

}