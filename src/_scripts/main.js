// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'waypoints';

$(() => {
  if (window.location.pathname === '/') {
    let topWaypoint = new Waypoint({
      element: $('#top-splash'),
      handler: (direction) => {
        $(window).on('scroll', () => {
          $('#top-splash > .parallax-image').css('transform', `translateY(${$(window).scrollTop() * -.2}px)`)
        })
      },
      offset: 0
    })

    let middleWaypoint = new Waypoint({
      element: $('#mission-statement'),
      handler: (direction) => {
        $(window).on('scroll', () => {
          $('#mission-statement > .parallax-image').css('transform', `translateY(${($(window).scrollTop() - $('#mission-statement').offset().top) * -.2}px)`)
        })
      },
      offset: '100%'
    })

    let bottomWaypoint = new Waypoint({
      element: $('#vfyb-link'),
      handler: (direction) => {
        $(window).on('scroll', () => {
          $('#vfyb-link > .parallax-image').css('transform', `translateY(${($(window).scrollTop() - $('#vfyb-link').offset().top) * -.2}px)`)
        })
      },
      offset: '100%'
    })
  }
});
