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
    addBars(barClassAndValues, options);
    changeTitle(options);
  };

  // Function to add bars to chart area along with x axis labels, value-based heights
  function addBars(barsArray, options) {
    let valueJustifyDirection = options[4];
    const barWidth = (1/barsArray.length *100) - 5;
    // Iterate through all bar array and add new bar for each
    barsArray.forEach(function(thisBar, index){
      $(".barContainer").append("<dd class=\"barHolder\"></dd>");
      $(".barContainer dd:last-of-type").append("<span class=\"percentage " + thisBar[0] + "\"></span>");
      $("." + thisBar[0] ).append("<p>" + thisBar[2] + "</p>");
      $(".barContainer dd:last-of-type").append("<div class=\"xAxisLabelContainer\"</div>");
      $(".barContainer dd:last-of-type div").append("<p>" + thisBar[1] + "</p>");
      // Set heights and widths of bars dynamically
      $("." + thisBar[0]).css("height", thisBar[2] + "%");
      $(".barHolder").css("width", barWidth + "%");
    });
    // Set bar colour
    $(".percentage").css("background-color", options[5]);
    // Label inside of bar formatting
    if (valueJustifyDirection === "top") {
      valueJustifyDirection = "flex-start";
    } else if (valueJustifyDirection === "bottom") {
      valueJustifyDirection = "flex-end";
    } else {
      valueJustifyDirection = "center";
    } 
    $(".percentage").css("justify-content", valueJustifyDirection);
    $(".percentage p").css("color", options[3]);
  }

  // Function to generate html and style the y axis based on user specifications
  function createYAxis(options) {

  }

  function changeTitle(options){
    $(".titleContainer h4").text(options[0]);
    $(".titleContainer h4").css({
      "text-transform": "capitalize",
      "color": options[1],
      "font-size": options[2]
    });      
  }
    // $("#submitBtn").click(function(){        
      //   $("#chartForm").submit(function(){
        
        //   });
        // });
        
  drawBarChart(["IE 11", 11.33, "Chrome", 49.77, "Firefox", 16.09, "Safari", 23, "opera", 70, "android", 14],
                ["browser market share", "#6e45e2", "30px", "#6e45e2", "center", "#ed145b", "#aaa", "100%", 10],null);
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

