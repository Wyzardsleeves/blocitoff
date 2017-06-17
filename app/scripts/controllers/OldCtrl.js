(function(){
    function OldCtrl($scope, Task){
        this.tasks = Task.all;
        this.addTask = Task.addTask;
        this.setStatus = Task.status;

        //sort function
        

        //marks the task as completed
        this.markOff = function(completed){
            var moveToComp = completed;
            completed.$remove();
        };
    };

    angular
        .module('blocitoff')
        .controller('OldCtrl', OldCtrl);
})();