var screen = Object.create(Screen).init("can","#000000");
var Galaxy = [];
var Nstars = 1000;

for(var i=0;i<Nstars;i++){
    Galaxy.push(Object.create(Star).init(Math.random()*(screen.width),Math.random()*(screen.height), 1+Math.random()*2, 1+Math.random()*5, "#FFFFFF"));
}


setInterval(function(){
    screen.clear();
    for(var i=0;i<Nstars;i++){
        Galaxy[i].draw(screen.contex);
        Galaxy[i].move(screen);
        if( ( (Galaxy[i].x>screen.height)&&(Galaxy[i].x>screen.width) ) || ( (Galaxy[i].x<0)&&(Galaxy[i].x<0) ) ){
            Galaxy[i].x=30+Math.random()*(screen.width-30);
            Galaxy[i].y=20+Math.random()*(screen.height-20);
            Galaxy[i].r=1;
        }
    }


},1000/60);
