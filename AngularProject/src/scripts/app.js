
var demoTpl = require('./tpls/show.string');
var commonUtil = require('./utils/common.util.js');
commonUtil.render(demoTpl);
var myApp = angular.module('myApp', ['ngRoute']);

//自定义指令
myApp.directive('hello',function(){
	return {
		restrict: 'EAC',//zhiLingName可当标签(E)  也可当属性(A)  也可以是class(C)//没有这条不能用作class
		template : '<div><div ng-show="showMe">hello zhiling</div><button ng-click="toggle()">点我</button></div>',
		//templateUrl : '/src/scripts/tpls/directiveTpl.html', //指定的页面
		replace:true, //去掉指令标签  
		link:function(scope,elem,attrs){
			 scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }
		},
		controller:function($scope){
			$scope.showMe = true
		}
		
	}
});

myApp.directive('ads',function(){
	return {
		restrict: 'EAC',
		//template : '<div class="smallMark"><div class="flag"><div class="headImg"><img src="/img/home.png"/></div><div class="mes"><h4>个人微店</h4><h4>现已全新上线!</h4></div></div><div class="flag_body"><img src="/img/erwei.png"/><div class="flag_text"><img src="/img/phone.png"/><p>扫一扫,立即体验</p></div><div class="flag_bottom"><p>扫码关注免费开通个人微店</p><p>同步支持微信在线投保下单</p></div></div></div>',
		templateUrl : './src/scripts/tpls/directiveTpl/directive.html', 
		replace:true //去掉指令标签  
		
	}
});


//自定义service
myApp.factory('dataService',function(){
	var products = [
		{"name":"平安家居综合保障计划(白金计划)","company":"人民健康保险","big":""},
		{"name":"医疗美容意外伤害保险介入治疗方案","company":"中国人寿保险","big":""},
		{"name":"人保健康守护天使少儿特定疾病保险","company":"人民健康保险","big":"健康保险"},
		{"name":"瑞泰优选之选投资连结保险（B款）","company":"瑞泰人寿保险","big":"投连保险"}
	];
	var _getPro = function(){
		return products
	};
	var _setPro = function(name,company,big){
		user.name = name;
		user.company = company;	
		user.big = big;
	};
	return{
		get:_getPro,
		set:_setPro
	}
	
});
myApp.controller('proContainer',function($scope,dataService){
	$scope.products = dataService.get();
});
//路由 ngRoute
myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/home',{
			templateUrl:'/src/scripts/tpls/route/home.html',
			controller:'listController'
		})
		.when('/income',{
			templateUrl:'/src/scripts/tpls/route/income.html',
			controller:'listController'
		})
		.when('/pro',{
			templateUrl:'/src/scripts/tpls/route/pro.html',
			controller:'listController'
		})
		.when('/car',{
			templateUrl:'/src/scripts/tpls/route/car.html',
			controller:'listController'
		})
		.when('/group',{
			templateUrl:'/src/scripts/tpls/route/group.html',
			controller:'listController'
		})
		.when('/helpCard',{
			templateUrl:'/src/scripts/tpls/route/helpCard.html',
			controller:'listController'
		})
		.when('/invite',{
			templateUrl:'/src/scripts/tpls/route/invite.html',
			controller:'listController'
		})
		.when('/extend',{
			templateUrl:'/src/scripts/tpls/route/extend.html',
			controller:'listController'
		})
		.when('/mylist',{
			templateUrl:'/src/scripts/tpls/route/mylist.html',
			controller:'listController'
		})
		.when('/groupList',{
			templateUrl:'/src/scripts/tpls/route/groupList.html',
			controller:'listController'
		})
		.when('/website',{
			templateUrl:'/src/scripts/tpls/route/website.html',
			controller:'listController'
		})
		.when('/person',{
			templateUrl:'/src/scripts/tpls/route/person.html',
			controller:'listController'
		})
		.when('/myGroup',{
			templateUrl:'/src/scripts/tpls/route/myGroup.html',
			controller:'listController'
		})
		.when('/my',{
			templateUrl:'/src/scripts/tpls/route/my.html',
			controller:'listController'
		})
		.when('/serve',{
			templateUrl:'/src/scripts/tpls/route/serve.html',
			controller:'listController'
		})
		.when('/help',{
			templateUrl:'/src/scripts/tpls/route/help.html',
			controller:'listController'
		})
		.otherwise({
	      redirectTo: '/home'
	    })
}]);

myApp.controller('listController',['$scope','$http',function($scope,$http){
	$http({
		url:'/mock/navList.json',
		method:'get'
	})
	.then(function(res){
		$scope.lists= res.data;
	})

	$scope.message = "lily"
}]);

myApp.controller('danziController',['$scope','$http',function($scope,$http){
	$http({
		url:'/mock/home.json',
		method:'get'
	})
	.then(function(res){
		$scope.baodans= res.data;
	})
	
	$scope.lily = "-date";
}]);
myApp.controller('carContainer',['$scope',function($scope){
	$scope.template = "/src/scripts/tpls/route/mm.string"
	//http://localhost:8888/src/scripts/tpls/route/car.html
}]);
myApp.controller('helpContainer',['$scope',function($scope){
	$scope.arr = [1,3,2,1,34,5];
	
}]);
myApp.filter('timesFilter', function(){
    return function(item, times){
        var result = 0;
        for(var i = 0; i < times; i++){
            result += item;
        }
        return result;
    }
})


myApp.controller('groupContainer',['$scope',function($scope){
	var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '销售列表'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                //data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            roseType: 'angle',
            series: [{
                name: '销量',
                type: 'pie',
                //data: [5, 20, 36, 10, 10, 20]
                data:[
	                {value:400, name:'搜索引擎'},
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:274, name:'联盟广告'},
	                {value:235, name:'视频广告'}
	            ]
            }],
            itemStyle: {
//			    normal: {
//			        // 阴影的大小
//			        shadowBlur: 200,
//			        // 阴影水平方向上的偏移
//			        shadowOffsetX: 0,
//			        // 阴影垂直方向上的偏移
//			        shadowOffsetY: 0,
//			        // 阴影颜色
//			        shadowColor: 'rgba(0, 0, 0, 0.5)'
//			    }
				 emphasis: {
			        shadowBlur: 200,
			        shadowColor: 'rgba(0, 0, 0, 0.5)'
			    }
			}
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}])