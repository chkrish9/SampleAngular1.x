app.controller("loginController",['$scope','$state','$http',function($scope,$state,$http){
	$scope.$parent.isLogin=true;
	$scope.$parent.menus=[];
	$scope.loginClick=function(){
		$http.get("jsonfiles/users.json").then(function(response) {
			var users=response.data;
			$.each(users,function(){
				if($scope.username==this.username && $scope.password==this.password){
					$scope.$parent.user=$scope.username;
					$state.go("home");
				}
			});
			
		}, function myError(response) {
			console.log(response);
		});
	}
}]);