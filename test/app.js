'use strict';

let path    = require('path');
let assert  = require('yeoman-assert');
let helpers = require('yeoman-test');

describe('generator-plumpnation-basic-html:app', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/app'))
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
