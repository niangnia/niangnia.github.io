//改变窗口大小时调整图片大小
window.onload = resizeImages;
window.onresize = resizeImages;

function resizeImages() {
    $(function (e) {
        var screenWeight = document.documentElement.clientWidth;
        var screenHeight = document.documentElement.clientHeight;
        $("[name=pageImg]").css("width", screenWeight).css("height", screenHeight);
        $("#pageUl").css("bottom", screenHeight >> 1);
    });
}

var index = 1;
var curIndex = 1;
var wrap = document.getElementById("wrap");
var main = document.getElementById("main");
var hei = document.body.clientHeight;
wrap.style.height = hei + "px";
var obj = document.getElementsByTagName("div");
for (var i = 0; i < obj.length; i++) {
    if (obj[i].className == 'page') {
        obj[i].style.height = hei + "px";
    }
}
var pageNum = document.querySelectorAll(".page").length;
//如果不加时间控制，滚动会过度灵敏，一次翻好几屏
var startTime = 0, //翻屏起始时间
    endTime = 0,
    now = 0;
//浏览器兼容
if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
    document.addEventListener("DOMMouseScroll", scrollFun, false);
} else if (document.addEventListener) {
    document.addEventListener("mousewheel", scrollFun, false);
} else if (document.attachEvent) {
    document.attachEvent("onmousewheel", scrollFun);
} else {
    document.onmousewheel = scrollFun;
}

//滚动事件处理函数
function scrollFun(event) {
    startTime = new Date().getTime();
    var delta = event.detail || (-event.wheelDelta);
    //mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
    //DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
    if ((endTime - startTime) < -1000) {
        if (delta > 0 && parseInt(main.offsetTop) > -(hei * (pageNum - 1))) {
            //向下滚动
            index++;
            toPage(index);
        }
        if (delta < 0 && parseInt(main.offsetTop) < 0) {
            //向上滚动
            index--;
            toPage(index);
        }
        endTime = new Date().getTime();
    } else {
        event.preventDefault();
    }
}


 function toPage(idx) {
    //jquery实现动画效果
    if(idx!=curIndex){
  index=idx
        var delta=idx - curIndex;
        now = now - delta * hei;
        $("#main").animate({
            top: (now + 'px')
        }, 500);
        curIndex = idx;
        //更改列表的选中项
        $(".pageUlLi").css("color", "white");
        $("#pageUlLi" + idx).css("color", "red");

    }
}

// //鼠标悬停翻页
// document.getElementById("pageUlLi1").onmouseover = function () {
//     toPage(1);
// }
// document.getElementById("pageUlLi2").onmouseover = function () {
//     toPage(2);
// }
// document.getElementById("pageUlLi3").onmouseover = function () {
//     toPage(3);
// }
// document.getElementById("pageUlLi4").onmouseover = function () {
//     toPage(4);
// }
// document.getElementById("pageUlLi5").onmouseover = function () {
//     toPage(5);
// }
//鼠标点击翻页
document.getElementById("pageUlLi1").onclick = function () {
  toPage(1);
}
document.getElementById("pageUlLi2").onclick = function () {
  toPage(2);
}
document.getElementById("pageUlLi3").onclick = function () {
  toPage(3);
}
document.getElementById("pageUlLi4").onclick = function () {
  toPage(4);
}
document.getElementById("pageUlLi5").onclick = function () {
  toPage(5);
}






