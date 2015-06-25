(function() {
  'use strict';

  angular
  .module('angularTodoGulp')
  .controller('MainController', function($scope) {
    $scope.todos = ['Item1', 'Item2', 'Item3'];

    $scope.addTodo = function() {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
  });

})();
