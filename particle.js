class Particle{
    constructor(x,y){
        var op = {
            restitution:0.04
        }
        this.body = Bodies.circle(x,y,10,op)
        this.r = 10
        this.color= color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        push()
        fill(this.color)
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r)
        pop()
    }
}