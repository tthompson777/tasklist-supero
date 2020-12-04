function todoCtrl($scope) {

  // Modelo com as tarefas
  $scope.todos = [
    {text:'Criar nova tela para usuários', check:false, detalhes:'Estes são os datelhas desta tarefa.', status:'New', startDate:new Date(), endDate:''},
    {text:'Adicionar novos recursos definidos na reunião', check:false, detalhes:'Datelhas para criar nova tela para usuários.', status:'In Progress', startDate:new Date(), endDate:''},
    {text:'Reunião com toda a equipe', check:false, detalhes:'Especificações para a reunião com toda a equipe.', status:'Resolved', startDate:new Date(), endDate:new Date()}
  ];

  $scope.currentText = '';
  $scope.currentDetails = '';
 
  // Adicionar
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, check:false, status:'New', startDate:new Date(), detalhes:''});
    $scope.todoText = '';
    $scope.detalhes = '';
  };
 
  // Botão Excluir
  $scope.excluir = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.check) $scope.todos.push(todo);
    });
    document.getElementById('todoDetalhes').style.visibility = 'hidden';
  };

  // Botão Detalhes
  $scope.detalhes = function(text) {
    var result = $scope.todos.filter(function (obj) {
      return obj.text == text;
    })
    $scope.currentText = result[0].text;
    $scope.currentStatus = result[0].status;
    $scope.currentCriacao = result[0].startDate;
    $scope.currentConclusao = result[0].endDate;
    $scope.currentDetails = result[0].detalhes;
    document.getElementById('todoDetalhes').style.visibility = 'visible';
  }

  // Fechar Detalhes
  $scope.closeDetalhes = function() {
    $scope.currentText = '';
    $scope.currentDetails = '';
    document.getElementById('todoDetalhes').style.visibility = 'hidden';
  }

  // Adicionar Detalhes
  $scope.addDetalhes = function(text) {
    var result = $scope.todos.filter(function (obj) {
      return obj.text == text;
    })
    angular.forEach($scope.todos, function(todo) {
      if(todo.text == text) {
        todo.detalhes = $scope.currentDetails;
      }
    });
    document.getElementById('todoDetalhes').style.visibility = 'hidden';
  }
}