//获取画布对象
var canvas = document.getElementById('canvas')
//返回一个对象进行属性方法的设置
//var ctx = canvas.getConText('2d')
var ctx = canvas.getContext('2d')

//获得宽
var width = ctx.canvas.width
//半径
var r = width/2
var rem = width/200


//时钟
function clockBg () {
    //准备画图，起始一条线
    ctx.beginPath();
    // 设置起始点
    ctx.translate(r,r);
    //线的粗细
    ctx.lineWidth = 10*rem
    //画圆
    ctx.arc(0,0,r-5*rem,0,2*Math.PI,false)
    //绘制一定好的路径
    ctx.stroke()
    //填入文本内容,声明一个数组
    var arr = [3,4,5,6,7,8,9,10,11,12,1,2]
    //文本的字体设置
    ctx.font = 18*rem + 'px Arial';
    //字体的位置
    ctx.textAlign = 'center';
    //基线
    ctx.textBaseline = 'middle';
    //循环遍历数组
    arr.forEach(function(content, index) {
        //弧度
        var rad = 2*Math.PI/12*index;
        //横坐标
       var x = Math.cos(rad)*(r-30*rem);
       //纵坐标
       var y = Math.sin(rad)*(r-30*rem);
       //填入文本内容
       ctx.fillText(content,x,y)
    })
    //每个小格的点
    for (i=0;i<60;i++) {
        //弧度
        var rad = 2*Math.PI/60*i;
        //横坐标
        var x = Math.cos(rad)*(r-18*rem);
        //纵坐标
        var y = Math.sin(rad)*(r-18*rem);
        //起始一条路径
        ctx.beginPath()
        ctx.arc(x,y,2,0,2*Math.PI,false)
        //判断，如果能被5整除就是红色的点，否则为其他颜色
        if (i%5 === 0) {
            ctx.fillStyle = 'red';
        }
        else {
            ctx.fillStyle = '#ccc'
        }
        ctx.fill();
    }
}
//时针
function drawHour(hour, minute) {
    //保存当前环境的状态
    ctx.save();
    //起始一条线
    ctx.beginPath();
    //每小时的弧度
    var rad = 2*Math.PI/12*hour;
    //每分钟的弧度
    var mrad = 2*Math.PI/12/60*minute;
    //旋转当前的绘图
    ctx.rotate(rad + mrad)
    //线的宽度
    ctx.lineWidth = 6*rem;
    //线帽样式
    ctx.lineCap = 'round';
    //把路径移动到画布中的指定点，不创建线条
    ctx.moveTo(0,10*rem);
    //添加一个新点，然后在画布中创建从该点到最后指定点的线条
     ctx.lineTo(0,-r/2+5*rem);
    //绘制所定义的路径
    ctx.stroke()
    ctx.restore()

}

//分钟
function drawMinuter(minute, second) {
    //保存当前环境的状态
    ctx.save();
    //旋转
    ctx.rotate(2*Math.PI/60*(minute + second/60));
    //创建
    ctx.beginPath();
    //宽度
    ctx.lineWidth = 3*rem;
    //线帽
    ctx.lineCap = 'round';
    //起点
    ctx.moveTo(0, 10*rem);
    //终点
    ctx.lineTo(0,-r+35*rem)
    //绘制
    ctx.stroke();
    //返回之前保存的路径状态
    ctx.restore()
}

//秒
function drawSecond(second) {
    //保存当前的环境状态
    ctx.save();
    //旋转
    ctx.rotate(2*Math.PI/60*second);
    //创建
    ctx.beginPath();
    //设置颜色
    ctx.fillStyle = 'red';
    //四点连接
    ctx.moveTo(-2*rem, 20*rem);
    ctx.lineTo(2*rem, 20*rem);
    ctx.lineTo(1*rem, -r + 18*rem);
    ctx.lineTo(-1*rem, -r + 18*rem);
    //填充当前绘图（路径）
    ctx.fill()
      ctx.restore()
    
}
//中心圆点
function drawDot() {
   
    //开始
    ctx.beginPath();
    //颜色
    ctx.fillStyle = '#fff';
    //画圆
    ctx.arc(0,0,4,0,2*Math.PI,false)
    //填充
    ctx.fill()
   
    
}


function clock() {
    //清空给定矩形内的指定像素。
    ctx.clearRect(0,0,width,width);
    //保存当前环境状态
    ctx.save();
    //获取相应的时分秒
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var s = time.getSeconds();
    clockBg()
    drawHour(hour,minute)
    drawMinuter(minute,s)
    drawSecond(s)
    drawDot()
    ctx.restore()
}
setInterval('clock()', 1000)