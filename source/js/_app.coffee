$(document).ready ->
  track_social_click()
  setup_projects()

track_social_click = ->
  $('.social-icons a').on 'click', ->
    _gaq.push [
      '_trackEvent'
      'Social'
      'Visit'
      $(this).find('img').attr('alt')
    ]

setup_projects = ->
  $('.project').on 'click', ->
    el = $(this)
    image = el.data 'image'
    title = el.data 'title'
    $.fancybox(
      href: image
      title: title
      helpers:
        overlay:
          css:
            background: 'rgba(1,1,1,0.65)'
    )

    _gaq.push [
      '_trackEvent'
      'Project'
      'Open'
      title
    ]

