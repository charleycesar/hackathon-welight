var hackathon = angular.module('hackathon',['ngResource'])
.config(function($httpProvider) {
	$httpProvider.interceptors.push('TokenInterceptor');

	console.log('configurado o interceptor');
})
.controller('CausaAdicionarController',function($scope, $http){
    $scope.salvarCausa = function(){
    	var endpoint = "http://192.168.103.141:5000/api/causa/";
	    $scope.usuario = JSON.parse(localStorage.getItem('usuario'));
    	$scope.form.usuario_id = $scope.usuario && $scope.usuario.user;

    	$http.post(endpoint, $scope.form).then(
    		function(result){
    				console.log(result.data);
    				location.href = "dashboard.php"; 
    		},
    		function(){

    		}
    	);
    	console.log($scope.form);
    }
})
.controller('CausaController',function($scope, $http, $rootScope){
    $scope.getCausas = function(){
    	var endpoint = "http://192.168.103.141:5000/api/causa/"
    	$http.get(endpoint).then(
    		function(result){
    			$scope.causas = result.data;
    		},
    		function(){

    		}
    	);
    };
    $scope.salvaProblemaParaProximaPagina = function(id){
    	localStorage.setItem('id_problema', id);
		location.href='problema.php';
    }
    $scope.getCausas();
})
.factory('CausaService', function($resource) {
return $resource('http://192.168.103.141:5000/api/causa/:id', {id: '@id'},
    {
        'update': { method:'PUT' },
        'query': {method: 'GET', isArray: false }
    });
})
.controller('CausaProblemaController',function($scope, CausaService, $rootScope){
     var id_problema = localStorage.getItem('id_problema');
     $scope.usuario = JSON.parse(localStorage.getItem('usuario'));
     $scope.getProblemaById = function(id_problema){
    	CausaService.query({id: id_problema}).$promise.then(
    			function(success){
    				$scope.causa = success;
    			},
    			function(erro){

    			}
    	);
    };
    $scope.getProblemaById(id_problema);
})
.factory('LoginService', function($resource) {
return $resource('http://192.168.103.141:5000/api/login');
})
.controller('LoginController',function($scope, $http, $rootScope){
     
     $scope.login = function(){
     	var endpoint = 'http://192.168.103.141:5000/api/login';
    	$http.post(endpoint,$scope.form).then(
    			function(data){
    				$rootScope.isLogged = true;
    				$rootScope.usuario = $scope.form.username;
    				localStorage.setItem('usuario', JSON.stringify({
    					token: data.token,
    					user: $scope.form.username
    				}));
    				//$scope.login = data;
    				location.href="dashboard.php";
    			},
    			function(erro){
    				if(erro.status === 401){
    					$scope.erro = "Usuário ou senha inválidos!";
    				} 
    			}		
    	);
    };
})
.controller('CadastroController',function($scope, $http,$rootScope){

     $scope.cadastrar = function(){
     	var endpoint = 'http://192.168.103.141:5000/api/user',
 	    	validate = $scope.validate();

 	    if(validate) {
	    	$http.post(endpoint,$scope.form).then(
	    			function(data){
	    				$rootScope.isLogged = true;
	    				$rootScope.usuario = $scope.form.username;
	    				$scope.mensagem = "Usuário cadastrado com sucesso";
	    				location.href="dashboard.php";
	    			},
	    			function(erro){
	    				$scope.erro = "Ocorreu um erro inesperado.";
	    			}		
	    	); 	    	
 	    }
    };

    $scope.validate = function(){
    	return $scope.formulario.$valid;
    }
})
