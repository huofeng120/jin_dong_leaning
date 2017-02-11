//登录弹框
		//获取点击事件对象(登录)
			var dengLu=document.getElementById('dengLu')
			//获取页面填充满整个窗口，阻止其他操作的对象，在页面顶部
			var max=document.getElementById('max')
			//获取弹框对象
			var deng=document.getElementById('deng')
			//欢迎登陆右侧的×号元素的对象
			var ca=document.getElementById('ca')
			//给(登录)添加事件
			dengLu.onclick=function(){
				//阻止其他操作
				max.style.display='block'
				//显示弹框
				deng.style.display='block'
			}
			//点击叉号时关闭弹框及阻止
			ca.onclick=function(){
			//关闭阻止操作
				max.style.display='none'
				//关闭弹框
				deng.style.display='none'
			}
		
//菜单特效
		
		//获取li的对象
			var header=document.getElementsByTagName('header')[0]
			var nav=header.getElementsByClassName('nav-right')[0]
			//li的数组
			var li=nav.getElementsByTagName('li')
			//文档的加载
			window.onload=function(){
				//遍历数组
				for(i1=0;i1<li.length;i1++){
				//console.log(li.length)
				//鼠标悬浮事件
					li[i1].onmouseover=function(){
						//判断当悬浮不在第一个li上时，去掉第一个li的默认样式
						if(i1!=0){
							li[0].className='';
						}
							//更改li的样式
							this.className='li-item'
						
					}
					//鼠标离开事件，清除li的样式
					li[i1].onmouseout=function(){
						this.className='';
						//第一个li 恢复默认值
						li[0].className='li-item'
					}
				}
			}
			

//轮播特效
			//获取父对象
			var lunBo=document.getElementById('content-item1')
			//获取ul对象
			var conItem1=document.getElementById('con1-ul')
			var tuLi=document.getElementsByClassName('xuanTu')[0].getElementsByTagName('li')
			var t;
			var left=0;
			var n=0
			function lun(){
				//循环遍历轮播选项
				for(j=0;j<tuLi.length;j++){
					tuLi[j].className='';
				}
				//当移动到最后一张图片时
				if(n==3){
					n=0
				}
				//更改当前的样式
				tuLi[n].className='conLi-bg'
				
					//图片移动
					left=-1280*n;
					conItem1.style.left=left+'px';
					n++;
					//计时器
					t=setTimeout('lun()',1000)
			}
			lun()
				//循环遍历进行鼠标的特效
				for(i=0;i<tuLi.length;i++){
					//鼠标悬浮的时候停止播放
					tuLi[i].onmouseover=function(){
						clearTimeout(t)
					}
					//鼠标离开时开始播放
					tuLi[i].onmouseout=function(){
						t=setTimeout('lun()',1000)
					}
					
				}
				function u(e){
					//清除计时器
					clearTimeout(t)
					//清除样式
					for(j=0;j<tuLi.length;j++){
					tuLi[j].className='';
					}
					//点击时当前的样式
					tuLi[e].className='conLi-bg'
					//图片移动
					left=-1280*e;
					conItem1.style.left=left+'px';
					//点击完离开当前位置的时候，播放下一张图
					n=e;
				}
	//轮播下方右侧的图片选择部分
			//创建图片路径
			var arr=['img/b4_10.jpg','img/Hall1_03.jpg','img/b4_10.jpg','img/Hall1_03.jpg']
			var box=document.getElementsByClassName('imgBig')[0]
			//获取img的对象
			var changImg=box.getElementsByTagName('img')[0]
			//获取点击对象
			var cr1Li=document.getElementsByClassName('cr1-ul')[0].getElementsByTagName('li')
			//获取悬浮对象
			var srImg=document.getElementsByClassName('cr1-ul-sp')
			//循环遍历点击对象
			function chImg(im){
				//清除样式
				for(a=0;a<cr1Li.length;a++){
					cr1Li[a].className=''
				}
				//更改样式
				cr1Li[im].className='crColor'
				//的到此时对应的图片
				changImg.src=arr[im]
			}
			//隐藏与显示
            function crXuan(){
				//循环遍历
				for(aa=0;aa<cr1Li.length;aa++){
					//闭包
					(function(can){
						//鼠标悬浮时设为显示
						cr1Li[can].onmouseover=function(){
							srImg[can].style.display='block'
						}
						//鼠标离开时设为隐藏
						cr1Li[can].onmouseout=function(){
							srImg[can].style.display='none'
						}
					})(aa)
				}
			}
			crXuan()

