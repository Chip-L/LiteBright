
function main() {
  let colorClass ='';

  $('.select-color').on('click', function() {
    let selectedColor = $(this).attr('class');
    console.log(selectedColor.indexOf('cyan'));

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
      $(this).toggleClass('opacity');
      setinterval(function() {
        $('.box.magenta .box.yellow, .box.cyan').toggleClass('blink');
      }, 350);
    }
  });
};

$(document).ready(main);
