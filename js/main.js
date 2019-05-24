
function main() {
  let colorClass ='';
  let blinkInterval = '';

  $('.select-color').on('click', function() {
    let selectedColor = $(this).attr('class');

    if (selectedColor.indexOf('cyan') > -1) {
      colorClass = 'cyan';
    } else if (selectedColor.indexOf('magenta') > -1) {
      colorClass = 'magenta';
    } else if(selectedColor.indexOf('yellow') > -1) {
      colorClass = 'yellow';
    }
    $(this).removeClass('not-selected');
    $(this).siblings().addClass('not-selected');
  });

  $('.box').on('click', function() {
    $(this).toggleClass(colorClass);
  });

  $('.toggle-blink').on('click', function() {
    if (colorClass) {
      if ($(this).hasClass('opacity')) {
        $(this).toggleClass('opacity');
        clearInterval(blinkInterval);
      } else {
        $(this).toggleClass('opacity');
        blinkInterval = setInterval(function() {
          $('.box.magenta, .box.yellow, .box.cyan').toggleClass('blink');
        }, 350);
      }
    }
  });
};

$(document).ready(main);
