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
		'bijoy': 2,
		'chandru': 60
		},
		{
		'average':30,
		'bijoy': 5,
		'chandru': 120
		},
		{
		'average':35,
		'bijoy': 4,
		'chandru': 80
		},
		{
		'average':60,
		'bijoy': 8,
		'chandru': 100
		}],
		randomIndex = getRandomNumber(inputData.length),
		average = inputData[randomIndex]['average'],
		bijoy = inputData[randomIndex]['bijoy'],
		chandru = inputData[randomIndex]['chandru'],
		x,
		new_man,
		question = {};
	


	x=average*bijoy;
	new_man=chandru-x;

	question = {
		'type': 'single',
		'id': '117',
		'question':'The average chandru of'+average+' men is bijoy by'+bijoy+'kg when one of them whose chandru is'+chandru+ 
					'kg is replaced by a new man. What is the chandru of the new man?',
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
function problem1110(){
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
		'id': '1110', 
		'question':'Mohan gets a salary of Rs.'+ first + ', Rs.' + second + ', Rs.' + third + ', Rs.' + four + ' and Rs.'+ five + 'for'+ six + 
		            'months. How much salary he must have in the sixth month so that he gets an average of Rs.' + month + '?',
		'options': {
			'A': group + parseFloat(Math.random()*10),
			'B': group + parseInt(Math.random()*10),
			'C': group + parseInt(Math.random()*10),
			'D': group
		},
		'answer': 'D',
		'author-id': '1110'
	}
	
	return question;
	
}
function problem1111(){
	var inputData = [{
		'rate':15
		},
		{
		'rate':30
		},
		{
		'rate':95
		},
		{
		'rate':65
		}],
		randomIndex = getRandomNumber(inputData.length),
		rate = inputData[randomIndex]['rate'],
		change,
		question = {};
		
	
	
	change=[rate/(100-rate)*100]

	question = {
		'type': 'single',
		'id': '1111',
		'question': 'The price of rice falls by' + rate +
					'% by what percentage a person can increase the consumption of rice so that his overall budget does not change',
		'options': {
			'A': change,
			'B': change + parseInt(Math.random()*10),
			'C': change + parseFloat(Math.random()*10),
			'D': change + parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '1111'
	}
	
	return question;
	
}
function problem1112(){
	var inputData = [{
		'population':50000,
		'rate1': 35,
		'rate2': 25,
		'rate3':40
		},
		{
		'population':80000,
		'rate1': 65,
		'rate2': 45,
		'rate3':30
		},
		{
		'population':135000,
		'rate1': 200,
		'rate2': 100,
		'rate3':60
		},
		{
		'population':30000,
		'rate1': 15,
		'rate2': 20,
		'rate3': 110
		}],
		randomIndex = getRandomNumber(inputData.length),
		population = inputData[randomIndex]['population'],
		rate1 = inputData[randomIndex]['rate1'],
		rate2 = inputData[randomIndex]['rate2'],
		rate3 = inputData[randomIndex]['rate3'],
		end,
		question = {};
	

	end =(population*[1+rate1/100]*[1-rate2/100]*[1+rate3/100]);


	question = {
		'type': 'single',
		'id': '1112',
		'question': 'A town has population of' + population + 'in 1988. In one year i.e. by 1989 it increased by' + rate1 +
					'. Next year i.e. in 1990, it bijoy by'+ rate2 + '. The next year in 1991 there was an increase of' + rate3 +
					'. What is the population at end of 1991?',
		'options': {
			'A': end - parseFloat(Math.random()*10),
			'B': end - parseInt(Math.random()*10),
			'C': end,
			'D': end + parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '1112'
	}
	
	return question;
	
}
function problem1113(){
	var inputData = [{
		'Ajay':1000,
		'bijoy': 2200,
		'chandru': 6200
		},
		{
		'Ajay':3000,
		'bijoy': 5500,
		'chandru': 12000
		},
		{
		'Ajay':35000,
		'bijoy': 45000,
		'chandru': 80000
		},
		{
		'Ajay':60000,
		'bijoy': 80000,
		'chandru': 71000
		}],
		randomIndex = getRandomNumber(inputData.length),
		Ajay = inputData[randomIndex]['Ajay'],
		bijoy = inputData[randomIndex]['bijoy'],
		chandru = inputData[randomIndex]['chandru'],
		percentage,
		question = {};

	election=Ajay+bijoy+chandru;
	percentage=(Ajay/election)*100;

	question = {
		'type': 'single',
		'id': '1113',
		'question':'Three candidates, Ajay, Bijoy & Chandu contested an election and received' 
					+ Ajay + ','+ bijoy + 'and' + chandru + 'votes respectively. What percent of the total votes did get?',
		'options': {
			'A': percentage - parseFloat(Math.random()*10),
			'B': percentage - parseInt(Math.random()*10),
			'C': percentage + parseInt(Math.random()*10),
			'D': percentage
		},
		'answer': 'D',
		'author-id': '1113'
	}
	
	return question;
	
}
function problem1114(){
	var inputData = [{
		'group_boy':30,
		'boys_years': 60,
		'boys_leave': 19,
		'new_boy': 15.8
		},
		{
		'group_boy': 60,
		'boys_years': 40,
		'boys_leave': 12,
		'new_boy': 30.4
		},
		{
		'group_boy': 80,
		'boys_years': 23,
		'boys_leave': 12,
		'new_boy':20.7
		},
		{
		'group_boy':30,
		'boys_years': 36,
		'boys_leave': 29,
		'new_boy': 15.8
		}],
		randomIndex = getRandomNumber(inputData.length),
		group_boy = inputData[randomIndex]['group_boy'],
		boys_years = inputData[randomIndex]['boys_years'],
		boys_leave = inputData[randomIndex]['boys_leave'],
		new_boy = inputData[randomIndex]['new_boy'],
		age,
		group,
		question = {};
	

	age=group_boy*boys_years;
	group=(new_boy*group_boy)-age+boys_leave;


	question = {
		'type': 'single',
		'id': '1114',
		'question': 'Average age of a group of' + group_boy + 'boys is' + boys_years + 'years. A boy of age' + boys_leave + 
					'leaves the group and a new boy joins the group. If the new average age of the group is' + new_boy + 
					'years, find the age of the new boy.',
		'options': {
			'A': group - parseFloat(Math.random()*10),
			'B': group - parseInt(Math.random()*10),
			'C': group,
			'D': group + parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '1114'
	}
	
	return question;
	
}
function problem1115(){
	var inputData = [{
		'electricity_bill':25,
		'deducted': 130
		},
		{
		'electricity_bill':30,
		'deducted': 200
		},
		{
		'electricity_bill':40,
		'deducted': 150
		},
		{
		'electricity_bill':20,
		'deducted': 100
		}],
		randomIndex = getRandomNumber(inputData.length),
		electricity_bill= inputData[randomIndex]['electricity_bill'],
		deducted = inputData[randomIndex]['deducted'],
		bill,
		question = {};
	
	
	to_pay=deducted-electricity_bill;
	bill=(deducted/to_pay)*100;

	question = {
		'type': 'single',
		'id': '1115',
		'question': 'If' + electricity_bill + '% of an electricity bill is deducted then rs' + deducted + 'is still to be paid .How much was the original bill',
		'options': {
			'A': bill,
			'B': bill + parseInt(Math.random()*10),
			'C': bill + parseInt(Math.random()*10),
			'D': bill - parseFloat(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '1115'
	}
	
	return question;
	
}
function problem1116(){
	var inputData = [{
		'typist':80,
		'pages': 1150,
		'hours': 4
		},
		{
		'typist':50,
		'pages': 400,
		'hours': 5
		},
		{
		'typist':70,
		'pages': 750,
		'hours': 2
		},
		{
		'typist':10,
		'pages': 600,
		'hours': 8
		}],
		randomIndex = getRandomNumber(inputData.length),
		typist= inputData[randomIndex]['typist'],
		pages = inputData[randomIndex]['pages'],
		hours = inputData[randomIndex]['hours'],
		count,
		total,
		question = {};
	
	
	count=pages/typist;
	total=count/hours;

	question = {
		'type': 'single',
		'id': '1116',
		'question': + typist + 'typists can type' + pages + 'pages in' + hours + 
					'hours.Find the average number of pages typed by each typist in an hour.',
		'options': {
			'A': total - parseInt(Math.random()*10),
			'B': total - parseInt(Math.random()*10),
			'C': total + parseInt(Math.random()*10),
			'D': total
		},
		'answer': 'D',
		'author-id': '1116'
	}
	
	return question;
	
}
function problem1117(){
	var inputData = [{
		'village_increased':656000,
		'decade': 234000
		},
		{
		'village_increased':654000,
		'decade': 543000
		},
		{
		'village_increased':785000,
		'decade': 258000
		},
		{
		'village_increased':175000,
		'decade': 262500
		}],
		randomIndex = getRandomNumber(inputData.length),
		village_increased = inputData[randomIndex]['village_increased'],
		decade = inputData[randomIndex]['decade'],
		percentage_increase,
		Increase_percentage,
		required_average,
		question = {};
	
	
	percentage_increase=(village_increased-decade);
	Increase_percentage=(percentage_increase/village_increased)*100;
	required_average=(Increase_percentage/10);


	question = {
		'type': 'single',
		'id': '1117',
		'question': 'The population of a town increased from' + village_increased + 'to' + decade + 
					'in a decade. The average percent increased of population per year is:',
		'options': {
			'A': required_average - parseInt(Math.random()*10),
			'B': required_average - parseInt(Math.random()*10),
			'C': required_average + parseInt(Math.random()*10),
			'D': required_average
		},
		'answer': 'D',
		'author-id': '1117'
	}
	
	return question;
	
}
function problem1118(){
	var inputData = [{
		'parallel_line':34,
		'same_direction': 67,
		'train_slower':33
		},
		{
		'parallel_line':65,
		'same_direction': 50,
		'train_slower':3
		},
		{
		'parallel_line':72,
		'same_direction': 40,
		'train_slower': 35
		},
		{
		'parallel_line':46,
		'same_direction': 36,
		'train_slower':36
		}],
		randomIndex = getRandomNumber(inputData.length),
		parallel_line = inputData[randomIndex]['parallel_line'],
		same_direction = inputData[randomIndex]['same_direction'],
		train_slower = inputData[randomIndex]['train_slower'],
		train,
		meter_sec,
		x,
		length,
		question = {};
	
	train=parallel_line-same_direction;
	meter_sec=[train*(5/18)];
	x=meter_sec*train_slower;
	length=x/2;
	

	question = {
		'type': 'single',
		'id': '1118',
		'question': 'Two trains of equal lengths are running on parallel lines in the same direction at the rate of' + parallel_line + 'km/hr and' 
					+ same_direction + 'km/hr. The faster train passes the slower train in' + train_slower + 'seconds. What is the length of the each trains ?',
		'options': {
			'A': length - parseFloat(Math.random()*10),
			'B': length + parseFloat(Math.random()*10),
			'C': length,
			'D': length - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '1118'
	}
	
	return question;
	
}
function problem1119(){
	var inputData = [{
		'downstream_distance':20,
		'downstream_time': 5,
		'upstream_time': 8
		},
		{
		'downstream_distance': 40,
		'downstream_time': 30,
		'upstream_time': 5
		},
		{
		'downstream_distance': 50,
		'downstream_time': 40,
		'upstream_time': 2
		},
		{
		'downstream_distance':16,
		'downstream_time': 2,
		'upstream_time': 4
		}],
		randomIndex = getRandomNumber(inputData.length),
		downstream_distance = inputData[randomIndex]['downstream_distance'],
		downstream_time = inputData[randomIndex]['downstream_time'],
		upstream_time = inputData[randomIndex]['upstream_time'],
		speed,
		x,
		stream_speed,
		question = {};
		
	
	speed=downstream_distance/downstream_time;
	x=downstream_distance/upstream_time;
	stream_speed=1/2*(speed+x);

	question = {
		'type': 'single',
		'id': '119',
		'question': 'A boat running downstream covers a distance of' + downstream_distance + 'km in' + downstream_time + 'hours while for covering the same distance upstream, it takes'
					+ upstream_time + 'hours. What is the speed of the boat in still water?',
		'options': {
			'A': stream_speed,
			'B': stream_speed - parseFloat(Math.random()*10),
			'C': stream_speed + parseInt(Math.random()*10),
			'D': stream_speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '119'
	}
	
	return question;
	
}
function problem1120(){
	var inputData = [{
		'buys':50,
		'sell': 35,
		'after_buying': 16,
		'after_selling':90
		},
		{
		'buys':80,
		'sell': 65,
		'after_buying': 12,
		'after_selling':30
		},
		{
		'buys':13,
		'sell': 40,
		'after_buying': 10,
		'after_selling':80
		},
		{
		'buys':15,
		'sell': 20,
		'after_buying': 30,
		'after_selling': 40
		}],
		randomIndex = getRandomNumber(inputData.length),
		buys = inputData[randomIndex]['buys'],
		sell = inputData[randomIndex]['sell'],
		after_buying = inputData[randomIndex]['after_buying'],
		after_selling = inputData[randomIndex]['after_selling'],
		cp,
		sp,
		profit,
		profit_percentage,
		question = {};
	

	cp=after_buying+buys;
	sp=after_selling+sell;
	profit=sp-cp;
	profit_percentage=(profit/cp)*100;


	question = {
		'type': 'single',
		'id': '1120',
		'question': 'A person buys a horse for' + buys + 'pounds. after one year, he sells it for' + sell + 
					'pounds. after one year, again he buys the same horse at' + after_buying + 
					'pounds and sells it for' + after_selling + 
					'pounds. what is the overall profit percent for that person over both the transactions?',
		'options': {
			'A': profit_percentage - parseInt(Math.random()*10),
			'B': profit_percentage - parseFloat(Math.random()*10),
			'C': profit_percentage,
			'D': profit_percentage + parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '1120'
	}
	
	return question;
	
}


	