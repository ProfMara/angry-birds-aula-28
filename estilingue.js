class Estilingue{

    constructor(corpo, ponto){
        var op={
            bodyA:corpo,
            pointB:ponto,
            stifness:0.04,
            length:10
        }
        this.elastico=Constraint.create(op);
        World.add(world, this.elastico);
    }
    //método que libera o corpo
    soltar(){
        this.elastico.bodyA = null;
    }
    //método que mostra o elástico do estilingue

    exibir(){
        
        if(this.elastico.bodyA){
            var pontoA = this.elastico.bodyA.position;
            var pontoB = this.elastico.pointB;
            line(pontoA.x, pontoA.y, pontoB.x, pontoB.y);
        }
    }
}