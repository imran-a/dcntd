
var height = $(window).height();
var width = $(window).width();
var c = '#000';

$(function () {

    t();

    //var $c1 = circle(height / 3, 'red', 0, 0);
    //$c1.appendTo('body');

    //var $c2 = circle(height / 4, 'red', 0, 0);
    //$c2.appendTo('body');

    //var $c3 = circle(height / 5, 'red', 0, 0);
    //$c3.appendTo('body');

    //move($c1);

    for (i = 0; i < 50; i++) {
        adder(doOne(i));
    }
});

function move($o) {

}

function randNo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(window).resize(function() {
	height = $(window).height();
	width = $(window).width();
});


function adder($o) {
    var timer = randNo(5000, 10000);

    $o.hide().appendTo('body').fadeIn(timer).fadeOut(2000, function () {
        $o.remove();
        adder(doOne(randNo(1, c.length - 1)));
    });
}

function doOne(i) {
    var $o = circle(randNo(150, 250),
				'red', randNo(-100, height),
				randNo(-100, width),
				100);

    return $o;
}



function t() {
    var r = 11;
    var ww = width / r;
    var t = 0;
    var on = true;

    for (i = 0; i < r; i++) {
        
        var b = on ? "white" : "black";
        var $o = draw(ww, height, b, 0, t);
        $o.appendTo('body');

        on = !on;
        t += ww;
    }

}

function draw(w, h, b, t, l) {

	return $('<div></div>').css({'width': w, 
							'height': h, 
							'background': b, 
							'position': 'absolute',
							'top': t,
							'left': l,
							'opacity': 1 });
}

function circle(s, b, t, l) {

    return $('<div></div>').css({
        'width': s,
        'height': s,
        'background': b,
        '-moz-border-radius': s / 2,
        '-webkit-border-radius': s / 2,
        'border-radius': s / 2,
        'position': 'absolute',
        'top': t,
        'left': l,
        'opacity': 1,
        'z-index': 1000
    });
}
