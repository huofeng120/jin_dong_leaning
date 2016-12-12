$(function(){
	//广告位
	//获取点击对象,点击时隐藏广告位
	$('#ad span').click(function(){
		$('#ad').fadeOut()
	})
	//横幅左侧
	//隐藏与显示
	$('.bannerLeft').hover(function(){
		$('.cityDown').show();
	},function(){
		$('.cityDown').hide();
	})
	//点击的时候
	$('.cityDown a').click(function(){
		//清除样式
		$('.cityDown a').removeClass('active');
		//更改样式
		$(this).addClass('active');
		var cityText=$(this).text();
	$('.city span').text(cityText);
	});
	//轮播左侧 菜单部分
		$('.fs-left li').hover(function(){
			//得到当前下标
			navSub=$(this).index()
			$('.liCentent').eq(navSub).show()  //显示对应的内容
		},function(){
			$('.liCentent').eq(navSub).hide()     //鼠标从li上离开时隐藏
			$('.liCentent').mouseover(function(){   //鼠标在内容上时显示
				$('.liCentent').eq(navSub).show()
			})
			$('.liCentent').mouseout(function(){    //鼠标不在内容上时隐藏
				$('.liCentent').eq(navSub).hide()
			})
			
		})

})
//轮播
$(function(){
		var i=0;
		var t;
		//鼠标悬浮时
		$('.playItems li').hover(playGo)
		function playGo(){
			clearTimeout(t)
			//得到此时的下标
			i=$(this).index();
			//添加样式
			u()
		}
		playGo()
		//悬浮在选项上时播放对应的图片
		//箭头
		$('.play').hover(function(){
			clearTimeout(t)
			$('.play .jiao').show()
		},function(){
			$('.play .jiao').hide()
			t=setTimeout(play,1500)
		})
		//箭头点击事件
		$('.play .lj').click(function(){
			//判断
			i-=1;
			if(i<0){
				i=7
			}
			//调用函数
				u()
			})
			$('.play .rj').click(function(){
				//判断
				i+=1;
				if(i>7){
					i=0
				}
				u()		
			})
			//自动播放
			function play(){
				i++;
				if(i>7){
					i=0;
				}
				//调用样式函数
				u()
				//计时器
				t=setTimeout(play,1500)
			}
			play()  //函数的调用
			//被调用的函数，样式
			function u(){
				////清除样式
				$('.playItems li').removeClass('playItems-bg');
				//添加样式
				$('.playItems li').eq(i).addClass('playItems-bg');
				//将所有图片层级设为0
				$('.playImg li').css({'z-index':2,'opacity':0})
				//提高显示图片层级
				$('.playImg li').eq(i).css({'z-index':2,'opacity':1})
			}	
	})		
