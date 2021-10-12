window.addEventListener('load', function() {
    var preimg = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var bigImg = document.querySelector('.bigImg');
    preimg.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    });
    preimg.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preimg.addEventListener('mousemove', function(e) {
        // 这里的宽度和高度都要考虑遮挡的宽度和高度
        var maskX = e.pageX - preimg.offsetLeft - mask.offsetWidth / 2
        var maskY = e.pageY - preimg.offsetTop - mask.offsetHeight / 2
            //小遮可以移动的最大距离，都是正方形，长宽一样
        var maskMax = preimg.offsetWidth - mask.offsetWidth
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX > maskMax) {
            maskX = maskMax
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY > maskMax) {
            maskY = maskMax
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        //大图片可以移动的最大距离。都是正方形哦
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        // 遮挡的移动影响大图片的移动。小遮移动的距离/小遮可移动的最大距离 = 大图片移动距离/大图片可移动最大
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        //大图片是相反移动的
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';

    });



});