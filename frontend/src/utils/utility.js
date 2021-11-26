// program to check if a variable is undefined or null

export function checkUndefinedOrNull(variable) {
  if (typeof variable === "undefined" || variable === null) {
    return true;
  } else {
    return false;
  }
}

export function get_time_diff( datetime ) {
  var currentDate = new Date()
  var newDate = new Date( datetime )
  var delta = Math.abs( newDate - currentDate ) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor( delta / 86400 );
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor( delta / 3600 ) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor( delta / 60 ) % 60;
  delta -= minutes * 60;


  if ( days ) {
      return days + " days ago"
  } else if ( hours ) {
      return hours + " hrs ago"
  } else {
      return minutes + "min ago"
  }
}