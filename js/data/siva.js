function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}
function problem1101(){
	var inputData = [{
		'speed1':80,
		'time': 4,
		'time2': 4
		},
		{
		'speed1':40,
		'time': 20,
		'time2': 5
		},
		{
		'speed1':60,
		'time': 10,
		'time2': 2
		},
		{
		'speed1':30,
		'time': 6,
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
		
	speed1= parseInt(speed1);
	time = parseInt(time);
	time2 = parseInt(time2);
	distance=speed1*time;
	speed2=distance/time2;
	increased_speed=speed2-speed1;

	question = {
		'type': 'single',
		'id': '1101',
		'question': 'A car covers its journey at the speed of ' + speed1 + ' km/hour in ' + time +' hours. If the same distance is to be covered in '
						+ time2 + 'hours, by how much the speed of car will have to increase?',
		'options': {
			'A': increased_speed,
			'B': increased_speed - parseInt(Math.random()*10),
			'C': increased_speed + parseInt(Math.random()*10),
			'D': increased_speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1102(){
	var inputData = [{
		'upstream':25,
		'downstream': 5
		},
		{
		'upstream':70,
		'downstream': 8
		},
		{
		'upstream':50,
		'downstream': 20
		},
		{
		'upstream':30,
		'downstream': 3
		}],
		randomIndex = getRandomNumber(inputData.length),
		upstream= inputData[randomIndex]['upstream'],
		downstream = inputData[randomIndex]['downstream'],
		water,
		question = {};
		
	upstream= parseInt(upstream);
	downstream = parseInt(downstream);
	water=(upstream+downstream)/2;

	question = {
		'type': 'single',
		'id': '1102',
		'question': 'A man can row upstream at ' + upstream + ' kmph and downstream at' + downstream + 'kmph, and then find the speed of the man in still water?' ,
		'options': {
			'A': Math.round(water + parseInt(Math.random()*10)),
			'B': Math.round(water + parseInt(Math.random()*10)),
			'C': Math.round(water),
			'D': Math.round(water - parseInt(Math.random()*10))
		},
		'answer': 'C',
		'author-id': '11'
	}
	
	return question;
	
}

function problem1103(){
	var inputData = [{
		'speed':6,
		'time': 3
		},
		{
		'speed':10,
		'time': 2
		},
		{
		'speed':9,
		'time': 6
		},
		{
		'speed':8,
		'time': 10
		}],
		randomIndex = getRandomNumber(inputData.length),
		speed = inputData[randomIndex]['speed'],
		time = inputData[randomIndex]['time'],
		speed1,
		distance,
		question = {};
		
	speed = parseInt(speed);
	time = parseInt(time);	
	speed1=speed*(5/18);
	distance=speed1*time;

	question = {
		'type': 'single',
		'id': '1103',
		'question': 'What distance will be covered by a bus moving at '+ speed +' kmph in ' + time +' seconds?' ,
		'options': {
			'A': Math.round(distance - parseInt(Math.random()*10)),
			'B': Math.round(distance),
			'C': Math.round(distance + parseInt(Math.random()*10)),
			'D': Math.round(distance - parseInt(Math.random()*10))
		},
		'answer': 'B',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1104(){
	var inputData = [{
		'percentage':40,
		'oranges': 20
		},
		{
		'percentage':60,
		'oranges': 40
		},
		{
		'percentage':40,
		'oranges': 10
		},
		{
		'percentage':30,
		'oranges': 40
		}],
		randomIndex = getRandomNumber(inputData.length),
		percentage = inputData[randomIndex]['percentage'],
		oranges = inputData[randomIndex]['oranges'],
		fruit,
		seller,
		original,
		question = {};
	
	
	percentage = parseInt(percentage);
	oranges = parseInt(oranges);
	fruit=(100-percentage);
	seller=(oranges*100);
	original=seller/fruit;

	question = {
		'type': 'single',
		'id': '1104',
		'question': 'A fruit seller had some oranges. He sells ' + percentage + ' oranges and still has ' + oranges + ' oranges. Originally, he had?' ,
		'options': {
			'A': Math.round(original - parseInt(Math.random()*10)),
			'B': Math.round(original - parseInt(Math.random()*10)),
			'C': Math.round(original + parseInt(Math.random()*10)),
			'D': Math.round(original)
		},
		'answer': 'D',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1105(){
	var inputData = [{
		'sellprofit':60,
		'costprofit': 10
		},
		{
		'sellprofit':75,
		'costprofit': 40
		},
		{
		'sellprofit':65,
		'costprofit': 30
		},
		{
		'sellprofit':75,
		'costprofit': 50
		}],
		randomIndex = getRandomNumber(inputData.length),
		sellprofit = inputData[randomIndex]['sellprofit'],
		costprofit = inputData[randomIndex]['costprofit'],
		profit,
		profit_percentage,
		question = {};
	
	sellprofit = parseInt(sellprofit);
	costprofit = parseInt(costprofit);
	profit=sellprofit-costprofit;
	profit_percentage=(profit/costprofit)*100;

	question = {
		'type': 'single',
		'id': '1105',
		'question':'An article is bought for Rs.' + sellprofit + ' and sold for Rs.' + costprofit + '. What is the gain percentage?',
		'options': {
			'A': Math.round(profit_percentage - parseInt(Math.random()*10)),
			'B': Math.round(profit_percentage + parseInt(Math.random()*10)),
			'C': Math.round(profit_percentage),
			'D': Math.round(profit_percentage + parseInt(Math.random()*10))
		},
		'answer': 'C',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1106(){
	var inputData = [{
		'children':4,
		'age': 4,
		'years':3
		},
		{
		'children':6,
		'age': 2,
		'years':3
		},
		{
		'children':3,
		'age': 2,
		'years':3
		},
		{
		'children':5,
		'age': 3,
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
		
	children = parseInt(children);
	age = parseInt(age);
	years = parseInt(years);
	interval=(age*age*age)+age;
	x1=years-interval;
	young=x1/children;

	question = {
		'type': 'single',
		'id': '1106',
		'question':'The sum of ages of '+ children + ' children born at the intervals of' + years + 'years each is '+ age + ' years. What is the age of the youngest child?',
		'options': {
			'A': Math.round(young - parseInt(Math.random()*10)),
			'B': Math.round(young),
			'C': Math.round(young + parseFloat(Math.random()*10)),
			'D': Math.round(young - parseInt(Math.random()*10))
		},
		'answer': 'B',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1107(){
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
	

	average = parseInt(average);
	bijoy = parseInt(bijoy);
	chandru = parseInt(chandru);
	x=average*bijoy;
	new_man=chandru-x;

	question = {
		'type': 'single',
		'id': '1107',
		'question':'The average chandru of'+average+' men is bijoy by'+bijoy+'kg when one of them whose chandru is'+chandru+ 
					'kg is replaced by a new man. What is the chandru of the new man?',
		'options': {
			'A': Math.round(new_man),
			'B': Math.round(new_man - parseInt(Math.random()*10)),
			'C': Math.round(new_man + parseInt(Math.random()*10)),
			'D': Math.round(new_man - parseInt(Math.random()*10))
		},
		'answer': 'A',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1108(){
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
	
	average = parseInt(average);
	years = parseInt(years);
	teacher = parseInt(teacher);
	years_teacher = parseInt(years_teacher);
	a=average+teacher;
	sum=years+years_teacher;
	age=average*years;
	x=a*sum;
	includes=x-age;


	question = {
		'type': 'single',
		'id': '1108',
		'question':'The average age of' + average + 'boys in a class is'+ years + 'years. If we include the age of' + teacher + 
		'teachers, the average age increases by' + years_teacher + ' . What is the sum of ages of the two teachers?',
		'options': {
			'A': Math.round(includes - parseInt(Math.random()*10)),
			'B': Math.round(includes - parseInt(Math.random()*10)),
			'C': Math.round(includes + parseInt(Math.random()*10)),
			'D': Math.round(includes)
		},
		'answer': 'D',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1109(){
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
	
	male_count = parseInt(male_count);
	female_count = parseInt(female_count);
	children_count = parseInt(children_count);
	male_one = parseInt(male_one);
	female_two = parseInt(female_two);
	children = parseInt(children);
	group=(((male_one*male_count)+(female_two*female_count)+(children*children_count))/(male_count+female_count+children_count));


	question = {
		'type': 'single',
		'id': '1109', 
		'question':'A group consists of' + male_count+ 'male,' + female_count + 'female and'+ children_count + 
					'children. The average age of the male is' + male_one +'years, that of the female is' + female_two + 
					'years, and that of the children is' + children + 'years. What is the average age of the group?',
		'options': {
			'A': Math.round(group - parseInt(Math.random()*10)),
			'B': Math.round(group),
			'C': Math.round(group + parseInt(Math.random()*10)),
			'D': Math.round(group + parseInt(Math.random()*10))
		},
		'answer': 'B',
		'author-id': '11'
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
	
	first = parseInt(first);
	second = parseInt(second);
	third = parseInt(third);
	four = parseInt(four);
	five = parseInt(five);
	six = parseInt(six);
	month = parseInt(month);
	x=first+second+third+four+five;
	y=six*month;
	group=y-x;


	question = {
		'type': 'single',
		'id': '1110', 
		'question':'Mohan gets a salary of Rs.'+ first + ', Rs.' + second + ', Rs.' + third + ', Rs.' + four + ' and Rs.'+ five + 'for'+ six + 
		            'months. How much salary he must have in the sixth month so that he gets an average of Rs.' + month + '?',
		'options': {
			'A': Math.round(group - parseInt(Math.random()*10)),
			'B': Math.round(group + parseInt(Math.random()*10)),
			'C': Math.round(group + parseInt(Math.random()*10)),
			'D': Math.round(group)
		},
		'answer': 'D',
		'author-id': '11'
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
		
	
	rate = parseInt(rate);
	change=(rate/(100-rate)*100);

	question = {
		'type': 'single',
		'id': '1111',
		'question': 'The price of rice falls by' + rate +
					'% by what percentage a person can increase the consumption of rice so that his overall budget does not change',
		'options': {
			'A': Math.round(change),
			'B': Math.round(change + parseInt(Math.random()*10)),
			'C': Math.round(change - parseInt(Math.random()*10)),
			'D': Math.round(change + parseInt(Math.random()*10))
		},
		'answer': 'A',
		'author-id': '11'
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
	
	rate1 = parseInt(rate1);
	rate2 = parseInt(rate2);
	rate3 = parseInt(rate3);
	end =(population*[1+rate1/100]*[1-rate2/100]*[1+rate3/100]);


	question = {
		'type': 'single',
		'id': '1112',
		'question': 'A town has population of' + population + 'in 1988. In one year i.e. by 1989 it increased by' + rate1 +
					'. Next year i.e. in 1990, it bijoy by'+ rate2 + '. The next year in 1991 there was an increase of' + rate3 +
					'. What is the population at end of 1991?',
		'options': {
			'A': Math.round(end - parseInt(Math.random()*10)),
			'B': Math.round(end - parseInt(Math.random()*10)),
			'C': Math.round(end),
			'D': Math.round(end + parseInt(Math.random()*10))
		},
		'answer': 'C',
		'author-id': '11'
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

	Ajay = parseInt(Ajay);
	bijoy = parseInt(bijoy);
	chandru = parseInt(chandru);
	election=Ajay+bijoy+chandru;
	percentage=(Ajay/election)*100;

	question = {
		'type': 'single',
		'id': '1113',
		'question':'Three candidates, Ajay, Bijoy & Chandu contested an election and received' 
					+ Ajay + ','+ bijoy + 'and' + chandru + 'votes respectively. What percent of the total votes did get?',
		'options': {
			'A': Math.round(percentage - parseInt(Math.random()*10)),
			'B': Math.round(percentage - parseInt(Math.random()*10)),
			'C': Math.round(percentage + parseInt(Math.random()*10)),
			'D': Math.round(percentage)
		},
		'answer': 'D',
		'author-id': '11'
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
	
	group_boy = parseInt(group_boy);
	boys_years = parseInt(boys_years);
	boys_leave = parseInt(boys_leave);
	new_boy = parseFloat(new_boy);
	age=group_boy*boys_years;
	group=(new_boy*group_boy)-age+boys_leave;


	question = {
		'type': 'single',
		'id': '1114',
		'question': 'Average age of a group of ' + group_boy + ' boys is ' + boys_years + ' years. A boy of age ' + boys_leave + 
					'leaves the group and a new boy joins the group. If the new average age of the group is ' + new_boy + 
					'years, find the age of the new boy.',
		'options': {
			'A': Math.round(group - parseInt(Math.random()*10)),
			'B': Math.round(group - parseInt(Math.random()*10)),
			'C': Math.round(group),
			'D': Math.round(group + parseInt(Math.random()*10))
		},
		'answer': 'C',
		'author-id': '11'
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
	
	electricity_bill= parseInt(electricity_bill);
	deducted = parseInt(deducted),
	to_pay=deducted-electricity_bill;
	bill=(deducted/to_pay)*100;

	question = {
		'type': 'single',
		'id': '1115',
		'question': 'If ' + electricity_bill + '% of an electricity bill is deducted then rs.' + deducted + ' is still to be paid .How much was the original bill',
		'options': {
			'A': Math.round(bill),
			'B': Math.round(bill + parseInt(Math.random()*10)),
			'C': Math.round(bill + parseInt(Math.random()*10)),
			'D': Math.round(bill - parseInt(Math.random()*10))
		},
		'answer': 'A',
		'author-id': '11'
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
	
	typist= parseInt(typist);
	pages = parseInt(pages);
	hours = parseInt(hours);
	count=pages/typist;
	total=count/hours;

	question = {
		'type': 'single',
		'id': '1116',
		'question': + typist + 'typists can type ' + pages + ' pages in ' + hours + 
					'hours.Find the average number of pages typed by each typist in an hour.',
		'options': {
			'A': Math.round(total + parseInt(Math.random()*10)),
			'B': Math.round(total - parseInt(Math.random()*10)),
			'C': Math.round(total + parseInt(Math.random()*10)),
			'D': Math.round(total)
		},
		'answer': 'D',
		'author-id': '11'
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
	
	village_increased = parseInt(village_increased);
	decade = parseInt(decade);
	percentage_increase=(village_increased-decade);
	Increase_percentage=(percentage_increase/village_increased)*100;
	required_average=(Increase_percentage/10);


	question = {
		'type': 'single',
		'id': '1117',
		'question': 'The population of a town increased from ' + village_increased + ' to ' + decade + 
					'in a decade. The average percent increased of population per year is:',
		'options': {
			'A': Math.round(required_average - parseInt(Math.random()*10)),
			'B': Math.round(required_average - parseInt(Math.random()*10)),
			'C': Math.round(required_average + parseInt(Math.random()*10)),
			'D': Math.round(required_average)
		},
		'answer': 'D',
		'author-id': '11'
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
	
	parallel_line = parseInt(parallel_line);
	same_direction = parseInt(same_direction);
	train_slower = parseInt(train_slower),
	train=parallel_line-same_direction;
	meter_sec=[train*(5/18)];
	x=meter_sec*train_slower;
	length=x/2;
	

	question = {
		'type': 'single',
		'id': '1118',
		'question': 'Two trains of equal lengths are running on parallel lines in the same direction at the rate of ' + parallel_line + 'km/hr and' 
					+ same_direction + 'km/hr. The faster train passes the slower train in ' + train_slower + ' seconds. What is the length of the each trains ?',
		'options': {
			'A': Math.round(length - parseInt(Math.random()*10)),
			'B': Math.round(length + parseInt(Math.random()*10)),
			'C': Math.round(length),
			'D': Math.round(length - parseInt(Math.random()*10))
		},
		'answer': 'C',
		'author-id': '11'
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
		
	downstream_distance=parseInt(downstream_distance);
	downstream_time=parseInt(downstream_time);
	upstream_time=parseInt(upstream_time);
	speed=downstream_distance/downstream_time;
	x=downstream_distance/upstream_time;
	stream_speed=1/2*(speed+x);

	question = {
		'type': 'single',
		'id': '119',
		'question': 'A boat running downstream covers a distance of ' + downstream_distance + 'km in ' + downstream_time + ' hours while for covering the same distance upstream, it takes'
					+ upstream_time + ' hours. What is the speed of the boat in still water?',
		'options': {
			'A': Math.round(stream_speed),
			'B': Math.round(stream_speed - parseInt(Math.random()*10)),
			'C': Math.round(stream_speed + parseInt(Math.random()*10)),
			'D': Math.round(stream_speed - parseInt(Math.random()*10))
		},
		'answer': 'A',
		'author-id': '11'
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
			'A': Math.round(profit_percentage - parseInt(Math.random()*10)),
			'B': Math.round(profit_percentage - parseInt(Math.random()*10)),
			'C': Math.round(profit_percentage),
			'D': Math.round(profit_percentage + parseInt(Math.random()*10))
		},
		'answer': 'C',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1121(){
	var inputData=[
		{
		'fill':85,
		'water':2.5
		},
		{
		'fill':135,
		'water':7.3
		},

		{
		'fill':225,
		'water':9.5
		},

		{
		'fill':450,
		'water':9.6
		}],
		randomIndex=getRandomNumber(inputData.length),
		fill=inputData[randomIndex]['fill'],
		water=inputData[randomIndex]['water'],
		bucket,
		question={};
		
	fill=parseInt(fill);
	water=parseFloat(water);
	bucket=(fill/water);
	
	question={
		'type':'single',
		'id':'1121',
		'question':'To fill a tank ' + fill +
			'bucket of water is required.how many bucket of water will be required to fill the same tank if the capacity of the bucket is required to'
			 + water +' of its present',
		'options':{
			'A':bucket + parseInt(Math.random()*10),
			'B':bucket - parseInt(Math.random()*10),
			'C':bucket,
			'D':bucket - parseInt(Math.random()*10),
		},
		'answer':'C',
		'author-id':'11'
	}
	return question;

}
function problem1122(){
	var inputData = [{
		'start':90,
		'mid':33.5,
		'end':55
		},
		{
		'start':83,
		'mid':6.9,
		'end':95
		},
		{
		'start':67,
		'mid':89.5,
		'end':65
		},	
		{
		'start':70,
		'mid':44.7,
		'end':95
		}],
		randomIndex = getRandomNumber(inputData.length),
		start= inputData[randomIndex]['start'],
		mid= inputData[randomIndex]['mid'],
		end=inputData[randomIndex]['end'],
		total,
		question = {};
		
	start=parseInt(start);
	mid=parseFloat(mid);
	end=parseInt(end);
	total=(start*mid)+end;
		
	question={
		'type':'single',
		'id':'1122',
		'question':'The average weight of the ' + start + ' increased by ' + mid + 
					'kg when a new person comes in place of one of them weighting ' + end + ' of the new person.',
		'option':
		{
			'A':Math.round(total),
			'B':Math.round(total + parseInt(Math.random()*10)),
			'C':Math.round(total - parseInt(Math.random()*10)),			
			'D':Math.round(total - parseInt(Math.random()*10)),
		},
		'answer':'A',
		'author-id':'11'
		}
		return question;
}
function problem1123(){
	var inputData = [{
		'input1': 160,
		'input2': 100
		},
		{
		'input1': 220,
		'input2': 120
		},
		{
		'input1': 300,
		'input2': 230
		},
		{
		'input1': 430,
		'input2': 420
		},
		{
		'input1': 260,
		'input2': 180
		}],
		randomIndex = getRandomNumber(inputData.length),
		input1=inputData[randomIndex]['input1'],
		input2=inputData[randomIndex]['input2'],
	    precentage,
		
		
		input1=parseInt(input1),
		input2=parseInt(input2),
		precentage=(input1 - input2)/input1,
		precentage=precentage*100,
		
		question = {
		'type': 'single',
		'id': '1123',
		'question': 'A student multiplied a number by ' + input2 + 'instead of '+input1+ 'what is the percentage error in the calculation?',
		'options': {
			'A': Math.round(precentage - parseInt(Math.random()*10)),
			'B': Math.round(precentage - parseInt(Math.random()*10)),
			'C': Math.round(precentage + parseInt(Math.random()*10)),
			'D': Math.round(precentage),
		},
		'answer': 'A',
		'author-id': '11',
	}
	
	return question;
}
function problem1124(){
	var inputData = [{
		'costprice': 2054,
		'profit': 65
		},
		{
		'costprice': 6540,
		'profit': 23
		},
		{
		'costprice': 2320,
		'profit': 89
		},
		{
		'costprice': 8640,
		'profit': 67
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice= inputData[randomIndex]['costprice'],
		profit = inputData[randomIndex]['profit'],
		p,
		sellingprice,
		question = {};
		
	costprice= inputData[randomIndex]['costprice'],
	profit = inputData[randomIndex]['profit'],
	p=(100+profit)/100;
	sellingprice=p*costprice;

	question = {
		'type': 'single',
		'id': '1124',
		'question': 'Rajesh bought a chai for RS ' + costprice + ' and sold it suresh ,if rajesh earned a profit of ' + profit + 
					'% profit.what is the sellingprice of chair',
		'options': {
			'A': Math.round(sellingprice), 
			'B': Math.round(sellingprice - parseInt(Math.random()*10)),
			'C': Math.round(sellingprice + parseInt(Math.random()*10)),
			'D': Math.round(sellingprice - parseInt(Math.random()*10))
		},
		'answer': 'A',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1125(){
		var inputData = [{
			'train1':45,
			'train2':53,
			'distance':700,
			'time':42
			},
			{
			'train1':84,
			'train2':98,
			'distance':60,
			'time':35
			},
			{
			'train1':105,
			'train2':110,
			'distance':500,
			'time':23
			},
			
			{
			'train1':102,
			'train2':23,
			'distance':300,
			'time':58
			}],
			randomIndex = getRandomNumber(inputData.length),
			train1= inputData[randomIndex]['train1'],
			train2= inputData[randomIndex]['train2'],
		    distance= inputData[randomIndex]['distance'],
			time= inputData[randomIndex]['time'],
			question= {};
			
		train1=parseInt(train1);
		train2=parseInt(train2);
		distance=parseInt(distance);
		time=parseInt( time);
		speed=(distance/time)/train2;
		ratio=train1*speed;
					
			
	  question= {
			'type': 'single',
			'id': '1125',
			'question': 'The ratio between the speed of two train is ' + train1 + ':' + train2 +
			'.If the second train runs '+distance+' km in '+time+'hours, then the speed of the first train is?',
			'options': {
				'A':Math.round(ratio-parseInt(Math.random()*10)),
				'B':Math.round(ratio-parseInt(Math.random()*10)),
				'C':Math.round(ratio),
				'D':Math.round(ratio+parseInt(Math.random()*10))
			},
			'answer': 'C',
			'author-id': '11'
		}
		return question;
	
}
function problem1126(){
		var inputData = [{
			'speed':280
			},
			{
			'speed':340
			},
			{
			'speed':260
			},
			{
			'speed':540
			}],
			
			randomIndex = getRandomNumber(inputData.length),
			speed= inputData[randomIndex]['speed'],
			question = {};
			
	speed=parseInt(speed);
	meters=speed*(5/18);
			
	  question= {
			'type': 'single',
			'id': '1126',
			'question': 'A bike moves at the speed of '+speed+'km/hr. What is the speed of the car in metres per second',
			'options': {
				'A':Math.round(meters-parseInt(Math.random()*10)),
				'B':Math.round(meters-parseInt(Math.random()*10)),
				'C':Math.round(meters),
				'D':Math.round(meters+parseInt(Math.random()*10))
			},
			'answer': 'C',
			'author-id': '11'
		}
		return question;
	
}
function problem1127(){
	var inputData = [{
		'length': 3042,
		'breadth': 5604
		},
		{
		'length': 1050,
		'breadth': 1200
		},
		{
		'length': 4933,
		'breadth': 2524
		},
		{
		'length': 1005,
		'breadth': 2310
		},
		{
		'length': 4950,
		'breadth': 4523
		}],
		randomIndex = getRandomNumber(inputData.length),
		length = inputData[randomIndex]['length'],
		breadth = inputData[randomIndex]['breadth'],
		answer,
		question = {};

	length = parseInt(length);
	breadth = parseInt(breadth);
	answer = length*breadth;

	question = {
		'type': 'single',
		'id': '1127',
		'question': 'Find the answer of Rectangle with length'+" "+ + length + 'cm and breadth' +" "+ + breadth + 'cm ?',
		'options': {
			'A': Math.round(answer + parseInt(Math.random()*10)),
			'B': Math.round(answer),
			'C': Math.round(answer - parseInt(Math.random()*10)),
			'D': Math.round(answer - parseInt(Math.random()*10))
		},
		'answer': 'B',
		'author-id': '11'
	}
	
	return question;	
}
function problem1128(){
	var inputData = [{
		'costprice': 123,
		'loss': 45
		},
		{
		'costprice': 574,
		'loss': 65
		},
		{
		'costprice': 620,
		'loss': 75
		},
		{
		'costprice': 130,
		'loss': 90
		},
		{
		'costprice': 140,
		'loss': 65
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice = inputData[randomIndex]['costprice'],
		loss = inputData[randomIndex]['loss'],
		sellingprice,
		question = {};
		
		costprice = parseInt(costprice);
		loss = parseInt(loss);
		sellingprice=(loss/100)*costprice;

	question = {
		'type': 'single',
		'id': '1128',
		'question': 'A man buys a cow for Rs ' + costprice + ' and sells it at a loss of ' + loss + '%. What is the selling price of the cow?',
		'options': {
			'A': Math.round(sellingprice), 
			'B': Math.round(sellingprice - parseInt(Math.random()*10)),
			'C': Math.round(sellingprice + parseInt(Math.random()*10)),
			'D': Math.round(sellingprice - parseInt(Math.random()*10))
		},
		'answer': 'A',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1129(){
	var inputData = [{
		'principal': 600,
		'interest': 67,
		'years': 1990
		},
		{
		'principal': 8000,
		'interest': 140,
		'years': 1780
		},
		{
		'principal': 5580,
		'interest': 670,
		'years': 1670
		},
		{
		'principal': 8900,
		'interest': 450,
		'years': 1870
		},
		{
		'principal': 7600,
		'interest': 9050,
		'years': 1990
		}],
		randomIndex = getRandomNumber(inputData.length),
		principal= inputData[randomIndex]['principal'],
		interest = inputData[randomIndex]['interest'],
		years = inputData[randomIndex]['years'],
		amount,
		question = {};
	
	principal=parseInt(principal);
	interest=parseInt(interest);
	years=parseInt(years);
	amount=(principal*interest*years)/100;

	question = {
		'type': 'single',
		'id': '1129',
		'question': ' If Ramesh borrows '+ principal +' from Mahesh at rate of interest '+ interest +
						'S.I, at the end of' + years + 'years how much interest Suresh has to pay along with principal amount?',
		'options': {
			'A': Math.round(amount),
			'B': Math.round(amount - parseInt(Math.random()*10)),
			'C': Math.round(amount + parseInt(Math.random()*10)),
			'D': Math.round(amount - parseInt(Math.random()*10))
		},
		'answer': 'A',
		'author-id': '11'
	}
	
	return question;
}
function problem1130(){
	var inputData = [{
		'profit': 87,
		'costprice': 450
		},
		{
		'profit': 34,
		'costprice': 890
		},
		{
		'profit': 90,
		'costprice': 345
		},
		{
		'profit': 34,
		'costprice': 560
		},
		{
		'profit': 56,
		'costprice': 897
		}],
		randomIndex = getRandomNumber(inputData.length),
		profit= inputData[randomIndex]['profit'],
		costprice= inputData[randomIndex]['costprice'],
		sellingprice,
		question = {};

	profit=parseInt(profit);
	costprice=parseInt(costprice);
	sellingprice=(((100/profit)/100)*costprice)

	question = {
		'type': 'single',
		'id': '1130',
		'question': 'A shopkeeper bought a watch for rs'  + costprice + 'at what price should he sell the watch to earn a profit of'+profit,
		'options': {
			'A': Math.round(sellingprice-parseInt(Math.random()*10)),
			'B': Math.round(sellingprice),
			'C': Math.round(sellingprice+parseInt(Math.random()*10)),
			'D': Math.round(sellingprice-parseInt(Math.random()*10))
		},
		'answer': 'B',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1131(){
	var inputData = [{
		'sum': 678,
		'rate': 987,
		'time': 345
		},
		{
		'sum': 578,
		'rate': 986,
		'time': 89
		},
		{
		'sum': 345,
		'rate': 67,
		'time': 334
		},
		{
		'sum': 345,
		'rate': 564,
		'time': 987
		},
		{
		'sum': 453,
		'rate': 987,
		'time': 345
		}],
	 randomIndex = getRandomNumber(inputData.length),
		sum= inputData[randomIndex]['sum'],
		time = inputData[randomIndex]['time'],
		rate = inputData[randomIndex]['rate'],
		interest,
		question = {};

	sum=parseInt(sum);
	time=parseInt(time);
	rate=parseInt(rate);
	interest=(sum*time*rate/100);

	question = {
		'type': 'single',
		'id': '1131',
		'question': 'How much time will it take for an' +sum+ 'to yield' +time+ 'as interest at' +rate+ 'per annum of simple interest',
		'options': {
			 'A':Math.round(interest - parseInt(Math.random()*10)),
			 'B':Math.round(interest - parseInt(Math.random()*10)),
			 'C':Math.round(interest),
			 'D':Math.round(interest + parseInt(Math.random()*10))
		},
		'answer': 'C',
		'author-id': '11'
	}
	
	return question;
}
function problem1132(){
	var inputData = [{
        'upstream':60,
		'downstream':35,
		},
		{
        'upstream':80,
		'downstream':20.4,
		},
		{
        'upstream':60,
		'downstream':9.6,
		},
		{
		'upstream':30,
		'downstream':5.5,
		},
		{
		'upstream':93,
		'downstream':7.5,
		}],
		randomIndex = getRandomNumber(inputData.length),
	    upstream= inputData[randomIndex]['upstream'],
        downstream= inputData[randomIndex]['downstream'],
		distance,
		time,
		question = {};

	upstream=parseInt(upstream);
	downstream=parseInt(downstream);
	distance=upstream-downstream;
	distance=upstream+downstream;
	time=distance/upstream;
	

	question = {
		'type': 'single',
		'id': '1132',
		'question': 'Speed of a boat in standing water is' + upstream + 'and the speed of the stream is' 
					+ downstream + 'A man rows to a place at a' + distance + 'and comes back to the starting point. The total time taken by him is', 
		'options': {
			'A': Math.round(time - parseInt(Math.random()*10)),
			'B': Math.round(time - parseInt(Math.random()*10)),
			'C': Math.round(time + parseInt(Math.random()*10)),
			'D': Math.round(time)
		},
		'answer': 'D',
		'author-id': '11'
	}
	
	return question;
}
function problem1133(){
	var inputData = [{
		'cp': 64,
		'sp': 234
		},
		{
		'cp': 876,
		'sp': 34
		},
		{
		'cp': 350,
		'sp': 487
		},
		{
		'cp': 765,
		'sp': 234
		},
		{
		'cp': 456,
		'sp': 30
		}],
		randomIndex = getRandomNumber(inputData.length),
	    cp = inputData[randomIndex]['cp'],
		sp = inputData[randomIndex]['sp'],
		p,
		pp,
		question = {};

	cp = parseFloat(cp);
    sp = parseInt(sp);
	p = sp - cp ;
    pp = p/cp*100;

	question = {
		'type': 'single',
		'id': '1133',
		'question': 'A pen is bought for  ' + cp + 'rs and sold for ' + sp + ' rs. what is the '+ pp +' profit percentage of the pen?',
		'options': {
			'A': Math.round(pp - parseInt(Math.random()*10)),
			'B': Math.round(pp - parseInt(Math.random()*10)),
			'C': Math.round(pp / parseInt(Math.random()*10)),
			'D': Math.round(pp)
		},
		'answer': 'D',
		'author-id': '11'
    }
	return question;
}
function problem1134(){
	var inputData = [{
		'p': 240,
		'n': 120,
		'r':44
		},
		{
		'p': 980,
		'n': 67,
		'r':10		
		},
		{
		'p': 345,
		'n': 78,
		'r': 6
		},
		{
		'p': 567,
		'n': 16,
		'r': 12
		},
		{
		'p':789,
		'n': 2,
		'r':16
		}],
		randomIndex = getRandomNumber(inputData.length),
	    p = inputData[randomIndex]['p'],
		n = inputData[randomIndex]['n'],
		r = inputData[randomIndex]['r'],
		intrest,
		question = {};

	p = parseInt(p);
    n = parseInt(n);
    r = parseInt(r);
    intrest=p*n*r/100;
	
	question = {
		'type': 'intrestngle',
		'id': '1134',
		'question': 'Find the intrestmple interest when ' + p + ' rs rate of interest ' + r + ' percentage per annum, time ' + n + ' years.',
		'options': {
			'A': Math.round(intrest - parseInt(Math.random()*10)),
			'B': Math.round(intrest + parseInt(Math.random()*10)),
			'C': Math.round(intrest + parseInt(Math.random()*10)),
			'D': Math.round(intrest)
		},
		'answer': 'D',
		'author-id': '11'
    }
	return question;
}
function problem1135(){
	var inputData = [{
		'rate':1.8
		},
		{
		'rate':4.8
		},
		{
		'rate':3.5
		},
		{
		'rate':9.6
		}],
		randomIndex = getRandomNumber(inputData.length),
		rate = inputData[randomIndex]['rate'],
		change,
		question = {};
		
	
	rate = parseInt(rate);
	change=(rate/(100-rate)*100);

	question = {
		'type': 'single',
		'id': '1135',
		'question': 'The price of rice falls by ' + rate +
					'% by what percentage a person can increase the consumption of rice so that his overall budget does not change',
		'options': {
			'A': Math.round(change / parseInt(Math.random()*10)),
			'B': Math.round(change),
			'C': Math.round(change + parseFloat(Math.random()*10)),
			'D': Math.round(change - parseFloat(Math.random()*10))
		},
		'answer': 'B',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1136(){
	var inputData = [{
		'electricity_bill':4.5,
		'deducted': 13
		},
		{
		'electricity_bill':9.5,
		'deducted': 20
		},
		{
		'electricity_bill':5.6,
		'deducted': 15
		},
		{
		'electricity_bill':8.6,
		'deducted': 10
		}],
		randomIndex = getRandomNumber(inputData.length),
		electricity_bill= inputData[randomIndex]['electricity_bill'],
		deducted = inputData[randomIndex]['deducted'],
		bill,
		question = {};
	
	electricity_bill= parseInt(electricity_bill);
	deducted = parseInt(deducted),
	to_pay=deducted-electricity_bill;
	bill=(deducted/to_pay)*100;

	question = {
		'type': 'single',
		'id': '1136',
		'question': 'If' + electricity_bill + '% of an electricity bill is deducted then Rs ' + deducted + 'is still to be paid .How much was the original bill',
		'options': {
			'A': Math.round(bill),
			'B': Math.round(bill + parseInt(Math.random()*10)),
			'C': Math.round(bill + parseInt(Math.random()*10)),
			'D': Math.round(bill - parseFloat(Math.random()*10))
		},
		'answer': 'A',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1137(){
	var inputData = [{
		'first':456,
		'second': 796,
		'third': 458,
		'four': 253,
		'five': 863,
		'six': 5,
		'month': 6845
		},
		{
		'first': 635,
		'second': 927,
		'third': 855,
		'four': 230,
		'five': 662,
		'six': 5,
		'month':6500 
		},
		{
		'first': 486,
		'second': 698,
		'third': 257,
		'four': 487,
		'five': 625,
		'six': 5,
		'month': 257
		},
		{
		'first': 465,
		'second': 563,
		'third': 536,
		'four': 463,
		'five': 732,
		'six': 5,
		'month': 976
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
	
	first = parseInt(first);
	second = parseInt(second);
	third = parseInt(third);
	four = parseInt(four);
	five = parseInt(five);
	six = parseInt(six);
	month = parseInt(month);
	x=first+second+third+four+five;
	y=six*month;
	group=y-x;


	question = {
		'type': 'single',
		'id': '1137', 
		'question':'Ajay gets a salary of Rs.'+ first + ', Rs.' + second + ', Rs.' + third + ', Rs.' + four + ' and Rs.'+ five + 'for'+ six + 
		            'months. How much salary he must have in the sixth month so that he gets an average of Rs.' + month + '?',
		'options': {
			'A': Math.round(group + parseInt(Math.random()*10)),
			'B': Math.round(group + parseInt(Math.random()*10)),
			'C': Math.round(group),
			'D': Math.round(group + parseInt(Math.random()*10))
		},
		'answer': 'C',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1138(){
	var inputData = [{
		'children':4,
		'age': 70,
		'years':5
		},
		{
		'children':6,
		'age': 90,
		'years':3
		},
		{
		'children':7,
		'age': 60,
		'years':3
		},
		{
		'children':5,
		'age': 30,
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
		
	children = parseInt(children);
	age = parseInt(age);
	years = parseInt(years);
	interval=(age*age*age)+age;
	x1=years-interval;
	young=x1/children;

	question = {
		'type': 'single',
		'id': '1138',
		'question':'The sum of ages of'+ children + 'children born at the intervals of' + years + 'years each is'+ age + 'years. What is the age of the youngest child?',
		'options': {
			'A': Math.round(young - parseInt(Math.random()*10)),
			'B': Math.round(young),
			'C': Math.round(young + parseInt(Math.random()*10)),
			'D': Math.round(young - parseInt(Math.random()*10))
		},
		'answer': 'B',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1139(){
	var inputData = [{
		'sellprofit':78,
		'costprofit': 80
		},
		{
		'sellprofit':85,
		'costprofit': 140
		},
		{
		'sellprofit':75,
		'costprofit': 300
		},
		{
		'sellprofit':65,
		'costprofit': 100
		}],
		randomIndex = getRandomNumber(inputData.length),
		sellprofit = inputData[randomIndex]['sellprofit'],
		costprofit = inputData[randomIndex]['costprofit'],
		profit,
		profit_percentage,
		question = {};
	
	sellprofit = parseInt(sellprofit);
	costprofit = parseInt(costprofit);
	profit=sellprofit-costprofit;
	profit_percentage=(profit/costprofit)*100;

	question = {
		'type': 'single',
		'id': '1139',
		'question':'An article is bought for Rs.' + sellprofit + 'and sold for Rs.' + costprofit + '. What is the gain percentage?',
		'options': {
			'A': Math.round(profit_percentage - parseInt(Math.random()*10)),
			'B': Math.round(profit_percentage + parseInt(Math.random()*10)),
			'C': Math.round(profit_percentage),
			'D': Math.round(profit_percentage + parseInt(Math.random()*10))
		},
		'answer': 'C',
		'author-id': '11'
	}
	
	return question;
	
}
function problem1140(){
	var inputData = [{
		'speed':78,
		'time': 30
		},
		{
		'speed':19,
		'time': 25
		},
		{
		'speed':23,
		'time': 25
		},
		{
		'speed':54,
		'time': 19
		}],
		randomIndex = getRandomNumber(inputData.length),
		speed = inputData[randomIndex]['speed'],
		time = inputData[randomIndex]['time'],
		speed1,
		distance,
		question = {};
		
	speed = parseInt(speed);
	time = parseInt(time);	
	speed1=speed*5/18;
	distance=speed1*time;

	question = {
		'type': 'single',
		'id': '1140',
		'question': 'What distance will be covered by a bus moving at '+ speed +' kmph in' + time +' seconds?' ,
		'options': {
			'A': Math.round(distance - parseInt(Math.random()*10)),
			'B': Math.round(distance - parseInt(Math.random()*10)),
			'C': Math.round(distance + parseInt(Math.random()*10)),
			'D': Math.round(distance)
		},
		'answer': 'D',
		'author-id': '11'
	}
	
	return question;
	
}
	

