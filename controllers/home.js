app.controller("homeController",['$scope','$state','$http',function ($scope,$state,$http) {
	$scope.$parent.isLogin=false;
	$http.get("jsonfiles/menus.json").then(function(response) {
			var menus=response.data;
			$.each(menus,function(){
				if(this.username===$scope.$parent.user){
					$scope.$parent.menus=this.menus;
				}
			});
		}, function myError(response) {
			console.log(response);
		});
	$scope.menuClick=function(){
		$state.go("home");
	}
}]);