//文化预告部分1
			
			//定义悬浮时图片的路径
			var ar0=['img/bb1.jpg','img/bb2.jpg','img/bb3.jpg','img/bb4.jpg']
			//定义图片的默认路径
			var ar1=['img/b1.jpg','img/b2.jpg','img/b3.jpg','img/b4.jpg']
			//获取图片标签对象
			var liImage=document.getElementsByClassName('img2')
			console.log(liImage[1])
			//获取li 的对象
			var liImage2=document.getElementsByClassName('itemsL-1L')[0].getElementsByTagName('li')
			var liImage3=document.getElementsByClassName('img1')
			console.log(liImage3[2])
			//获取选项内容对象
			var yanChu=document.getElementById('yanChu').getElementsByTagName('p')
			function itemsL(){
				//遍历循环数组，给每个对象添加事件
				for(i2=0;i2<liImage2.length;i2++){
					//闭包，传参
					(function(nn){
						//添加事件
						liImage2[i2].onclick=function(){
							//遍历循环恢复默认路径
							for(l=0;l<liImage2.length;l++){
								liImage3[l].src=ar1[l]
								liImage[l].style.display='none'
								//隐藏
								yanChu[l].style.display='none'
							}
							//点击时显示的图片
							liImage[nn].style.display='block'
							//显示右侧的内容
							yanChu[nn].style.display='block';
							//判断当点击到第3个时右侧内容显示为第1个的内容
							nn0=nn
							if(nn0==2){
								nn0=0
							}else if(nn0==3){
									nn0=1      //判断当点击到第4个时右侧内容显示为第2个的内容
								}
							le=-572*nn0
							lR2Dl.style.left=le+'px'
							//过度
							lR2Dl.style.transition='all 0.5s';
							//判断点击当前选项，另一项透明度改变
							if(nn==0||nn==2){
								lR1[1].style.opacity=0.7
								lR1[0].style.opacity=0.5
								
							}else if(nn==1||nn==3){
								lR1[0].style.opacity=0.7
								lR1[1].style.opacity=0.5
							}
						}
						//鼠标悬浮的时候
						liImage3[i2].onmouseover=function(){
							for(j1=0;j1<liImage.length;j1++){
								liImage3[j1].src=ar1[j1];
							}
							liImage3[nn].src=ar0[nn]
								
						}
						//鼠标离开时
						liImage3[i2].onmouseout=function(){
							liImage3[nn].src=ar1[nn]	
						}
						
					})(i2)    //实参
					
				}
			}itemsL()



//文化预告部分2
//获取操作的对象
			var lR1=document.getElementsByClassName('lR1')[0].getElementsByTagName('span')
			//获取随着操作改变的对象
			var lR2Dl=document.getElementsByClassName('lR2')[0]
			var le=0;
			
			function spanClick(){
				//循环遍历添加事件
				for(i3=0;i3<lR1.length;i3++){
					(function(n2){
						//添加点击事件
						lR1[i3].onclick=function(){
							//移动的速度
							le=-572*n2
							lR2Dl.style.left=le+'px'
							//过度
							lR2Dl.style.transition='all 0.5s';
							//判断点击当前选项，另一项透明度改变
							if(n2==0){
								lR1[1].style.opacity=0.7
								lR1[0].style.opacity=0.5
								
							}else if(n2==1){
								lR1[0].style.opacity=0.7
								lR1[1].style.opacity=0.5
							}
						}
						//添加悬浮事件
						lR1[i3].onmouseover=function(){	
							//判断当前的透明度的值，悬浮时如果当前为0.7，则显示为1
								if(lR1[n2].style.opacity==0.7){
									lR1[n2].style.opacity=1
								}
						}
						//鼠标离开时
						lR1[i3].onmouseout=function(){
							//判断当前透明度的值，为1时，鼠标离开值为0.7
								if(lR1[n2].style.opacity==1){
									lR1[n2].style.opacity=0.7
								}
							
						}
						
					})(i3)     //实参
				}
			}
			spanClick()

//分享特效1

