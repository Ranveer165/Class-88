var canvas= new fabric.Canvas('mycanvas');
block_img_width=30;
block_img_height=30;
player_X=10;
player_Y=10;

var player_object="";
var block_object="";


function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_Y,
        left:player_X

});
    
    canvas.add(player_object);
});
};  
function new_img(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
        top:player_Y,
        left:player_X

});
    
    canvas.add(block_object);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
        console.log("p and shift are pressed together");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;

    }

if(e.shiftKey==true && keypressed=='77'){
        console.log("m and shift are pressed together");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
        
    }
    if(keypressed=='38'){
        up();
        console.log("up")
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='37'){
        left();
        console.log("left")
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    if(keypressed=='87'){
        new_img('wall.jpg');
        console.log("w");
    }
    if(keypressed=='71'){
        new_img('ground.png');
        console.log("g");
    }
    if(keypressed=='76'){
        new_img('light_green.png');
        console.log("l");
    }
    if(keypressed=='84'){
        new_img('trunk.jpg');
        console.log("t");
    }
    if(keypressed=='82'){
        new_img('roof.jpg');
        console.log("r");
    }
    if(keypressed=='89'){
        new_img('yellow_wall.png');
        console.log("y");
    }
    if(keypressed=='68'){
        new_img('dark_green.png');
        console.log("d");
    }
    if(keypressed=='67'){
        new_img('cloud.jpg');
        console.log("c");
    }
    if(keypressed=='85'){
        new_img('unique.png');
        console.log("u");
    }
}



function up(){
    if(player_Y>=0){
        player_Y=player_Y-block_img_height;
        console.log("block image height="+block_img_height);
        console.log("when up arrow is pressed x="+player_X+"y="+player_Y)
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_Y<=500){
        player_Y=player_Y+block_img_height;
        console.log("block image height="+block_img_height);
        console.log("when down arrow is pressed x="+player_X+"y="+player_Y)
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_X>=0){
        player_X=player_X-block_img_width;
        console.log("block image width="+block_img_width);
        console.log("when left arrow is pressed x="+player_X+"y="+player_Y)
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_X<=850){
        player_X=player_X+block_img_width;
        console.log("block image width="+block_img_width);
        console.log("when right arrow is pressed x="+player_X+"y="+player_Y)
        canvas.remove(player_object);
        player_update();
    }
}