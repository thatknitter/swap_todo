;( function() {
    'use strict';
    angular.module('todoApp', []).controller('TodoController', function($http) {
      var vm = this;
      vm.tasks = [];
      vm.info = [];
      
      $http.get('https://swaptodo.firebaseio.com/swaptodo.json')
        .success(function(data){
          vm.swaptodo = data;
        })
        .error(function(err){
          console.log('well shit' + err);
        });

      vm.addNewTask = function() {
        $http.post(vm.swaptodothing, vm.newTask)
        .success(function(data){
          vm.swaptodotasks[data.name] = vm.newTask;
        });
        vm.tasks.push(vm.newTask);
        vm.newTask = null;
      };

      vm.removeTodo = function(todo) {
        var index = vm.tasks.indexOf(todo);
        vm.tasks.splice(index, 1);
      };

      vm.addInfo = function() {
        $http.post('https://swaptodo.firebaseio.com/swaptodo.json', vm.newInfo)
        .success(function(data){
          console.log(data);
          console.log(vm.swaptodo);
          vm.swaptodo[data.name] = vm.newInfo;
          vm.swaptodothing = 'https://swaptodo.firebaseio.com/swaptodo/' + data.name + '.json';
        });
        vm.info.push(vm.newInfo);
        
      };
    });

  }());
