
var height = $(window).height();
var width = $(window).width();

$(function () {

    t();
    
    h();


});

$(window).resize(function() {
	height = $(window).height();
	width = $(window).width();
});

var r;
var rr;

function h() {

    r = height / 3;
    rr = r / 2;

    var $c1 = circle(r, 'red', (height / 2) - rr, (width / 6) - rr);
    $c1.appendTo('body');

    var $c2 = circle(r, 'red', (height / 2) - rr, (width / 2) - rr);
    $c2.appendTo('body');

    var $c3 = circle(r, 'red', (height / 2) - rr, width - (width / 6) - rr);
    $c3.appendTo('body');

    move($c1);

    setTimeout(function () {
        move($c2);
    }, 1000);

    setTimeout(function () {
        move($c3);
    }, 2000);

}

function move($o) {
    $o
    .transition({ rotate: '720deg' }, 15000)
    .transition({ rotate: '-720deg' }, 15000)
    .transition({ y: -height + 2 * r }, 2000, 'linear')
    .transition({ y: height - 2 * r }, 2000, 'linear')
    .transition({ y: -(height / 2) + r + rr }, 2000, 'linear', function () {
        move($o);
    });
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

    return $('<div></div>').css({
        'width': w,
        'height': h,
        'background': b,
        'position': 'absolute',
        'top': t,
        'left': l,
        'opacity': 1
    });
}

function circle(s, b, t, l) {

    return $('<div></div>').css({
        'width': s,
        'height': s,
        'background': b,
        //'-moz-border-radius': s / 2,
        //'-webkit-border-radius': s / 2,
        //'border-radius': s / 2,
        'position': 'absolute',
        'top': t,
        'left': l,
        'opacity': 1,
        'z-index': 1000
    });
}
