import React, {Component} from 'react';

export const dateTimeNow = () => {
  var d = new Date(),
  sec = d.getSeconds().toString().length == 1 ? '0' + d.getSeconds() : d.getSeconds(),
  minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
  hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
  //ampm = d.getHours() >= 12 ? 'pm' : 'am',
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  //days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var dataTime = months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ':' + sec;
   return months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() ;
};