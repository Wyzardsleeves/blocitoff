(function(){
    function HomeCtrl($scope, $interval, Task){
        this.tasks = Task.all;
        this.addTask = Task.addTask;
        this.makeExpired = Task.makeExpired;

        //sets task status to "complete
        $scope.markOff = Task.toggleStatus;
        $scope.destroy = Task.demolish;

        //current time
        $scope.now = Date.now();

        $interval(function(){
            $scope.now = Date.now();
        }, 5000);
    };

    angular
        .module('blocitoff')
        .controller('HomeCtrl', HomeCtrl);
})();
