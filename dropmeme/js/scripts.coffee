class DropMemeBookmarklet

  constructor: ->
    this.addCss()

    if typeof $ == 'undefined'
      this.linkjQuery()
    else if parseFloat($.fn.jquery) < 1.7
      this.linkjQuery()
    else
      this.init()

  init: =>
    if @$elem?.length
      @$elem.remove()
      delete @$elem
    else
      this.createElem()
      this.cloneImages document.getElementsByTagName 'img'

  createElem: ->
    @elem = document.createElement 'div'
    @elem.id = "DropMeme"
    @$elem = $(@elem)

    document.body.appendChild @elem

  cloneImages: (images) ->
    container = document.createElement 'div'
    container.className = 'DropMemeContainer'

    for image in images
      $image = $(image)

      link = document.createElement 'a'
      link.href = "http://dropmeme.com?remote_template=#{$image[0].src}"

      clone = document.createElement 'img'
      clone.src = image.src

      $link = $(link)
      $link.css
        top: "#{$image.offset().top}px"
        left: "#{$image.offset().left}px"
        width: "#{$image.width()}px"

      link.appendChild clone
      container.appendChild link if image.clientWidth > 0

    @elem.appendChild container

  addCss: ->
    css = document.createElement 'link'
    css.href = 'http://heliom.github.com/bookmarklets/dropmeme/css/styles.css'
    css.rel = 'stylesheet'
    css.type = 'text/css'

    document.getElementsByTagName('head')[0].appendChild css

  linkjQuery: ->
    script = document.createElement 'script'
    script.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min.js'

    script.onload = this.init
    script.onreadystatechange = ->
      this.init() if this.readyState == 'complete'

    document.getElementsByTagName('head')[0].appendChild script


# Global scope
window.dropmeme = new DropMemeBookmarklet
