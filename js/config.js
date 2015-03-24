/*global System*/

System.transpiler = 'babel';

System.config({
    baseURL: './',
    paths: {
        'lib/*': 'js/lib/*.js'
    },
    map: {
        jquery: './bower_components/jquery/dist/jquery'
    }
});