//促销广告部分
	$(function(){
	//悬浮到广告部分上时
	$('.rMiddle .gGao').hover(function(){
		$('.rMiddle i').css('left','53px');
		$('.rMiddle .content2').show();
		$('.rMiddle .content1').hide();
	})
		//悬浮到促销部分上时
		$('.rMiddle .cXiao').hover(function(){
			$('.rMiddle i').css('left','0px')
			$('.rMiddle .content2').hide();
			$('.rMiddle .content1').show();
		})
})
//轮播右侧底部游戏部分		
$(function(){
	//显示隐藏部分内容
	$('.sUl .goTop').bind({mouseover:p1,mouseleave:p2})
	function p1(){
		//清除css样式
		$('.sUl li').find('span').css({'border-top':'2px solid #fff'})
		//鼠标ul悬浮向上移动
		$('.sUl').css({'margin-top':'-40px','transition':'all .2s'})
		//隐藏部分显示出来
		$('.rBottom .serItems').css({'top':'30px','transition':'all .2s'})
		//添加css样式
		$(this).find('span').css({'border-top':'2px #e01121 solid'})
	}
	//当鼠标离开时添加回来悬浮事件
	function p2(){
		$('.sUl .goTop').bind('mouseover',p1)
	}
	//右侧服务下游戏部分
	$('.serItems p a').hover(function(){
		//隐藏小三角
		$('.serItems p a').find('i:first').hide()
		//清除样式
		$('.serItems p a').removeClass('yxBg')
		//添加样式
		$(this).addClass('yxBg')
		//显示小三角
		$(this).find('i:first').show()
	})
	//关闭
	$('.serItems .close').click(function(){
		//清除样式
		$('.sUl li').find('span').css({'border-top':'2px solid #fff'})
		//ul返回初始位置
		$('.sUl').css({'margin-top':'0px','transition':'all .2s'})
		//隐藏部分返回初始位置
		$('.rBottom .serItems').css({'top':'100%','transition':'all .2s'})
		//点击完成以后删除顶部li的悬浮事件
		$('.sUl .goTop').unbind('mouseover')
	})
})
//京东抢购倒计时
$(function(){
	function day(){
		//创建倒计时时间
		var djs=[0,4,8,12,16,20,24]
		var day=new Date();    //创建一个当前时间
		var year=day.getFullYear(); //年
		var mon=day.getMonth(); //月
		var d1=day.getDate();    //日
		var h1=day.getHours();   //时
		//判断倒计时时间
		for(i=0;i<djs.length;i++){
			if(h1>=djs[i]&&h1<djs[i+1]){
				h2=djs[i+1]
			}
		}
		var newDay=new Date(year,mon,d1,h2,0,0)   //创建一个将来时间
		var d=(newDay-day)/1000			//相差的时间单位为秒
		h=parseInt(d/60/60)      //小时
		m=parseInt((d-h*60*60)/60)  //分钟
		s=parseInt(d-h*60*60-m*60)  //秒
		if(h<10&&h>=0){
			$('.msR .hours').text('0'+h)
		}else{
			$('.msR .hours').text(h)
		}
		if(m<10&&m>=0){
			$('.msR .minutes').text('0'+m)
		}else{
			$('.msR .minutes').text(m)
		}
		if(s<10&&s>=0){
			$('.msR .seconds').text('0'+s)
		}else{
			$('.msR .seconds').text(s)
		}
	}
	setInterval(day,1000)
})
//排行榜
$(function(){
	//给a添加hover事件
	$('.list-item1 a').mouseover(function(){
		var listNumber=$(this).index()   //获得当前的下标
		$('.list-item1 i').css('left',78*listNumber+'px') //更改left值来移动到相应的位置
		$('.list-item2').hide()
		$('.list-item2').eq(listNumber).show()
	})			
})
//爱生活 商标
$(function(){
	//点击右键头
	$('.jR').each(function(i){
		var wid=parseInt($('.shangB:eq('+i+')').css('width'))
				$('.shangB:eq('+i+') > div').css('margin-left',-wid+'px')
		$('.jR').eq(i).click(function(){
			
			$('.shangB:eq('+i+') > div').stop().animate({'margin-left':-wid*2+'px'},400,function(){
				var first=$('.content4:eq('+i+') ul:first')		//找到第一个ul
				$('.shangB:eq('+i+') > div').append(first)		//末尾追加一个ul
				$('.shangB:eq('+i+') > div').css('margin-left',-wid-25+'px')  //marginleft 值
				//倒回
				$('.shangB:eq('+i+') > div').stop().animate({'margin-left':-wid+'px'},400,function(){})
			})
		})
	})
	//点击左箭头
	$('.jL').each(function(i){
		var wid=parseInt($('.shangB:eq('+i+')').css('width'))
				$('.shangB:eq('+i+') > div').css('margin-left',-wid+'px')
		$('.jL').eq(i).click(function(){
			
			$('.shangB:eq('+i+') > div').stop().animate({'margin-left':'0px'},400,function(){
				var last=$('.content4:eq('+i+') ul:last')			//找到最后的ul
				$('.shangB:eq('+i+') > div').prepend(last)		//最前面追加一个ul
				$('.shangB:eq('+i+') > div').css('margin-left',-wid+25+'px')  //marginleft 值
				//倒回
				$('.shangB:eq('+i+') > div').stop().animate({'margin-left':-wid+'px'},400,function(){})
			})
		})
	})
})

