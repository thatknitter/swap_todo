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
    },
    {
      name: 'Get Address',
      desc: 'Get Swapners address',
      due: 'Friday'
    },
    {
      name: 'Get stuff',
      desc: 'get stuff for swap box',
      due: 'Friday'
    }
    ];
  });

  }()); 