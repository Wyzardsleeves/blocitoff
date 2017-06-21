(function(){
    function HomeCtrl($scope, Task){
        this.tasks = Task.all;
        this.addTask = Task.addTask;

        //sets task status to "complete
        $scope.markOff = Task.toggleStatus;
    };

    angular
        .module('blocitoff')
        .controller('HomeCtrl', HomeCtrl);
})();
