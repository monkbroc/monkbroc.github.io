$(document).ready ->
  track_social_click()

track_social_click = ->
  $('.social-icons a').on 'click', ->
    _gaq.push [
      '_trackEvent'
      'Social'
      'Visit'
      $(this).find('img').attr('alt')
    ]

