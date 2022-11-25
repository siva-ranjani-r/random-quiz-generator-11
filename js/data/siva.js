function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem111(){
	var inputData = [{
		'speed':80,
		'time': 10,
		'distance': 4
		},
		{
		'speed':50,
		'time': 60,
		'distance': 5
		},
		{
		'speed':70,
		'time': 60,
		'distance': 2
		},
		{
		'speed':40,
		'time': 20,
		'distance': 3
		},
		],
		

		randomIndex = getRandomNumber(inputData.length),
		speed= inputData[randomIndex]['speed'],
		time = inputData[randomIndex]['time'],
		distance = inputData[randomIndex]['distance'],
		question = {};
		
	
	distance=speed1*time;
	speed2=distance/time2;
	increased_speed=speed2-speed1;

	question = {
		'type': 'single',
		'id': '111',
		'question': 'A car covers its journey at the speed of'+ 80+' km/hour in' + 10 +' hours. If the same distance is to be covered in'+ 4 + 
					'hours, by how much the speed of car will have to increase?',
		'options': {
			'A': increased_speed,
			'B': increased_speed - parseInt(Math.random()*10),
			'C': increased_speed + parseInt(Math.random()*10),
			'D': increased_speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '111'
	}
	
	return question;
	
}

function problem2(){
	
}

function problem3(){
	
}