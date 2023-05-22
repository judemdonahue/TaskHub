const progressBar = document.getElementById('progress-bar');
const completionPercentage = progressBar.getAttribute('aria-valuenow');
const decimalValue = completionPercentage / 100;


let options = {
    startAngle: -1.,
    size: 150,
    value: decimalValue,
    fill: {gradient: ['#5583ee', '#41d8dd']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });