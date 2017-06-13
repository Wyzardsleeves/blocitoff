(function(){
    function Task($firebaseArray){
        var ref = firebase.database().ref().child("tasks");
        var tasks = $firebaseArray(ref);

        function addTask(newCont){
            tasks.$add({content: newCont});
            document.getElementsByClassName("input")[0].reset();
        };

        return{
            //gets the task array
            all: tasks,

            //adds the task (I hope)
            addTask: addTask              
        };
    }

    angular
        .module('blocitoff')
        .factory('Task', ['$firebaseArray', Task])
})();