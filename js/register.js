window.onload = function() {
    var tel = document.querySelector('.tel');
    var eml = document.querySelector('.eml');
    var psw = document.querySelector('.psw');
    var sms = document.querySelector('.sms');
    var cmfpsw = document.querySelector('.sfmpsw');
    var telReg = /^316\d{8}$/;
    var emlReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    var pswReg = /^[a-z0-9_-]{6,18}$/;
    var smsReg = /^\d{4}$/;


    function regCheck(ele, reg) {
        ele.onblur = function() {
            if (reg.test(ele.value)) {
                this.nextElementSibling.className = 'success'
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>correct'
            } else {
                this.nextElementSibling.className = 'error'
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>Please input the correct number!'
            }
        }
    }
    regCheck(tel, telReg);
    regCheck(eml, emlReg);
    regCheck(psw, pswReg);
    regCheck(sms, smsReg);
    cmfpsw.onblur = function() {
        if (cmfpsw.value === psw.value) {
            this.nextElementSibling.className = 'success'
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>correct'
        } else {
            this.nextElementSibling.className = 'error'
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>Please input the same password!'
        }
    }
}