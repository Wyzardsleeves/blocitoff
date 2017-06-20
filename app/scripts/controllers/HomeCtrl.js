(function(){
    function HomeCtrl($scope, Task){
        this.tasks = Task.all;
        this.addTask = Task.addTask;

        //sets task status to "complete
        $scope.markOff = Task.toggleStatus;

        /* this one works
        //sets task status to "complete
        $scope.markOff = function(task){
            if(task.status == "active"){
                task.status = "completed";
            }
            else if(task.status == "completed"){
                task.status = "active";
            }
            $save(task);
        };
        */

        //sort function?

    };

    angular
        .module('blocitoff')
        .controller('HomeCtrl', HomeCtrl);
})();
