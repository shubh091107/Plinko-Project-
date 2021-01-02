class Ground{
    constructor(){
        var op = {
            isStatic:true
        }
        this.body = Bodies.rectangle(240,790,500,10,op)
        this.width = 500
        this.height = 20
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        fill("pink")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
}