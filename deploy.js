var ghpages = require('gh-pages');

ghpages.publish('build', {
    branch: 'master',
    repo: 'git@github.com:EugeneFenko/fcc-personalPortfolio.git'
  }, function(err){
    console.log('Err: '+err)
  });