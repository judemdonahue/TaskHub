const toggleSwitch = document.querySelectorAll('input[type="radio"]');

toggleSwitch.forEach(function (option) {
  option.addEventListener("change", function() {
    if (this.checked) {
      console.log("Selected option:", this.id);
    }
  });
});


let options = {
    startAngle: -1.,
    size: 150,
    value: .25,
    fill: {gradient: ['#5583ee', '#41d8dd']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });