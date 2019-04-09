window.onload = function() {
var topele = document.createElement('div')
var t = document.createTextNode("Banners placed by js with poppers")
topele.appendChild(t)
topele.classList.add('header');
var bannertop = document.body.appendChild(topele)
var topPop = new Popper(window, bannertop,{
	placement: 'top-start',
	positionFixed: true,
	modifiers: {
		inner: {
			enabled: 'true'
		},
		preventOverflow: {
			padding: 0
		},
		filp: {
			enabled :'false'
		}
	}
})

var bottomele = document.createElement('div')
var t = document.createTextNode("Js injected by nginx router")
bottomele.appendChild(t)
bottomele.classList.add('footer');
var bannerbot = document.body.appendChild(bottomele)
//create a 'fake' box on the bottom of the view to contain banner
class botBox {
	constructor() {
		//subtract banner hight from top,
		this.rect = {
        		top: window.innerHeight-20,
        		left: 0,
        		right: window.innerWidth,
        		bottom: window.innerHeight,
        		width: window.innerWidth,
        		height: 10
      		};
	}

	getBoundingClientRect() {
		return this.rect;
	}

	get clientWidth() {
		return this.rect.width;
	}

	get clientHeight() {
		return this.rect.height;
	}
}

var Box = new botBox();
var botPop = new Popper(Box, bannerbot,{
	placement: 'bottom-start',
	positionFixed: true,
	modifiers: {
		inner: {
			enabled: 'true'
		},
		preventOverflow: {
			padding: 0
		},
		filp: {
			enabled :'false'
		}
	}
})
}
