var app = angular.module("myApp", []);
app.controller('myCtrl',function($scope){
    console.log("My controller.....");
    $scope.users = [
        {name:"Thi",email:"dangkimthi@gmail.com",fullname:"Dang kim thi"},
        {name:"ThiDK",email:"thidk@gmail.com",fullname:"Thi DK"},
        {name:"Codelean",email:"codelean@gmail.com",fullname:"Code lean"}
    ];
    $scope.addUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser= {};
        $scope.message ="New User Added successfully";
    };
    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user;

    };
    $scope.editUser= function(){
        $scope.message ="User Edited successfully";

    };
    $scope.deleteUser = function(){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
        $scope.message ="User Delete successfully";
    };
    $scope.clearMessage = function() {
        $scope.message = "";
    };
})