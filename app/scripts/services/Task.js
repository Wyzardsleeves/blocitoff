(function(){
    function Task($firebaseArray){
        //var ref = firebase.database().ref().child("tasks"); //unordered
        var ref = firebase.database().ref().child("tasks").orderByChild("priority");
        var tasks = $firebaseArray(ref);

        //addTask function
        function addTask(newCont, newDes, newPri, newTime){
            tasks.$add({
                content: newCont, 
                description: newDes, 
                priority: newPri,
                status: "active",
                madeAt: newTime
            });
            document.getElementsByClassName("input")[0].reset();
        };

        //marks task as "completed" or restores it as "active
        function toggleStatus(task){
            if(task.status == "active"){
                task.status = "completed";
            }
            else if(task.status == "completed"){
                task.status = "active";
            }
            tasks.$save(task);
        };

        function demolish(task){
            tasks.$remove(task);
        }        

        return{
            all: tasks,                 //gets the task array
            addTask: addTask,           //adds the task
            toggleStatus: toggleStatus, //changes status to completed
            demolish: demolish
        };
    }

    angular
        .module('blocitoff')
        .factory('Task', ['$firebaseArray', Task])
})();