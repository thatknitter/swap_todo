;( function() {
    'use strict';
  angular.module('todoApp', [])
  .controller('TodoController', function(){
    var vm = this;
    vm.tasks = [
    {
      name: 'Knit Shawl',
      desc: 'Finish that bad boy!',
      due: 'Friday'
    }
    ];
    
    vm.addNewTask = function(){
      vm.tasks.push(vm.newTask);
    };
  });

  }()); 