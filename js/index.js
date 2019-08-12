import $ from 'jquery';

$(function() {
  parallax($('.intro-personal:after'));
  showThisWhenThatIsHidden($('.logo'), $('.avatar'), $('article'));
});

function parallax($block) {
  $(window).scroll(function() {
    $block.css('background-position-y', ($(this).scrollTop()*4) + 'px');
  });
}

function showThisWhenThatIsHidden($this, $that, $scrollBase) {
  $scrollBase = $scrollBase || $(window);
  $scrollBase.scroll(function() {
    let thatOffset = $that.offset();
    let thatHeight = $that.height();
    if (thatOffset.top < -thatHeight) {
      $this.addClass('show');
    } else {
      $this.removeClass('show');
    }
    
  });
}