function AuthService($http) {
  this.$http = $http;
}

AuthService.prototype = {
  authenticateUser: function (userData, callback) {
    this.$http.get('user.json').then(function (response) {
      /*eslint-disable*/
      if(response.status === 200){
        let actualUser = response.data[0];
        if(userData.username === actualUser.username && userData.password === actualUser.password){
          //user authenticated
          callback(null, actualUser);
        }else{
          //for unauthenticate user
          callback(null, null);
        }
      }
    }).catch(function (err) {
      /*eslint-disable*/
      console.log(err);
      //for error handling
      callback(err, null);
    });
  },
  setUserData : function (userData) {
    this.user = userData;
  },
  getUserData : function (userData) {
    return this.user;
  },
  logout : function (callback) {
    localStorage.removeItem('userToken');
    callback();
  }
};

module.exports = {
  AuthService: AuthService
};
