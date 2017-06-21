(function(){
    function Task($firebaseArray){
        //var ref = firebase.database().ref().child("tasks"); //unordered
        var ref = firebase.database().ref().child("tasks").orderByChild("priority");
        var tasks = $firebaseArray(ref);

        //addTask function
        function addTask(newCont, newDes, newPri){
            tasks.$add({
                content: newCont, 
                description: newDes, 
                priority: newPri,
                status: "active"
            });
            document.getElementsByClassName("input")[0].reset();
        };

        function toggleStatus(task){
            if(task.status == "active"){
                task.status = "completed";
            }
            else if(task.status == "completed"){
                task.status = "active";
            }
            tasks.$save(task);
        };

        return{
            all: tasks,                 //gets the task array
            addTask: addTask,           //adds the task
            toggleStatus: toggleStatus  //changes status
        };
    }

    angular
        .module('blocitoff')
        .factory('Task', ['$firebaseArray', Task])
})();