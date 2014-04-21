var context;


																		function MovingObject(conf: {maxSpeed:number;gravity?:number;fritction?:number}) {
																			this.maxSpeed = conf.maxSpeed;
																			this.gravity = conf.gravity || 0;
																			this.friction = conf.friction || 0.1;
																		}

																		// Won't even compile => 'gravity' is not a number
																		var mo = new MovingObject({
																			maxSpeed: 10,
																			gravity: 'heavy'
																		                                  });



