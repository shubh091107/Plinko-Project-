class Plinko{
    constructor(x,y){
        var op = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,10,op)
        this.radius=10
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius)
    }
}