var endpoint = "https://chamageral-backend.herokuapp.com/api/";
var hackathon = angular.module('hackathon',['ngResource','ngRoute'])
.config(function($httpProvider, $routeProvider) {
	$httpProvider.interceptors.push('TokenInterceptor');
    $routeProvider
        .when('/', {
            templateUrl : 'frontpage.html',
            controller  : 'FrontPageController'
        })

        .when('/login', {
            templateUrl : 'login.html',
            controller  : 'LoginController'
        })

        .when('/frontpage', {
            templateUrl : 'frontpage.html',
            controller  : 'FrontPageController'
        })

        .when('/cadastrar', {
            templateUrl : 'cadastrar.html',
            controller  : 'CadastroController'
        })

        .when('/dashboard', {
            templateUrl : 'dashboard.html',
            controller  : 'CausaController'
        })

        .when('/novo_problema', {
            templateUrl : 'novo_problema.html',
            controller  : 'CausaAdicionarController'
        })

        .when('/problema', {
            templateUrl : 'problema.html',
            controller  : 'CausaProblemaController'
        })

        .when('/voluntariar', {
            templateUrl : 'voluntariar.html',
            controller  : 'VoluntariarController'
        })

        .when('/sobre', {
            templateUrl : 'sobre.html',
            controller  : 'SobreController'
        });   

})
.run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
        $rootScope.currentRoute = current.$$route.originalPath;
        $rootScope.showNav = true;
        
        if($rootScope.currentRoute == '/frontpage' || $rootScope.currentRoute == '/'){
            $rootScope.showNav = false;
        }
    });
})
.controller('MainController',function($scope, $rootScope){
})
.controller('SobreController',function($scope, $rootScope){
    $rootScope.titleMenu = '#SOBRE';
    $rootScope.back_link = '#dashboard';
})
.controller('FrontPageController',function(){
    
})
.controller('CausaAdicionarController',function($scope, $http, $rootScope, $location){
    $rootScope.titleMenu = '#CHAMAGERAL';
    $rootScope.back_link = '#dashboard';
    $scope.salvarCausa = function(){
    	$scope.usuario = JSON.parse(localStorage.getItem('usuario'));
    	$scope.form.usuario_id = $scope.usuario && $scope.usuario.user;

    	$http.post(endpoint+'causa/', $scope.form).then(
    		function(result){
				$location.path( "/dashboard" ); 
    		},
    		function(){

    		}
    	);
    }
})
.controller('CausaController',function($scope, $http, $rootScope, $location, CausaService){
    $rootScope.titleMenu = '#LISTAGERAL';
    $rootScope.back_link = false;
    $scope.usuario = JSON.parse(localStorage.usuario).user;
    $scope.getCausas = function(){
    	$http.get(endpoint+'causa/').then(
    		function(result){
    			$scope.causas = result.data;
    		},
    		function(){

    		}
    	);
    };
    $scope.deletarProblema = function(item){
        CausaService.delete({id: item._id}, function(){
          var index = $scope.causas.indexOf(item);
          $scope.causas.splice(index, 1);
        });
    }
    $scope.salvaProblemaParaProximaPagina = function(id){
    	localStorage.setItem('id_problema', id);
		$location.path( "/problema" );
    }
    $scope.getCausas();
})
.factory('CausaService', function($resource) {
return $resource(endpoint + 'causa/:id', {id: '@id'},
    {
        'update': { method:'PUT' },
        'query': {method: 'GET', isArray: false }
    });
})
.controller('CausaProblemaController',function($scope, CausaService, $rootScope){
    $rootScope.titleMenu = '#VERCAUSA';
    $rootScope.back_link = '#dashboard';
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
.controller('VoluntariarController',function($scope, CausaService, $rootScope){
    $rootScope.titleMenu = '#CONTATO';
    $rootScope.back_link = '#problema';
})
.factory('LoginService', function($resource) {
return $resource(endpoint + 'login');
})
.controller('LoginController',function($scope, $http, $rootScope, $location){
    $rootScope.titleMenu = '#CHAMAGERAL';
    $rootScope.back_link = '#frontpage';

     $scope.login = function(){
     	$http.post(endpoint + 'login',$scope.form).then(
    			function(data){
    				$rootScope.isLogged = true;
    				$rootScope.usuario = $scope.form.username;
    				localStorage.setItem('usuario', JSON.stringify({
    					token: data.token,
    					user: $scope.form.username
    				}));
    				//$scope.login = data;
    				$location.path( "/dashboard" );
    			},
    			function(erro){
    				if(erro.status === 401){
    					$scope.erro = "Usuário ou senha inválidos!";
    				} 
    			}		
    	);
    };
})
.controller('CadastroController',function($scope, $http,$rootScope, $location){
    $rootScope.titleMenu = '#CHAMAGERAL';
    $rootScope.back_link = '#frontpage';

     $scope.cadastrar = function(){
     	var validate = $scope.validate();

 	    if(validate) {
	    	$http.post(endpoint + 'user',$scope.form).then(
	    			function(data){
	    				$rootScope.isLogged = true;
	    				$rootScope.usuario = $scope.form.username;
	    				$scope.mensagem = "Usuário cadastrado com sucesso";
	    				$location.path( "/login" );
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
});

// Jquery scripts
function confDelete() {
    $('.trash').animate({'opacity':'0'},200);
    $('.conf').animate({'opacity':'1'},400);
    $('.conf').removeClass('hide');
    $('.trash').addClass('hide');
}
function cancDelete() {
    $('.trash').animate({'opacity':'1'},200);
    $('.conf').animate({'opacity':'0'},400);
    $('.trash').removeClass('hide');
    $('.conf').addClass('hide');
}