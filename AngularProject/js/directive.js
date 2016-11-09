//var myApp = angular.module('myApp', ['ngRoute']);

myApp.directive('ads',function(){
	return {
		restrict: 'EAC',
		//template : '<div class="smallMark"><div class="flag"><div class="headImg"><img src="/img/home.png"/></div><div class="mes"><h4>个人微店</h4><h4>现已全新上线!</h4></div></div><div class="flag_body"><img src="/img/erwei.png"/><div class="flag_text"><img src="/img/phone.png"/><p>扫一扫,立即体验</p></div><div class="flag_bottom"><p>扫码关注免费开通个人微店</p><p>同步支持微信在线投保下单</p></div></div></div>',
		templateUrl : '/src/scripts/tpls/directiveTpl/directive.html', 
		replace:true //去掉指令标签  
		
	}
})