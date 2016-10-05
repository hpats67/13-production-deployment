(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    // TODO: refactor this request into an $.ajax call
    $.ajax({
      url: '/github/users/codefellows-portland-301d6/repos' +
            '?per_page=10&sort=updated',
      method: 'GET',
      success: successHandler,
      error: errorHandler
    });

    function successHandler(data) {
      reposObj.allRepos = data;
      callback();
    };

    function errorHandler(error) {
      console.log('ERROR', error);
    };
  //   $.get('/github/users/codefellows-portland-301d6/repos' +
  //         '?per_page=10&sort=updated')
  //         .done(function(data) {
  //           reposObj.allRepos = data;
  //         }).done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