const myChart_1 = document.getElementById('myChart_1').getContext('2d');
new Chart(myChart_1, {
  type: 'bar',
  data: {
    labels: ['西安','开封','保定','济南','青岛','合肥','南京','扬州','苏州','上海','杭州','宁波','温州','南昌','武汉','荆州','成都','重庆','贵阳','昆明','桂林','南宁','广州','深圳','厦门','福州'],
    datasets: [{
      label: '6-20岁能熟练使用方言人群比例',
      data: [73.5,81.6,78,78.6,73.3,50.1,52.8,49.7,2.2,22.4,9.2,4.6,7.3,31.8,
        71.2,75.7,91.5,97.5,91,82,83.6,13,72.1,3.1,19.3,13.4],
      backgroundColor: ['rgba(0, 51, 204,0.735)',
      'rgba(0, 51, 204,0.816)',
      'rgba(0, 51, 204,0.78)',
      'rgba(0, 51, 204,0.786)',
      'rgba(0, 51, 204,0.733)',
      'rgba(0, 51, 204,0.501)',
      'rgba(0, 51, 204,0.528)',
      'rgba(0, 51, 204,0.497)',
      'rgba(0, 51, 204,0.101)',
      'rgba(0, 51, 204,0.224)',
      'rgba(0, 51, 204,0.142)',
      'rgba(0, 51, 204,0.126)',
      'rgba(0, 51, 204,0.143)',
      'rgba(0, 51, 204,0.318)',
      'rgba(0, 51, 204,0.712)',
      'rgba(0, 51, 204,0.757)',
      'rgba(0, 51, 204,0.915)',
      'rgba(0, 51, 204,0.975)',
      'rgba(0, 51, 204,0.91)',
      'rgba(0, 51, 204,0.82)',
      'rgba(0, 51, 204,0.836)',
      'rgba(0, 51, 204,0.203)',
      'rgba(0, 51, 204,0.721)',
      'rgba(0, 51, 204,0.131)',
      'rgba(0, 51, 204,0.233)',
      'rgba(0, 51, 204,0.184)'],

    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



  let myChart_2 = document.getElementById('myChart_2').getContext('2d');
  let chart = new Chart(myChart_2,{
data: {
    datasets: [{
        type: 'polarArea',
        label: '被其他地区理解程度均值（满分为100）',
        data: [60,65,87,10,10,15,16,18,19,21,23,30,57,58,59],
        backgroundColor:  ['rgba(0, 51, 204,0.6)',
                           'rgba(0, 51, 204,0.65)',
                           'rgba(0, 51, 204,0.87)',
                           'rgba(0, 51, 204,0.1)',
                           'rgba(0, 51, 204,0.1)',
                           'rgba(0, 51, 204,0.15)',
                           'rgba(0, 51, 204,0.16)',
                           'rgba(0, 51, 204,0.18)',
                           'rgba(0, 51, 204,0.19)',
                           'rgba(0, 51, 204,0.21)',
                           'rgba(0, 51, 204,0.23)',
                           'rgba(0, 51, 204,0.3)',
                           'rgba(0, 51, 204,0.57)',
                           'rgba(0, 51, 204,0.58)',
                           'rgba(0, 51, 204,0.59)',
      ],
        borderWidth: 3,
        borderColor:'white',
        hoverOffset: 7,
        hoverBackgroundColor:'rgb(0, 51, 204)'
    }, {
        type: 'polarArea',
        label: '本地区相互理解程度均值',
        data: [95,73,98,93,92,98,77,97,90,92,93,50,100,97,67],
        backgroundColor:  ['rgba(0, 51, 204,0.35)',
                           'rgba(0, 51, 204,0.57)',
                           'rgba(0, 51, 204,0.32)',
                           'rgba(0, 51, 204,0.37)',
                           'rgba(0, 51, 204,0.38)',
                           'rgba(0, 51, 204,0.32)',
                           'rgba(0, 51, 204,0.53)',
                           'rgba(0, 51, 204,0.33)',
                           'rgba(0, 51, 204,0.4)',
                           'rgba(0, 51, 204,0.38)',
                           'rgba(0, 51, 204,0.37)',
                           'rgba(0, 51, 204,0.8)',
                           'rgba(0, 51, 204,0.3)',
                           'rgba(0, 51, 204,0.33)',
                           'rgba(0, 51, 204,0.63)',
      ],
        borderWidth: 3,
        borderColor:'white',
        hoverOffset: 7,
        hoverBackgroundColor:'rgb(0, 51, 204)'
    }],
    labels: ['成都',
    '太原',
     '北京',
     '温州',
     '福州',
     '潮州',
     '苏州',
     '厦门',
     '梅县',
     '广州',
     '长沙',
     '南昌',
     '汉口',
     '济南',
     '西安']

},
options: {
}
});
