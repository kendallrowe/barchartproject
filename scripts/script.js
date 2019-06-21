$(document).ready(function(){
  function drawBarChart(data, options, element){
    let barClassAndValues = new Array((data.length/2));
    let numberOfBars = 0;
    // Read through bar chart data and create class names stored in array for each
    for (let i = 0; i < data.length; i = i + 2) {
      numberOfBars++;
      barClassAndValues[numberOfBars-1] = new Array(3);
      barClassAndValues[numberOfBars-1][0] = "percentage-" + (numberOfBars);
      barClassAndValues[numberOfBars-1][1] = data[i];
      barClassAndValues[numberOfBars-1][2] = data[i+1];
    }
    console.log(barClassAndValues);

  };
    // $("#submitBtn").click(function(){        
      //   $("#chartForm").submit(function(){
        
        //   });
        // });
        
  drawBarChart(["IE 11", 11.33, "Chrome", 49.77, "Firefox", 16.09, "Safari", 5.41, "opera", 1.62, "android", 2],"",null);
});



// // var style = $('<style>body { background: green; }</style>')
// // $('html > head').append(style);
// // all your code goes in here
// $('.albums img').on('dblclick',function() {
//   // disable all currently playing
//   $('.playing').removeClass('playing');
//   // add playing to the currently clicked item
//   $(this).toggleClass('playing');
// });

// $('.albums img').on('click',function() {
//   // toggle the selected class
//   $(this).toggleClass('selected');
//   // then count the number of selected albums. We will store this in a "variable" called `numOfSelected`
//   var numOfSelected = $('img.selected').length;
//   // update the count
//   $('span.num').text(numOfSelected);
// });

