// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'waypoints';

$(() => {
  const jWindow = $(window);

  let sidebarVisible = false;

  const body = $('body');

  $('#menu-reveal').click(function() {
    sidebarVisible = !sidebarVisible;
    if (sidebarVisible) {
      body.addClass('menuOpen');
    } else {
      body.removeClass('menuOpen');
    }
  });

  $('.section-link').click(function() {
    body.removeClass('menuOpen');
    sidebarVisible = false;
  });

  if (window.location.pathname === '/' && jWindow.width() >= 600) {
    const topSection = $('#top-splash')
    const middleSection = $('#mission-statement')
    const bottomSection = $('#vfyb-link')

    jWindow.on('scroll', () => {
      topSection.find('.parallax-image').css('transform', `translate3d(0, ${jWindow.scrollTop() * -.3}px, 0)`)
      middleSection.find('.parallax-image').css('transform', `translate3d(0, ${(jWindow.scrollTop() - middleSection.offset().top) * -.3}px, 0)`)
      bottomSection.find('.parallax-image').css('transform', `translate3d(0, ${(jWindow.scrollTop() - bottomSection.offset().top) * -.3}px, 0)`)
    })


    // $(window).on('scroll', _.throttle( () => {
    //   $('#top-splash .parallax-image').css('transform', `translate3d(0, ${$(window).scrollTop() * -.2}px, 0)`)
    // }, 100))
    //
    // $(window).on('scroll', _.throttle( () => {
    //   $('#mission-statement .parallax-image').css('transform', `translate3d(0, ${($(window).scrollTop() - $('#mission-statement').offset().top) * -.2}px, 0)`)
    // }, 100))
    //
    // $(window).on('scroll', _.throttle( () => {
    //   $('#vfyb-link .parallax-image').css('transform', `translate3d(0, ${($(window).scrollTop() - $('#vfyb-link').offset().top) * -.2}px, 0)`)
    // }, 100))

  }
});