//获取要移动的对象
			var change=document.getElementById('change')
			//获取dl对象
			var changeDl=change.getElementsByTagName('dl')
			console.log(changeDl.length)
			//获取操作的对象
			var fx=document.getElementById('fx').getElementsByTagName('span')
			var to=0;
			var qq=0;
			function changeText(){
				//循环遍历添加事件
				for(i4=0;i4<fx.length;i4++){
					(function(n3){
						//添加点击事件
						fx[i4].onclick=function(){
							if(n3==0){
								if(to!=-(changeDl.length-1)*252){
									to-=252
								}
								
							}else if(n3==1){
								if(to!=0){
									to+=252
								}	
							}	
							//移动的速度
							change.style.top=to+'px'							
							//判断点击当前选项，另一项透明度改变
						}
						//添加悬浮事件
						fx[i4].onmouseover=function(){	
							//判断当前的透明度的值，悬浮时如果当前为0.7，则显示为1
								if(fx[n3].style.opacity==0.7){
									fx[n3].style.opacity=1
								}
						}
						//鼠标离开时
						fx[i4].onmouseout=function(){
							//判断当前透明度的值，为1时，鼠标离开值为0.7
								if(fx[n3].style.opacity==1){
									fx[n3].style.opacity=0.7
								}
							
						}
						
					})(i4)     //实参
				}
			
			}
			changeText()

//我要分享2
//获取上传对象
var sChuang=document.getElementById('sChuang')
//获取点击事件对象
var Li3=document.getElementById('lR2F-1').getElementsByTagName('li')
console.log(Li3[2])
var lR2F=document.getElementById('lR2F-1')
var ss=document.getElementById('ss')
function chuan(){
	//循环遍历，添加事件
	for(i6=0;i6<Li3.length-1;i6++){
		//函数
		(function(n5){
			Li3[i6].onclick=function(){
				//发表框的位置
				lR2F.style.bottom=135+'px'
				ss.style.visibility='visible'
				//小三角的位置
				ss.style.left=134+n5*37+'px'
			}
			
		})(i6)
	}
}
chuan()
//本地浏览
//获取点击事件对象
var quX=document.getElementById('quX')
//点击隐藏
quX.onclick=function (){
	//发表框的位置
	lR2F.style.bottom=37+'px'
	//小三角隐藏
	ss.style.visibility='hidden'
}
//分享与关闭点击
var fX=document.getElementById('fX')
 console.log(fX.innerHTML)
fX.onclick=function (){
	if(fX.innerHTML=='分享'){
		lR2F.style.transition='all 0.7s'
		lR2F.style.bottom=37+'px'
		fX.innerHTML='关闭';
	}else if(fX.innerHTML=='关闭'){
		lR2F.style.bottom=-90+'px'
		fX.innerHTML='分享';
	}
}

// 我要预约部分的特效
//获取事件对象
			var xKuang2=document.getElementsByClassName('xKuang')[0].getElementsByTagName('li')
			//获取要更改的内容对象
			var yuYue=document.getElementById('yYue')
			var n4=0;
			function changeC(){
				//循环遍历添加事件
				for(i5=0;i5<xKuang2.length;i5++){
					(function(n4){
						//点击事件
						xKuang2[i5].onclick=function(){
							//通过更改位置的值来更改内容
							left2=-272*n4
							yuYue.style.left=left2+'px'
							//清除样式
							for(h1=0;h1<xKuang2.length;h1++){
								xKuang2[h1].className=''
							}
							//添加属性，点击时透明度为1
							xKuang2[n4].style.opacity=1
							//更改样式
							xKuang2[n4].className='changeColor'
						}
						//鼠标悬浮事件
						xKuang2[i5].onmouseover=function(){
							//循环遍历将透明度设为1
							for(h=0;h<xKuang2.length;h++){
								xKuang2[h].style.opacity=1
							}
							//判断当前的样式，设置相应的透明度
							if(xKuang2[n4].className=='changeColor'){
								xKuang2[n4].style.opacity=1   
							}else{
								xKuang2[n4].style.opacity=0.6
							}
						}
						//鼠标离开事件
						xKuang2[i5].onmouseout=function(){
							//透明度设为1
								xKuang2[n4].style.opacity=1
						}
					})(i5)   //实参 i5
				}
			}
			changeC() //调用函数

//返回顶部
			//获取向上滚动的距离
			window.onscroll=function(){
				var stop=document.body.scrollTop;
				//页面可是高度
				var winH=document.documentElement.clientHeight;
				//设置top
				var toplink=document.getElementById('top');
				//判断位置
				if(stop>=winH){
					toplink.style.display='block';
				}else{
					toplink.style.display='none';
				}
				
				toplink.style.top=stop+winH/3*2+'px';
			}















