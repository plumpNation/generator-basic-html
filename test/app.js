'use strict';

let path    = require('path');
let assert  = require('yeoman-assert');
let helpers = require('yeoman-test');

let appDir  = path.join(__dirname, '../generators/app');

describe('generator-plumpnation-basic-html:app', function () {
    before(function () {
        return helpers.run(appDir)
            .withPrompts({title: 'Foobar'})
            .toPromise();
    });

    it('creates files', function () {
        assert.file([
            'index.html',
            'main.js',
            'styles.css'
        ]);
    });
});
