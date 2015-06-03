(function(){

  'use strict';

  $(window)
    .on('scroll', console.log.bind(console))
    .on('touchstart', console.log.bind(console))
    .on('touchmove', console.log.bind(console))
    .on('touchend', console.log.bind(console));

}());
