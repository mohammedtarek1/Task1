#!/usr/bin/env node

var github = require("./testgit.js");

//console.log('hello world');


var program = require('commander');

program
  .version('0.0.1')
  
program
  .command('hi')
  .description('Testing command')
  .action(function(){
console.log('Hi my Friend!!!');

});

program
  .command('username [name]')
  .description('specify GitHub username in oreder to show Repos')
  .action(function(name){
//console.log('Bye ' + name + '. It was good to see you!');
github.getRepos(name, function(repos){
	console.log(name + " repos: ", repos);
});

});

program
  .command('*')
  .action(function(env){
    console.log('Enter a Valid command');
    terminate(true);
});


program.parse(process.argv);

