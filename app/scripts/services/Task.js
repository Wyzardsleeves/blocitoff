(function(){
    function Task($firebaseArray){
        var ref = firebase.database().ref().child("tasks");
        var tasks = $firebaseArray(ref);

        //addTask function
        function addTask(newCont, newDes, newPri){
            tasks.$add({
                content: newCont, 
                description: newDes, 
                priority: newPri 
            });
            document.getElementsByClassName("input")[0].reset();
        };

        return{
            all: tasks,         //gets the task array
            addTask: addTask,   //adds the task
        };
    }

    angular
        .module('blocitoff')
        .factory('Task', ['$firebaseArray', Task])
})();