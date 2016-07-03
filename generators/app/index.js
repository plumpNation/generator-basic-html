'use strict';

let yeoman = require('yeoman-generator');
let chalk  = require('chalk');
let yosay  = require('yosay');

module.exports = yeoman.Base.extend({
    prompting: function () {
        let prompts = [{
            type: 'input',
            name: 'title',
            message: 'What is the title of the experiment?',
            default: 'My experiment'
        }];

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the fabulous ' +
            chalk.red('generator-plumpnation-basic-html') +
            ' generator!'
        ));

        return this.prompt(prompts)
            .then((props) => {
                // To access props later use this.props.someAnswer;
                this.props = props;
            });
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('index.html'),
            {
                title: this.props.title
            }
        );

        this.fs.copy(
            this.templatePath('main.js'),
            this.destinationPath('main.js')
        );

        this.fs.copy(
            this.templatePath('styles.css'),
            this.destinationPath('styles.css')
        );
    },

    install: function () {
        // this.installDependencies();
    }
});
