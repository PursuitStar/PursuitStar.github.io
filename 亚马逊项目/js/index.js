/**
 * Created by Administrator on 2016/12/1.
 */

/*������*/
var registerEnter = document.getElementById("registerEnter");
var register = document.getElementById("register");
registerEnter.addEventListener('mouseover', function () {
    register.style.display = "block";
});
registerEnter.addEventListener('mouseout', function () {
    register.style.display = "none";
});

//  ��Ʒ�Ƽ�����
var tuijian = document.getElementById('tuijian');
var lis = tuijian.getElementsByTagName('li');
for (var j = 0; j < lis.length; j++) {
    for (var i = 0; i < lis.length; i++) {
        lis[i].querySelector('.contentImg1').onmouseover = function () {
            this.parentNode.parentNode.parentNode.childNodes[1].style.display = "block";
        };
        lis[i].childNodes[1].onmouseout = function () {
            this.style.display = "none";
        }
    }
}

/*��ɱ��Ʒ*/
var activeLi = document.querySelector('.msTitle').getElementsByTagName('li');
var line = document.querySelector('.line');
var shop = document.querySelector('.msShopping').querySelectorAll('.shop');
var classify = document.querySelector('.classifys');
var fenlei = document.querySelector('.fenlei');
var shopping = document.querySelectorAll('.shopp-ing');
var msul = document.querySelector('.msShopping').querySelector('ul');
var jkul = document.querySelector('.jkShopping').querySelector('ul');
var jsul = document.querySelector('.jsShopping').querySelector('ul');
var bgLeft = document.querySelectorAll('.bgLeft');
var bgRight = document.querySelectorAll('.bgRight');
//    console.log(msul);
//    console.log(jkul);
//    console.log(jsul);

// Tab�л�
for (var j = 0; j < activeLi.length; j++) {
    activeLi[j].index = j;
    activeLi[j].onclick = function () {
//            console.log(shopping[this.index]);
        line.style.left = 80 * (this.index) + "px";
        for (var i = 0; i < activeLi.length; i++) {
            activeLi[i].classList.remove("activeLi");
        }
        for (var a = 0; a < shopping.length; a++) {
            shopping[a].style.display = "none";
        }
        shopping[this.index].style.display = "block";
        this.classList.add('activeLi');
    }
}
//    ����  ȫ������
classify.onmouseover = function () {
    fenlei.style.display = "block";
};
classify.onmouseout = function () {
    fenlei.style.display = "none";
};
//    ���ǵ�����
for (var i = 0; i < shop.length; i++) {
    shop[i].onmouseover = function () {
        this.childNodes[1].childNodes[1].childNodes[3].style.display = "block";
    };
    shop[i].onmouseout = function () {
        this.childNodes[1].childNodes[1].childNodes[3].style.display = "none";
    }
}
//     ��ͷ�� �ֲ�ͼЧ��
for (var b = 0; b < bgLeft.length; b++) {
    bgLeft[b].index = b;
    bgLeft[b].onmouseover = function () {
        this.style.backgroundPositionY = "-30px";
    };
    bgLeft[b].onclick = function () {
        if (this.index == 0) {
            msul.style.left = -1077 + "px";
        } else if (this.index == 1) {
            jkul.style.left = -1077 + "px";
        } else {
            jsul.style.left = -1077 + "px";
        }
    };
    bgLeft[b].onmouseout = function () {
        this.style.backgroundPosition = "0 0px ";
    }
}
for (var c = 0; c < bgRight.length; c++) {
    bgRight[c].index = c;
    bgRight[c].onmouseover = function () {
        this.style.backgroundPosition = "-20px -30px ";
    };
    bgRight[c].onmouseout = function () {
        this.style.backgroundPosition = "-20px 0px ";
    };
    bgRight[c].onclick = function () {
        if (this.index == 0) {
            msul.style.left = 0 + "px";
        } else if (this.index == 1) {
            jkul.style.left = 0 + "px";
        } else {
            jsul.style.left = 0 + "px";
        }
    };
}
