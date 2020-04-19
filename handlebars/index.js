const fs = require('fs');
const handlebars = require('handlebars');

// Shortcut for console.log
const p = (a) => console.log(a);

// Load external template file and compile it with handlebars
var tpl = fs.readFileSync('./template.html', 'utf-8');
var template = handlebars.compile(tpl);

// Config template parameters
var params = {
    contents: 'Hello there'
};

// Feed parameters into compiled template and print the result
p(template(params));