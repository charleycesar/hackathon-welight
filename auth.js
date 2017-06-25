hackathon
    .factory('TokenInterceptor', function($q, $window) {
      return {
        request: function(config) {
          config.headers = config.headers || {};
          
          if(!config.headers['not-access-token']){
          
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