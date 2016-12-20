/**
 * Created by Administrator on 2016/12/2.
 */
var classify = document.querySelector(".classify");
var item = document.querySelector('.item1');
var analysis = document.querySelectorAll('.analysis');
var lis = item.children;

for(var i = 0; i < lis.length; i++){
    lis[i].index = i;

    lis[i].onmouseover = function () {
        analysis[this.index].style.display = 'block';
        analysis[this.index].onmouseover = function () {
            this.style.display = 'block';
        }
    };
    lis[i].onmouseout = function () {
        analysis[this.index].style.display = 'none';
        analysis[this.index].onmouseout = function () {
            this.style.display = 'none';
        }
    };
}