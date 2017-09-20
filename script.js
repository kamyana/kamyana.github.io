"use strict";
var date = new Date(); //створюємо об'єкт дати
var day = date.getDay(); //день тижня
var month = date.getMonth(); //поточний місяць
var nowDay = date.getDate(); //число дня
var uaDay; //день тижня українською
var uaMonth; //місяць українською
var myDay; //чи робочий чи вихідний
var rkam = [390, 410, 430, 450, 470, 490, 510, 530, 550, 570, 600, 630, 660, 710, 750, 780, 830, 870, 900, 930, 960, 990, 1020, 1050, 1080, 1110, 1140, 1200]; //на Камяну в хвилинах
var rbusKam = [2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 3]; //автобус на Камяну, кожному автобусу відповідає номер в хвилинах
var rcher = [390, 410, 430, 450, 470, 490, 510, 540, 570, 600, 640, 680, 720, 760, 800, 840, 870, 900, 930, 960, 990, 1020, 1050, 1080, 1110, 1140, 1170, 1215, 1260]; //на Чернівці в хвилинах
var rbusCher = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 3]; //автобус на Чернівці, кожному автобусу відповідає номер в хвилинах
var vkam = [420, 450, 480, 510, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020, 1060, 1100, 1140, 1180, 1230];
var vbusKam = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
var vcher = [390, 420, 450, 480, 510, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020, 1060, 1100, 1140, 1180];
var vbusCher = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
var h = date.getHours(); //поточна година
var m = date.getMinutes(); //поточна хвилина
var	s = date.getSeconds(); //поточні секунди
var bus; //номер автобуса, береться з масиву номерів автобусів
var mn; //час в хвилинах з 00:00
var mnforarrive; //час в хвилинах до відправлення автобусу
var mnCount; //час відправлення наступного автобусу
switch(month)
	{ //тут ми шукаємо буквене позначення місяця
	case 0: uaMonth = 'січня'; break;
	case 1: uaMonth = 'лютого'; break;
	case 2: uaMonth = 'березня'; break;
	case 3: uaMonth = 'квітня'; break;
	case 4: uaMonth = 'травня'; break;
	case 5: uaMonth = 'червня'; break;
	case 6: uaMonth = 'липня'; break;
	case 7: uaMonth = 'серпня'; break;
	case 8: uaMonth = 'вересня'; break;
	case 9: uaMonth = 'жовтня'; break;
	case 10: uaMonth = 'листопада'; break;
	case 11: uaMonth = 'грудня'; break;
	}
switch(day)
	{ //тут ми шукаємо буквене позначення дня тижня
	case 1: uaDay = 'понеділок'; myDay = 0; break;
	case 2: uaDay = 'вівторок'; myDay = 0; break;
	case 3: uaDay = 'середа'; myDay = 0; break;
	case 4: uaDay = 'четвер'; myDay = 0; break;
	case 5: uaDay = "п'ятниця"; myDay = 0; break;
	case 6: uaDay = "субота"; myDay = 1; break;
	case 0: uaDay = "неділя"; myDay = 1; break;
	}
function showTime (mnbegin,buses)
	{ //ця функція розраховує час відправлення наступного автобусу
		for (var i = 0; i < mnbegin.length; i++)
		{ //в цьому циклі ми перебираємо всі значення в хвилинах
			mn = (h*60)+m; //переводимо поточну годину і хвилину в хвилини
			if ((mnbegin[i] <= mn) && (mnbegin[i+1] > mn))
			{ //якщо поточне значення більше або = значенню з масиву І менше за наступне значення, то ми там де треба
				mnforarrive = mnbegin[i+1] - mn; //хвилини до відправлення
				mnCount = (~~(mnbegin[i+1]/60)) + ':' + (mnbegin[i+1]%60); //перетворюємо mn назад в години і хвилини
				bus = buses[i+1];
				if ((mnbegin[i+1]%60)==0) {mnCount+="0";}
			}
		}
	}
	var eachTT = function()
	{ if (myDay == 0)
		{
			showTime(rkam,rbusKam);
			if (bus==undefined)
			{document.getElementById("p1").innerHTML = "Автобус № 2 на Кам'яну відправиться о 6:30";}
			else
			{
				document.getElementById("p1").innerHTML = "Автобус № " + bus + " на Кам'яну відправиться о " + mnCount + ', через ' + mnforarrive + ' хвилин.';}
				showTime(rcher,rbusCher);
				if (bus==undefined)
				{document.getElementById("p2").innerHTML = "Автобус № 1 на Чернівці відправиться о 6:30";}
				else
				{document.getElementById("p2").innerHTML = "Автобус № " + bus + " на Чернівці відправиться о " + mnCount + ', через ' + mnforarrive + ' хвилин.';}
			}
			else {if (myDay == 1)
				{
					showTime(vkam,vbusKam);
					if (bus==undefined)
					{document.getElementById("p1").innerHTML = "Автобус № 1 на Кам'яну відправиться о 6:30";}
					else
					{document.getElementById("p1").innerHTML = "Автобус № " + bus + " на Кам'яну відправиться о " + mnCount + ', через ' + mnforarrive + ' хвилин.';}
						showTime(vcher,vbusCher);
						if (bus==undefined)
						{document.getElementById("p2").innerHTML = "Автобус № 1 на Чернівці відправиться о 7:00";}
						else
						{document.getElementById("p2").innerHTML = "Автобус № " + bus + " на Чернівці відправиться о " + mnCount + ', через ' + mnforarrive + ' хвилин.';}
					}
		}
	}
			eachTT();
			setInterval(eachTT, 10000);
			document.getElementById("a1").innerHTML = 'Сьогодні ' + nowDay + ' ' + uaMonth + ', ' + uaDay + '.';
	var ttime = function ()
	{
		date = new Date();
		h = date.getHours();
		m = date.getMinutes();
		s = date.getSeconds();
		h = (h < 10) ? '0' + h : h;
		m = (m < 10) ? '0' + m : m;
		s = (s < 10) ? '0' + s : s;
		document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
	}
	ttime();
	setInterval(ttime, 1000);