//鼠标滚动事件 搜索框
$(function(){
	$(window).scroll(function(){
		var clienH=document.documentElement.clientHeight //可视高度 一屏的高度
		var scrTop=$('body').scrollTop()  //向上滚动的距离
		//判断当滚动的距离大于一屏的高度时显示搜索框
		if(scrTop>=clienH){
			$('.fix_seach').slideDown(300)  //大于等于时显示
		}else{
			$('.fix_seach').slideUp(300)    //小于时隐藏
			}
	})
	
})

//固定右侧工具栏
$(function(){
	//鼠标悬浮
	$('.fixedR li').mouseover(function(){
		$(this).find('a').css('background-color','#c81623')      //更改背景色
		$(this).find('.toLeft').css({'transition':'all .5s','right':'26px'})   //平移
	})
	//鼠标离开
	$('.fixedR li').mouseout(function(){
		$(this).find('a').css({'background-color':'#7a6e6e'})    //更改背景色
		$(this).find('.toLeft').css({'right':'-62px','transition':'right .5s'})   //平移
		$(this).find('.lastBg').css('background-color','#c81623')   //有奖活动的背景色不变
	})
	//点击时调用的函数
	//显示
	function moved(i){
		//更改父容器样式左移
		$('.fixedR').css('right','0px')
		//更改相应内容的样式
		$('.fixedR .navCon').siblings().css({'left':'100%','z-index':'222'})
		$('.fixedR .navCon').eq(i).css({'left':'0','z-index':'255'})
	}
	//关闭
	function close(){
		$('.fixedR').css('right','-270px')
	}
	//点击事件显示
	$('.fixedR .move').click(function(){
		//得到当前的下标
		var moveNumber=$('.fixedR .move').index($(this))
		//调用函数传值
		moved(moveNumber)
	})
	//点击关闭
	$('.fixedR .close').click(close)
	//点击其他时关闭
	$('.fixedR').siblings().click(close)
	//登录弹框
	//显示
	$('.showRg').click(function(){
		$('.register').show()
	})
	//隐藏
	$('.formClose').click(function(){
		$('.register').hide()
	})

	
	//账号登录,扫描登录
	//点击登录方式时
	var t;
	$('.form-item1 span').click(function(){
		//清除样式
		$('.form-item1 span').removeClass('font1')
		$(this).siblings().css({'color':'#666','font-weight':'400'})
		//添加样式
		$(this).addClass('font1')
		//得到当前的下标
		var formSub=$(this).index()
		//更换内容
		$('.formCon .conItems').hide()
		$('.formCon .conItems').eq(formSub).show();
		if(formSub==0){
			//清除计时器
			clearTimeout(t)
			clearTimeout(t1)
			//初始状态
			$('.sweepImg>div').css('left','0')
			if($('.sweepImg>div').css('left','0')){
				//显示第二张
				var t1=setTimeout(imgChange2,0)
			}
			//计时器
			t=setTimeout(imgChange1,2000)
		}
	})
	//鼠标悬浮效果
	$('.form-item1 span').hover(function(){
		//添加样式
		$(this).css({'color':'#e4393c','font-weight':'700'})
	},function(){
		//清除样式
		$(this).css({'color':'#666','font-weight':'400'})
		//判断
		if($(this).hasClass('font1')){
			//添加样式
			$(this).css({'color':'#e4393c','font-weight':'700'})
		}
	})
	//账号登录 输入框 
		$('.zhangHu .user').keyup(key)
			$('.zhangHu .passW').keydown(key)
			//调用键盘函数
			function key(){
				var value=$('.zhangHu .change').val()
				if(value==''){
					//内容为空时隐藏
					$(this).find('b').hide()
				}else{
					//内容为非空时显示
					$(this).find('b').show()
				}
		}
		//循环遍历
		$('.zhangHu .change').each(function(i){
			//添加事件
			$('.zhangHu b').eq(i).click(function(){
				//input的value值
				$(this).parent().find('input').val('')
					//判断
					if($(this).parent().find('input').val('')){
						//隐藏-
						$(this).hide()
					}
			})
		})
		//扫描登录 图片样式函数
			function imgChange1(){
				//隐藏第二张
				$('.sweepImg>img').hide()
				//第一张的位置
				$('.sweepImg>div').stop().animate({'left':'70px'},500,function(){})
			}
			function imgChange2(){
				$('.sweepImg>img').show();
			}
		//悬浮事件改变图片
		$('.sweepImg').hover(function(){
			////第一张的位置 初始状态
			$('.sweepImg>div').stop().animate({'left':'0'},500,function(){
				imgChange2()
			})
		},function(){
			//先隐藏
			$('.sweepImg>img').hide()
			//第一张的位置
			$('.sweepImg>div').stop().animate({'left':'70px'},500,function(){})
		})
})

