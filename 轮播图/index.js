var list = document.getElementById('list');
var imgs = document.getElementsByTagName('img');
var spans = document.getElementsByTagName('span');

function animate(obj, json, fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var flag = true;
		for(var attr in json) {
			var current = 0;
			if(attr == "opacity") {
				current = parseInt(getStyle(obj, attr) * 100);
			} else {
				current = parseInt(getStyle(obj, attr));
			}
			var step = (json[attr] - current) / 10;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			if(attr == "opacity") {
				if("opacity" in obj.style) {
					obj.style.opacity = (current + step) / 100;
				} else {
					obj.style.filter = "alpha(opacity = " + (current + step) + ")";
				}
			} else {
				obj.style[attr] = current + step + "px";
			}
			if(current != json[attr]) {
				flag = false;
			}
		}
		if(flag) {
			clearInterval(obj.timer);
			if(fn) {
				fn();
			}
		}
	}, 100)
}

function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return window.getComputedStyle(obj, null)[attr];
	}
}

function showButton(k) {
	for(var i = 0; i < spans.length; i++) {
		if(spans[i].className == "on") {
			spans[i].className = "";
			break;
		}
	}
	spans[k-1].className = "on";
	list.innerHTML = '<ul id="ul"><li><img src="image/banner_0'+k+'.jpg"></li>'
}