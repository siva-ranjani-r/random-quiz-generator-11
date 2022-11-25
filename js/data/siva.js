function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem111(){
	var inputData = [{
		'speed1':80,
		'time': 10,
		'time2': 4
		},
		{
		'speed1':50,
		'time': 60,
		'time2': 5
		},
		{
		'speed1':70,
		'time': 60,
		'time2': 2
		},
		{
		'speed1':40,
		'time': 20,
		'time2': 3
		}],
		randomIndex = getRandomNumber(inputData.length),
		speed1= inputData[randomIndex]['speed1'],
		time = inputData[randomIndex]['time'],
		time2 = inputData[randomIndex]['time2'],
		distance,
		speed2,
		increased_speed,
		question = {};
		
	
	distance=speed1*time;
	speed2=distance/time2;
	increased_speed=speed2-speed1;

	question = {
		'type': 'single',
		'id': 111,
		'question': 'A car covers its journey at the speed of' + speed1 + ' km/hour in' + time +' hours. If the same distance is to be covered in'
						+ time2 + 'hours, by how much the speed of car will have to increase?',
		'options': {
			'A': increased_speed,
			'B': increased_speed - parseInt(Math.random()*10),
			'C': increased_speed + parseInt(Math.random()*10),
			'D': increased_speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': 111
	}
	
	return question;
	
}

function problem2(){
	
}

function problem3(){
	
}