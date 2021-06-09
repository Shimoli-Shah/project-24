class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the stone ball
	var options = {
		'density':12,
		'friction': 0.9,
		'restitution':0.8
	  };
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(this.x, this.y, this.height, this.width, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the ellipse here to display the stone ball
rectMode(CENTER)
rect(0,0,this.width,this.height)
			pop()
	}}