//固定左侧楼梯
$(function(){
	//声明一个数组
	var k=new Array();
	//赋值
	$('.lt').each(function(i){
		k.push($('.lt').eq(i).offset().top)
	})
	//声明一个变量
	var rr=0;
	//	点击时
	$('.fixedL li').click(function(){
		//边框的颜色
		$('.fixedL a').eq(rr+1).css('border-color','#ccc')
		$('.fixedL li').removeClass('bgcL')    //清除样式
		$(this).addClass('bgcL')               //添加样式
		rr=$(this).index()              //当前的下标
		$('.fixedL a').eq(rr).css('border-color','#d70b1c')
		//边框的颜色
		$('.fixedL a').eq(rr+1).css('border-color','#d70b1c')
		$('body,html').animate({'scrollTop':k[rr]-50},400)  //滚动到相应位置
	})
	//鼠标悬浮
	$('.fixedL a').hover(function(){
		//得到下标
		d=$('.fixedL a').index($(this))
		//边框的颜色
		$(this).css('border-color','#d70b1c')
		$('.fixedL a').eq(d+1).css('border-color','#d70b1c')
		$(this).addClass('bgcL')     //添加样式
	},function(){
		$('.fixedL a').removeClass('bgcL')    //清除样式
		$('.fixedL a').css('border-color','#ccc')
	})
	
	//滚动事件
	$(window).scroll(function(){
		//变宽的颜色
		$('.fixedL a').css('border-color','#ccc')
		var scrTop=$(document).scrollTop()  //向上滚动的距离
		//判断当滚动的距离大于一屏的高度时显示搜索框
		if(scrTop>=1600){
			$('.fixedL').fadeIn(300)  //大于等于时显示
			
		}else{
			$('.fixedL').fadeOut(300)    //小于时隐藏
		}
		//循环比较
		for(var uu=0;uu<=k.length;uu++){
			//top的值与滚动的距离比较
			if(k[uu]>=scrTop){
				//满足 赋值
				rr=uu;
				//跳出 循环
				break;
			}
		}
		//边框的颜色
		$('.fixedL a').eq(rr).css('border-color','#d70b1c')
		$('.fixedL a').eq(rr+1).css('border-color','#d70b1c')
		//清除样式
		$('.fixedL li').removeClass('bgcL');
		//添加样式
		$('.fixedL li').eq(rr).addClass('bgcL');
	})	
})

//瀑布流
$(function(){
	$(window).bind('scroll',function(){
		//得到bottom值
		var bottom=$(document).height()-$(window).height()-$(document).scrollTop()
		var doTop=$(document).scrollTop()
		function pubu(){
		
		for(n=0;n<5;n++){
			i=Math.ceil(Math.random()*25)-1
			//图片
			var tuP=406+i
			//介绍
			var jieS=$('.continue li').eq(i).find('p:first').html()
			//价格
			var jiaG=$('.continue li').eq(i).find('p:last').html()
			//添加
			$('.continue ul').append('<li><a href="###"><img src=img/'+tuP+'.jpg width="220px" height="220px" title='+jieS+' alt='+jieS+'><p>'+jieS+'</p><p>'+jiaG+'</p></a></li>')
			$('.continue li').fadeIn()
			}
			
	}
	//调用函数的条件
	if(bottom<=300&&doTop<=15000){
				pubu();
				pubu();
				pubu()
			}
	})
})





























