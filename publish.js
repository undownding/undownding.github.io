/**
 * Created by undownding on 2016/4/18.
 */
var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'dist'), {
    branch: 'master',
    repo: 'git@github.com:undownding/undownding.github.io.git',
    user: {
        name: 'undownding',
        email: 'undownding@gmail.com'
    }
},function (err) { console.log(err) });