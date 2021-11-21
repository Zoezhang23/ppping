function animater(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // not liner move
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //check 
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // check if arrived do callback
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        }
        // check if obj has position
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)

}