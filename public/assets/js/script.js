const progressBar = document.getElementById('progress-bar');
const completionPercentage = progressBar.getAttribute('aria-valuenow');
const getDecimalValue = completionPercentage / 100;

let progressRingVals = {
    startAngle: -1.,
    size: 150,
    value: getDecimalValue,
    fill: {gradient: ['#5583ee', '#41d8dd']}
  }
  $(".circle .bar").circleProgress(progressRingVals).on('circle-animation-progress', function(event, progress, stepValue) {
    var progressString;
    if (stepValue === 1.00) {
      progressString = "100%";
    } else {
      progressString = String(stepValue.toFixed(2).substr(2)) + "%";
    }
    $(this).parent().find("span").text(progressString);
  });