;( function() {
    'use strict';
  angular.module('todoApp', [])
  .controller('TodoController', function(){
    var vm = this;
    vm.tasks = [
    
    ];
    
    vm.addNewTask = function(){
      vm.tasks.push(vm.newTask);
      vm.newTask = null;
    };
    
    vm.removeTodo = function(todo){
      var index = vm.tasks.indexOf(todo);
      vm.tasks.splice(index, 1);
    };
  });

  }()); 