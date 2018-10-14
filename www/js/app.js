// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .controller('listContr', function($scope,$ionicModal){
        $scope.tasks = [
            {title: 'Item1', adress:'street1',description:'some txt'},
            {title: 'Item2', adress:'street2',description:'some txt'},
            {title: 'Item3', adress:'street4',description:'some txt'},
            {title: 'Item4', adress:'street4',description:'some txt'},
        ];

        $ionicModal.fromTemplateUrl('task/task.html', function(modal){
            $scope.taskModal = modal;
        },{
            scope: $scope,
            animation: 'slide-in-right'
        });

        $scope.currentTaskId=-1;

        $scope.addNewTask = function(){
            $scope.taskModal.show();
            $scope.activeTask={
                title: "",
                adress: "",
                description: ""
            }
            $scope.currentTaskId=-1;
        }

        $scope.closeTask = function(){
            $scope.taskModal.hide();
        }
        $scope.openTask = function (id) {
            var task = $scope.tasks[id];
            $scope.currentTaskId=id;
            $scope.activeTask={
                title: task.title,
                adress: task.adress,
                description: task.description
            }
            $scope.taskModal.show();
        }
        $scope.deleteTask = function (id) {
            $scope.tasks.splice(id,1);
        }
        $scope.submitTask = function (task) {
            if($scope.currentTaskId==-1)
            {
                if(task.title=="" && task.adress=="" && task.description=="" )
                {
                    alert("Empty");

                }
                else{
                    $scope.tasks.push({
                        title: task.title,
                        adress: task.adress,
                        description: task.description
                    });
                }
            }
            else
            {
                var id = $scope.currentTaskId;
                $scope.tasks[id].title=task.title;
                $scope.tasks[id].adress=task.adress;
                $scope.tasks[id].description=task.description;
            }
            $scope.taskModal.hide();
        }
    })