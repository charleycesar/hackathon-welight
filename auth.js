hackathon
    .factory('TokenInterceptor', function($q, $window) {
      console.log('entrei no interceptor');
      return {
        request: function(config) {
          config.headers = config.headers || {};
          console.log('entrei no request do interceptor');

          if(!config.headers['not-access-token']){
            console.log('token', $window.sessionStorage);

            if ($window.localStorage.token) {
              config.headers['X-Access-Token'] = $window.localStorage.token;
              config.headers['X-Key'] = $window.sessionStorage.user;
              config.headers['Content-Type'] = "application/json";
            }
            return config || $q.when(config);
          }else{

            delete config.headers;
            return config || $q.when(config);

          }
        },

        response: function(response) {
          return response || $q.when(response);
        }
      };
    })