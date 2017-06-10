var app=angular.module("app",["ui.router"]);
app.controller('appController',['$scope',function($scope){
	$scope.isLogin=true;
	$scope.menus=[];
	$scope.user="";
}]);