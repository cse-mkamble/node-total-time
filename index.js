const moment = require('moment');

const allhours = [
  
];

const totalhours = allhours
  .slice(1)
  .reduce(
    (prev, cur) => moment.duration(cur).add(prev),
    moment.duration(allhours[0])
  );

  var ms = totalhours._milliseconds;
var ticks = ms / 1000;
var hh = Math.floor(ticks / 3600);
var mm = Math.floor((ticks % 3600) / 60);
var ss = ticks % 60;

console.log(hh + ':' + mm + ':' + ss);
