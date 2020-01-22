// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict'

import $ from 'jquery'
import 'waypoints'

$(() => {
  const jWindow = $(window)

  if (window.location.pathname === '/' && jWindow.width() >= 600) {
    const topSection = $('#top-splash')
    const middleSection = $('#mission-statement')
    const bottomSection = $('#vfyb-link')

    jWindow.on('scroll', () => {
      topSection
        .find('.parallax-image')
        .css('transform', `translate3d(0, ${jWindow.scrollTop() * -0.3}px, 0)`)
      middleSection
        .find('.parallax-image')
        .css(
          'transform',
          `translate3d(0, ${(jWindow.scrollTop() - middleSection.offset().top) *
            -0.3}px, 0)`
        )
      bottomSection
        .find('.parallax-image')
        .css(
          'transform',
          `translate3d(0, ${(jWindow.scrollTop() - bottomSection.offset().top) *
            -0.3}px, 0)`
        )
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
})
