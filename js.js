var canvas = document.getElementById('cnv');
var ctx = canvas.getContext('2d');
var myColor = 'black';
var size = '1';
  var itFirst = true;

document.getElementById('color').oninput = function(){
	myColor = this.value;
}
document.getElementById('size').oninput = function(){
	size = this.value;
}


	
canvas.onmousedown = function(event){
	canvas.onmousemove = function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		ctx.lineTo(x,y);
		ctx.strokeStyle = myColor;
		ctx.lineCap = "round";
		ctx.lineWidth = 5;
		
		ctx.stroke();



	}
	canvas.onmouseup = function(){
		canvas.onmousemove = ctx.beginPath();

	}


}



document.getElementById('clear').addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, false);






document.getElementById('small').addEventListener('click', function() {
       canvas.onmousedown = function(event){
	canvas.onmousemove = function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		ctx.lineTo(x,y);
		ctx.strokeStyle = myColor;
		ctx.lineCap = "round";
		ctx.lineWidth = 5;
		
		ctx.stroke();



	}
	canvas.onmouseup = function(){
		canvas.onmousemove = ctx.beginPath();

	}


}

      }, );

document.getElementById('normal').addEventListener('click', function() {
       canvas.onmousedown = function(event){
	canvas.onmousemove = function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		ctx.lineTo(x,y);
		ctx.strokeStyle = myColor;
		ctx.lineCap = "round";
		ctx.lineWidth = 10;
		
		ctx.stroke();



	}
	canvas.onmouseup = function(){
		canvas.onmousemove = ctx.beginPath();

	}


}

      }, );
document.getElementById('large').addEventListener('click', function() {
       canvas.onmousedown = function(event){
	canvas.onmousemove = function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		ctx.lineTo(x,y);
		ctx.strokeStyle = myColor;
		ctx.lineCap = "round";
		ctx.lineWidth = 20;
		
		ctx.stroke();



	}
	canvas.onmouseup = function(){
		canvas.onmousemove = ctx.beginPath();

	}


}

      },);

    /// Circle ____________________________________________


document.getElementById('circle').addEventListener('click', function() {
       canvas.onmousedown = function(event){

		var x = event.offsetX;
		var y = event.offsetY;
	ctx.beginPath();
ctx.arc(x,y,size,0,2*Math.PI);
ctx.stroke();


		ctx.strokeStyle = myColor;
	
		ctx.lineWidth = 1;
		
	



	}
	canvas.onmouseup = function(){
		canvas.onmousemove = null;

	}



      },);


    /// Line ____________________________________________

document.getElementById('line').addEventListener('click', function(event) {
     canvas.onmousedown = function(event){
     

   	   if(line == "line" && e.which == 1)
        {
            line(e.pageX - this.offsetLeft,
                        e.pageY - this.offsetTop);
        }
	

	

			var x = event.offsetX;
		var y = event.offsetY;
 
   if(itFirst == true)
        {
            ctx.beginPath();
            ctx.moveTo(x,y);
            itFirst = false;
        }
        else
        {
            ctx.lineTo(x,y);
            itFirst = true;      
            ctx.lineWidth = size;
            ctx.strokeStyle = myColor;
            ctx.stroke();
        }
 

        //stroke
        canvas.onmouseup = function(){
        			var x = event.offsetX;
		var y = event.offsetY;
		canvas.onmousemove = ctx.stroke();;
    

}

}

    


      },);





    /// KvadraT ____________________________________________


document.getElementById('kwa').addEventListener('click', function() {
       canvas.onmousedown = function(event){
	
		var x = event.offsetX;
		var y = event.offsetY;
ctx.strokeRect(x,y,size,size);


		ctx.strokeStyle = myColor;
	
		ctx.lineWidth = 1;
		
	



	}
	canvas.onmouseup = function(){
		canvas.onmousemove = null;

	}



      },);





  /// TEXT ____________________________________________


document.getElementById('text').addEventListener('click', function(event) {
     canvas.onmousedown = function(event){

        if(text == "text" && e.which == 1)
        {
            text(e.pageX - this.offsetLeft,
                        e.pageY - this.offsetTop);
        }
	
		var x = event.offsetX;
		var y = event.offsetY;
 		ctx.beginPath();
        var text = prompt("Пиши не стидайся","");
 
        var FontSize = font.value;
      	var Size = size +"px";
        ctx.font = Size +" "+ FontSize;
        ctx.fillText(text,x,y);

        //stroke
            ctx.stroke();

}


    
 
	



      },);
  /// END--TEXT ____________________________________________


