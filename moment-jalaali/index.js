const moment = require('moment');
const momentJalaali = require('moment-jalaali');
const u = require('util');

p = (a) => console.log(a);

var d = new Date();
var m = moment(d);

// Show today (now) date
p('Today date:\n\t' + d.toString());
p('Today Jalaali date:\n\t' + momentJalaali(d).format('jYYYY/jM/jD - HH:mm:s').toString());

// Subtract 1 day to get yesterday's date
d.setDate(d.getDate() - 1);

// Show new date (yesterday)
p('Yesterday date:\n\t' + d.toString());
p('Yesterday Jalaali date:\n\t' + momentJalaali(d).format('jYYYY/jM/jD - HH:mm:s').toString());

// Show next week's date
p(u.format("\nCurrent date:\n\t%s", m.toString()));
m.add(7, 'days');
p(u.format("Next week\'s date:\n\t%s", m.toString()));