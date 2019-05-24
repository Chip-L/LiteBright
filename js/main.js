
function main() {
  let colorClass ='';

  $('.select-color').onclick(function() {
    let selectedColor = $(this).attr('class');
    if (selectedColor.hasClass('.cyan')) {
      colorClass = 'cyan';
    } else if (selectedColor.hasClass('magenta')) {
      colorClass = 'magenta';
    } else if(selectedColor.hasClass('yellow')) {
      colorClass = 'yellow';
    }
    $(this).removeClass('not-selected');
    $(this).siblings().addClass('not-selected');
  });
  $('.box').onclick(function() {
    $(this).toggleClass(colorClass);
  });
  $('.toggle-blink').on('click', function() {
    if (colorClass) {
      $(this).toggleClass('opacity');
      setinterval(function() {
        $('.box.magenta .box.yellow, .box.cyan').toggleClass('blink');
      }, 350);
    }
  });
};

$(document).ready(main);
