/**
 * Created by undownding on 2016/4/18.
 */
var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'dist'));