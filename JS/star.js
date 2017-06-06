var Star = {
    x: 0,
    y: 0,
    r: 0,
    vel: 0,
    color: "#FFFFFF",
    init: function(x,y,r,vel,color){
        this.x=x;
        this.y=y;
        this.r=r;
        this.vel=vel;
        this.color=color;
        return this;
    },
    draw: function(contex){
        contex.beginPath();
        contex.arc(this.x,this.y,this.r,0,2*Math.PI,false);
        contex.fillStyle = this.color;
        contex.fill();
    },
    move: function(contex){
        var xc = contex.width/2;
        var yc = contex.height/2;

        var dx = this.x-xc;
        var dy = this.y-yc;

        var ang = Math.atan(dy/dx);

        if((this.x>xc)&&(this.y<=yc)){
            ang = 0+ang;
        }else if((this.x<xc)&&(this.y<=yc)){
            ang = (Math.PI)+ang;
        }else if((this.x<xc)&&(this.y>yc)){
            ang = (Math.PI)+ang;
        }else if((this.x>=xc)&&(this.y>yc)){
            ang = (2*Math.PI)+ang;
        }

        var d = this.distance(this.x,this.y,xc,yc);

        this.x = (contex.width/2)+((d+this.vel)*Math.cos(ang));
        this.y = (contex.height/2)+((d+this.vel)*Math.sin(ang));
        this.r+=this.vel/100;

    },
    distance: function(x1,y1,x2,y2){
        return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
    }
};
