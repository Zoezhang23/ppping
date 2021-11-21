window.addEventListener('load', function() {
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.foucs');
    // 1. make arrow to show and hidden when focus
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        // clearInterval
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = timer = setInterval(() => {
            arrow_r.click();
        }, 2000);

    });
    //2.generate dot according the pics numbers
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length - 1; i++) {
        var li = document.createElement('li');
        //index to mark each li
        li.setAttribute('index', i)
        ol.appendChild(li);
        // add click to every li
        li.addEventListener('click', function() {
            // paita way
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ' ';
            }
            this.className = 'current';
            // when click the li, num and circle should give the index.
            num = this.getAttribute('index');
            circle = this.getAttribute('index');
            //obj= ul,target = li.offsetWidth * index;
            animater(ul, -focus.offsetWidth * this.getAttribute('index'));
        })
    }
    ol.children[0].className = 'current';
    //clone the whole first ul li.append
    var first = ul.children[1].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;
    //3. arrow-right and click 
    arrow_r.addEventListener('click', function() {
        // check if the. number = ul.children.length. set ul.left = 0
        // console.log(ul.children.length);
        if (flag) {
            flag = false;
            if (num == ol.children.length) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animater(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });
            //mark the circle
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            changeCircle();
            /*  for (var i = 0; i < ol.children.length; i++) {
                 ol.children[i].className = '';
             }
             ol.children[circle].className = 'current'; */
        }

    });
    //4.arrow left click
    // use flag to avoid too many click
    arrow_l.addEventListener('click', function() {
        // check if the. number = ul.children.length. set ul.left = 0
        // console.log(ul.children.length);
        if (flag) {
            flag = false;
            if (num == 0) {
                ul.style.left = focus.offsetWidth * (ul.children.length - 2) + 'px';
                num = ul.children.length - 2;
            }
            num--;
            animater(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });
            //mark the circle
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            changeCircle();
        }

    });

    function changeCircle() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    //5. make pics change interval 2s. just like click the arrow-r
    var timer = setInterval(() => {
        //use the click function
        arrow_r.click();
    }, 2000);
    //===================================================
    //Using  Jquery fixed tool dispaly 
    var control = true;

    function fixTool() {
        if ($(document).scrollTop() >= $(".recom").offset().top) {

            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    fixTool();
    $(window).scroll(function() {
        fixTool();
        // add current to li
        if (control) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current")
                }
            })
        }

    });
    $(".fixedtool").on('click', "li", function() {
        control = false;
        currentP = $(".floor .w").eq($(this).index()).offset().top;
        $(this).addClass("current").siblings().removeClass("current");
        $("html, body").stop().animate({
            scrollTop: currentP
        }, function() {
            control = true;
        });

    })
});