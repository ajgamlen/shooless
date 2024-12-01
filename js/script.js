$(document).ready(function () {
  // Enhanced check for mobile devices including Safari
  var isMobile =
    /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

  // Only initialize ripples if not on a mobile device
  if (!isMobile) {
    try {
      $('main').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
      })
    } catch (e) {
      $('.error').show().text(e)
    }

    $('.js-ripples-disable').on('click', function () {
      $('main').ripples('destroy')
      $(this).hide()
    })

    $('.js-ripples-play').on('click', function () {
      $('main').ripples('play')
    })

    $('.js-ripples-pause').on('click', function () {
      $('main').ripples('pause')
    })
  } else {
    console.log('Ripple effect disabled on mobile devices')
  }
})

function openBio() {
  const overlay = document.getElementById('aboutSection')
  overlay.style.display = 'block'
  setTimeout(() => {
    overlay.style.opacity = 1
  }, 10) // Small delay to ensure the transition effect
}

function closeBio() {
  const overlay = document.getElementById('aboutSection')
  overlay.style.opacity = 0
  overlay.addEventListener(
    'transitionend',
    () => {
      overlay.style.display = 'none'
    },
    { once: true }
  )
}

function openStream() {
  document.getElementById('streamNav').style.height = '100%'
}

function closeStream() {
  document.getElementById('streamNav').style.height = '0%'
}

function on() {
  var element = document.getElementById('gallery')
  element.style.display = 'block'
  setTimeout(function () {
    element.classList.add('show')
  }, 10) // Slight delay to ensure the display change is registered
}

function off() {
  var element = document.getElementById('gallery')
  element.classList.remove('show')
  element.addEventListener('transitionend', function handler() {
    element.style.display = 'none'
    element.removeEventListener('transitionend', handler)
  })
}
window.transitionToPage = function (href) {
  const body = document.querySelector('body')
  body.style.transition = 'opacity 0.5s, filter 0.5s'
  body.style.opacity = 0
  body.style.filter = 'blur(10px)'
  setTimeout(function () {
    window.location.href = href
  }, 500)
}

document.addEventListener('DOMContentLoaded', function (event) {
  const body = document.querySelector('body')
  body.style.transition = 'opacity 0.5s, filter 0.5s'
  body.style.opacity = 0
  body.style.filter = 'blur(10px)'
  setTimeout(() => {
    body.style.opacity = 1
    body.style.filter = 'blur(0px)'
  }, 0)
})
