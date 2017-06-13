(function(){
    function HomeCtrl($scope, Task){
        this.tasks = Task.all;
        this.addTask = Task.addTask;
        this.addTask.content = '';

        //marks the task as completed
        this.markOff = function(completed){
            var moveToComp = completed;
            completed.$remove();
        };
    };

    angular
        .module('blocitoff')
        .controller('HomeCtrl', HomeCtrl);
})();