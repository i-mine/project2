window.onload = function() {
	/*时钟显示*/
	var otime = document.getElementById('time');
	var oimg = otime.getElementsByTagName('img');
	var timer;
	timer = setInterval(tick, 1000);

	function tick() {
		var odate = new Date();
		var str = tudou(odate.getHours()) + tudou(odate.getMinutes()) + tudou(odate.getSeconds());
		for(var i = 0; i < oimg.length; i++) {
			oimg[i].src = 'img/home/' + str[i] + '.png';
		}
	}

	function tudou(n) {
		if(n < 10) {
			return '0' + n;
		} else {
			return '' + n;
		}
	}
	/*store图片轮播*/
	var obox = document.getElementById("storeBox");
	var oul = obox.getElementsByTagName('ul')[0];
	var oli = oul.getElementsByTagName('li');
	var sp1 = document.getElementById('sp1');
	var sp2 = document.getElementById('sp2');
	var timer1;
	sp1.onclick = function() {
		sp1.style.background = 'url(img/home/381f68782e3967930888c370ee5a4d60_store_owl_on.png)';
		sp2.style.background = ' url(img/home/5597a526609ae26efef77fc483b12109_store_owl.png)';
		clearInterval(timer1);
		oul.style.left = '0';
	}
	sp2.onclick = function() {
		sp1.style.background = ' url(img/home/5597a526609ae26efef77fc483b12109_store_owl.png)';
		sp2.style.background = 'url(img/home/381f68782e3967930888c370ee5a4d60_store_owl_on.png)';
		clearInterval(timer1);
		oul.style.left = '-604px';
	}
	timer1 = setInterval(cutli, 30);
	oul.onmouseover = function() {
		clearInterval(timer1);
	}
	oul.onmouseout = function() {
		clearInterval(timer1);
		timer1 = setInterval(cutli, 30);
	}

	function cutli() {
		if(-oul.offsetLeft > 608) {
			oul.style.left = '0px';
		}
		oul.style.left = oul.offsetLeft - 2 + 'px';
	}
	/**/
	var dbox = document.getElementById("desBox");
	var dul = dbox.getElementsByTagName('ul')[0];
	var dli = dul.getElementsByTagName('li');
	var spd1 = document.getElementById('spdes1');
	var spd2 = document.getElementById('spdes2');
	var timer2;
	spd1.onclick = function() {
		spd1.style.background = 'url(img/home/381f68782e3967930888c370ee5a4d60_store_owl_on.png)';
		spd2.style.background = ' url(img/home/5597a526609ae26efef77fc483b12109_store_owl.png)';
		clearInterval(timer2);
		dul.style.left = '0';
	}
	spd2.onclick = function() {
		spd1.style.background = ' url(img/home/5597a526609ae26efef77fc483b12109_store_owl.png)';
		spd2.style.background = 'url(img/home/381f68782e3967930888c370ee5a4d60_store_owl_on.png)';
		clearInterval(timer2);
		dul.style.left = '-604px';
	}

	timer2 = setInterval(cutli2, 30);
	dul.onmouseover = function() {
		clearInterval(timer2);
	}
	dul.onmouseout = function() {
		clearInterval(timer2);
		timer2 = setInterval(cutli2, 30);
	}

	function cutli2() {
		if(-dul.offsetLeft > 608) {
			dul.style.left = '0px';
		}
		dul.style.left = dul.offsetLeft - 2 + 'px';
	}
	/*登录界面开关设置*/
	var closebtn = document.getElementById("close");
	var openbtn = document.getElementById("open");
	var logbox = document.getElementById("loginceter");
	openbtn.onclick = function() {
		logbox.style.display = 'block';
	}
	closebtn.onclick = function() {
		logbox.style.display = 'none';
	}
	/*下载界面开关设置*/
	var closebtn1 = document.getElementById("downclose");
	var openbtn1 = document.getElementById("down-word");
	var downbox = document.getElementById("downceter");
	openbtn1.onclick = function() {
		downbox.style.display = 'block';
	}
	closebtn1.onclick = function() {
		downbox.style.display = 'none';
	}
}