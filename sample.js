$(document).ready(function(){
	var canvas = $('#canvas')[0];
	var context = canvas.getContext('2d');
	var width = $('#canvas').width();
	var height = $('#canvas').height();	
	var cell_width = 10;
	var dir;
	var snake_food;
	var score;
	var snake_array;

	// console.log(width);
	// console.log(height);
 
	function bg_canvas_color(){
		context.fillStyle = "black";
		context.fillRect(0, 0, width, height); 
	}
 
	function snake_color(x, y){
		context.fillStyle = "red";
		context.fillRect(x * cell_width, y * cell_width, cell_width, cell_width);
	}

	function food_color(x, y){
		context.fillStyle = "white";
		context.fillRect(x * cell_width, y * cell_width, cell_width, cell_width);
	}
 
	function collision_with_itself(x, y, array){
		for(var i = 0; i < array.length; i++){
			if(array[i].x == x && array[i].y == y){
				return 1;
			}
		}
		return 0;
	}

	function collision_wiht_border(pop_x,width,pop_y,height){
		
		if(pop_x == -1 || pop_x == width / cell_width || pop_y == -1 || pop_y ==height / cell_width+0.5)
			return 1;
	}

 	function init_snake(){
		var snake_len = 3;
		snake_array = [];
		for(var i = 0; i < snake_len; i++){
			snake_array.push({x: 35, y: 35});
		}
	}
 
	function init_food(){
		snake_food = {
			x: Math.round(Math.random() * (width - cell_width) / cell_width),
			y: Math.round(Math.random() * (height - cell_width) / cell_width)
		};
	}
 
	function main(){
 
		bg_canvas_color();
 
		var pop_x = snake_array[0].x;
		var pop_y = snake_array[0].y;
 
		switch(dir){
			case "right":
				pop_x++;
				break;
			case "left":
				pop_x--;
				break;
			case "down":
				pop_y++;
				break;
			case "up":
				pop_y--;
				break;
		}
 
 
		if(collision_wiht_border(pop_x,width,pop_y,height) || collision_with_itself(pop_x, pop_y, snake_array)){
			alert("Your score : "+score+ "\nBetter luck next time!!");
			
			location.replace("index.html?"+score+"");
		}
 
		if(pop_x == snake_food.x && pop_y == snake_food.y)
		{
			var add_snake_len = {x: pop_x, y: pop_y};
			score += 5;
			init_food();
		}
		else
		{
			var add_snake_len = snake_array.pop();
			add_snake_len.x = pop_x;
			add_snake_len.y = pop_y;
 		}
 
		snake_array.unshift(add_snake_len);
 
		for (var i = 0; i < snake_array.length; i++){
			var c = snake_array[i];
			snake_color(c.x, c.y);
		}
 
		food_color(snake_food.x, snake_food.y);
 
		var score_text = "Score: " + score;
	}
 
	
 
	$(document).keydown(function(e){
		var k = e.which;
		if((k == "40" || k=='s') && dir != "up"){
			dir = "down";
		}
		else if((k == "39" || k=='d') && dir != "left"){
			dir = "right";
		}
		else if((k == "38" || k=='w') && dir != "down"){
			dir = "up";
		}
		else if((k == "37" || k=='a') && dir != "right"){
			dir = "left";
		}
	});
 
	start();
 
	function start(){
		dir = "left";
		init_snake();
		init_food();
		score = 0;
		game_start = setInterval(main, 100);
		
	}
});