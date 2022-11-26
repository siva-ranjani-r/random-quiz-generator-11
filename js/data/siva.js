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
		'id': '111',
		'question': 'A car covers its journey at the speed of' + speed1 + ' km/hour in' + time +' hours. If the same distance is to be covered in'
						+ time2 + 'hours, by how much the speed of car will have to increase?',
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
function problem112(){
	var inputData = [{
		'upstream':25,
		'downstream': 55
		},
		{
		'upstream':76,
		'downstream': 89
		},
		{
		'upstream':90,
		'downstream': 50
		},
		{
		'upstream':35,
		'downstream': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		upstream= inputData[randomIndex]['upstream'],
		downstream = inputData[randomIndex]['downstream'],
		water,
		question = {};
		
	
	water=(upstream+downstream)/2;

	question = {
		'type': 'single',
		'id': '112',
		'question': 'A man can row upstream at' + upstream + ' kmph and downstream at' + downstream + 'kmph, and then find the speed of the man in still water?' ,
		'options': {
			'A': water + parseInt(Math.random()*10),
			'B': water + parseInt(Math.random()*10),
			'C': water,
			'D': water - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '112'
	}
	
	return question;
	
}
function problem113(){
	var inputData = [{
		'speed':75,
		'time': 30
		},
		{
		'speed':105,
		'time': 20
		},
		{
		'speed':95,
		'time': 25
		},
		{
		'speed':85,
		'time': 10
		}],
		randomIndex = getRandomNumber(inputData.length),
		speed = inputData[randomIndex]['speed'],
		time = inputData[randomIndex]['time'],
		speed1,
		distance,
		question = {};
		
		
	speed1=speed*5/18;
	distance=speed1*time;

	question = {
		'type': 'single',
		'id': '113',
		'question': 'What distance will be covered by a bus moving at'+ speed +' kmph in' + time +' seconds?' ,
		'options': {
			'A': distance - parseInt(Math.random()*10),
			'B': distance,
			'C': distance + parseInt(Math.random()*10),
			'D': distance - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '113'
	}
	
	return question;
	
}
function problem114(){
	var inputData = [{
		'percentage':20,
		'oranges': 180
		},
		{
		'percentage':60,
		'oranges': 240
		},
		{
		'percentage':40,
		'oranges': 190
		},
		{
		'percentage':30,
		'oranges': 140
		}],
		randomIndex = getRandomNumber(inputData.length),
		percentage = inputData[randomIndex]['percentage'],
		oranges = inputData[randomIndex]['oranges'],
		fruit,
		seller,
		original,
		question = {};
	
	
	
	fruit=(100-percentage);
	seller=(oranges*100);
	original=seller/fruit;

	question = {
		'type': 'single',
		'id': '114',
		'question': 'A fruit seller had some oranges. He sells' + percentage + 'oranges and still has' + oranges + ' oranges. Originally, he had?' ,
		'options': {
			'A': original - parseFloat(Math.random()*10),
			'B': original - parseInt(Math.random()*10),
			'C': original + parseFloat(Math.random()*10),
			'D': original
		},
		'answer': 'D',
		'author-id': '114'
	}
	
	return question;
	
}
function problem115(){
	var inputData = [{
		'sellprofit':680,
		'costprofit': 400
		},
		{
		'sellprofit':875,
		'costprofit': 1240
		},
		{
		'sellprofit':675,
		'costprofit': 900
		},
		{
		'sellprofit':975,
		'costprofit': 1500
		}],
		randomIndex = getRandomNumber(inputData.length),
		sellprofit = inputData[randomIndex]['sellprofit'],
		costprofit = inputData[randomIndex]['costprofit'],
		profit,
		profit_percentage,
		question = {};
	
	profit=sellprofit-costprofit;
	profit_percentage=(profit/costprofit)*100;

	question = {
		'type': 'single',
		'id': '115',
		'question':'An article is bought for Rs.' + sellprofit + 'and sold for Rs.' + costprofit + '. What is the gain percentage?',
		'options': {
			'A': profit_percentage - parseFloat(Math.random()*10),
			'B': profit_percentage + parseInt(Math.random()*10),
			'C': profit_percentage,
			'D': profit_percentage + parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '115'
	}
	
	return question;
	
}
function problem116(){
	var inputData = [{
		'sellprofit':8,
		'costprofit': 30,
		'years':3
		},
		{
		'sellprofit':6,
		'costprofit': 50,
		'years':3
		},
		{
		'sellprofit':7,
		'costprofit': 40,
		'years':3
		},
		{
		'sellprofit':5,
		'costprofit': 80,
		'years':3
		}],
		randomIndex = getRandomNumber(inputData.length),
		children = inputData[randomIndex]['children'],
		age = inputData[randomIndex]['age'],
		years = inputData[randomIndex]['years'],
		interval,
		x1,
		young,
		profit_percentage,
		question = {};
	
	interval=(age*age*age)+age;
	x1=years-interval;
	young=x1/children;

	question = {
		'type': 'single',
		'id': '116',
		'question':'The sum of ages of'+ children + 'children born at the intervals of' + years + 'years each is'+ age + 'years. What is the age of the youngest child?',
		'options': {
			'A': young - parseFloat(Math.random()*10),
			'B': young,
			'C': young + parseFloat(Math.random()*10),
			'D': young - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '116'
	}
	
	return question;
	
}
function problem117(){
	var inputData = [{
		'average':10,
		'decreased': 2,
		'weight': 60
		},
		{
		'average':30,
		'decreased': 5,
		'weight': 120
		},
		{
		'average':35,
		'decreased': 4,
		'weight': 80
		},
		{
		'average':60,
		'decreased': 8,
		'weight': 100
		}],
		randomIndex = getRandomNumber(inputData.length),
		average = inputData[randomIndex]['average'],
		decreased = inputData[randomIndex]['decreased'],
		weight = inputData[randomIndex]['weight'],
		x,
		new_man,
		question = {};
	


	x=average*decreased;
	new_man=weight-x;

	question = {
		'type': 'single',
		'id': '117',
		'question':'The average weight of'+average+' men is decreased by'+decreased+'kg when one of them whose weight is'+weight+ 
					'kg is replaced by a new man. What is the weight of the new man?',
		'options': {
			'A': new_man,
			'B': new_man - parseInt(Math.random()*10),
			'C': new_man + parseFloat(Math.random()*10),
			'D': new_man - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '117'
	}
	
	return question;
	
}
function problem118(){
	var inputData = [{
		'average':50,
		'years': 35,
		'teacher': 6,
		'years_teacher':9
		},
		{
		'average':80,
		'years': 65,
		'teacher': 12,
		'years_teacher':3
		},
		{
		'average':135,
		'years': 40,
		'teacher': 10,
		'years_teacher':6
		},
		{
		'average':30,
		'years': 15,
		'teacher': 2,
		'years_teacher': 1
		}],
		randomIndex = getRandomNumber(inputData.length),
		average = inputData[randomIndex]['average'],
		years = inputData[randomIndex]['years'],
		teacher = inputData[randomIndex]['teacher'],
		years_teacher = inputData[randomIndex]['years_teacher'],
		a,
		sum,
		age,
		x,
		includes,
		question = {};
	

	a=average+teacher;
	sum=years+years_teacher;
	age=average*years;
	x=a*sum;
	includes=x-age;


	question = {
		'type': 'single',
		'id': '118',
		'question':'The average age of' + average + 'boys in a class is'+ years + 'years. If we include the age of' + teacher + 
		'teachers, the average age increases by' + years_teacher + ' . What is the sum of ages of the two teachers?',
		'options': {
			'A': includes - parseInt(Math.random()*10),
			'B': includes - parseInt(Math.random()*10),
			'C': includes + parseInt(Math.random()*10),
			'D': includes
		},
		'answer': 'D',
		'author-id': '118'
	}
	
	return question;
	
}
function problem119(){
	var inputData = [{
		'male_count':2,
		'female_count': 2,
		'children_count': 3,
		'male_one': 67,
		'female_two': 35,
		'children': 6
		},
		{
		'male_count': 3,
		'female_count': 4,
		'children_count': 5,
		'male_one': 37,
		'female_two': 60,
		'children': 9
		},
		{
		'male_count': 13,
		'female_count': 4,
		'children_count': 1,
		'male_one': 69,
		'female_two': 45,
		'children': 6
		},
		{
		'male_count': 4,
		'female_count': 15,
		'children_count': 2,
		'male_one': 110,
		'female_two': 34,
		'children': 8
		}],
		randomIndex = getRandomNumber(inputData.length),
		male_count = inputData[randomIndex]['male_count'],
		female_count = inputData[randomIndex]['female_count'],
		children_count = inputData[randomIndex]['children_count'],
		male_one = inputData[randomIndex]['male_one'],
		female_two = inputData[randomIndex]['female_two'],
		children = inputData[randomIndex]['children'],
		group,
		question = {};
	
	
	group=(((male_one*male_count)+(female_two*female_count)+(children*children_count))/(male_count+female_count+children_count));


	question = {
		'type': 'single',
		'id': '119', 
		'question':'A group consists of' + male_count+ 'male,' + female_count + 'female and'+ children_count + 
					'children. The average age of the male is' + male_one +'years, that of the female is' + female_two + 
					'years, and that of the children is' + children + 'years. What is the average age of the group?',
		'options': {
			'A': group - parseFloat(Math.random()*10),
			'B': group,
			'C': group + parseInt(Math.random()*10),
			'D': group + parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '119'
	}
	
	return question;
	
}
function problem119(){
	var inputData = [{
		'first':4586,
		'second': 7896,
		'third': 2458,
		'four': 6253,
		'five': 4863,
		'six': 5,
		'month': 6845
		},
		{
		'first': 6435,
		'second': 6927,
		'third': 6855,
		'four': 7230,
		'five': 6562,
		'six': 5,
		'month':6500 
		},
		{
		'first': 4586,
		'second': 3698,
		'third': 1257,
		'four': 4587,
		'five': 3625,
		'six': 5,
		'month': 4257
		},
		{
		'first': 4265,
		'second': 8563,
		'third': 7536,
		'four': 4963,
		'five': 7532,
		'six': 5,
		'month': 9756
		}],
		randomIndex = getRandomNumber(inputData.length),
		first = inputData[randomIndex]['first'],
		second = inputData[randomIndex]['second'],
		third = inputData[randomIndex]['third'],
		four = inputData[randomIndex]['four'],
		five = inputData[randomIndex]['five'],
		six = inputData[randomIndex]['six'],
		month = inputData[randomIndex]['month'],
		x,
		y,
		group,
		question = {};
	
	
	x=first+second+third+four+five;
	y=six*month;
	group=y-x;


	question = {
		'type': 'single',
		'id': '119', 
		'question':'Mohan gets a salary of Rs.'+ first + ', Rs.' + second + ', Rs.' + third + ', Rs.' + four + ' and Rs.'+ five + 'for'+ six + 
		            'months. How much salary he must have in the sixth month so that he gets an average of Rs.' + month + '?',
		'options': {
			'A': group + parseFloat(Math.random()*10),
			'B': group + parseInt(Math.random()*10),
			'C': group + parseInt(Math.random()*10),
			'D': group
		},
		'answer': 'D',
		'author-id': '119'
	}
	
	return question;
	
}