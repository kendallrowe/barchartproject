$(document).ready(function(){
  // Main function to generate bar chart elements based on user form submission
  function drawBarChart(data, options, element){
    let barClassAndValues = new Array((data.length/3));
    let numberOfBars = 0;
    // Read through bar chart data and create class names stored in array for each
    for (let i = 0; i < data.length; i = i + 3) {
      numberOfBars++;
      console.log(i);
      barClassAndValues[numberOfBars-1] = new Array(4);
      // For each row, create custom class name for the specific bar to allow specific colours/formatting
      barClassAndValues[numberOfBars-1][0] = "percentage-" + (numberOfBars);
      // Store all custom data for the bar
      barClassAndValues[numberOfBars-1][1] = data[i];
      barClassAndValues[numberOfBars-1][2] = data[i+1];
      barClassAndValues[numberOfBars-1][3] = data[i+2];
    }
    addBars(barClassAndValues, options);
    changeTitle(options);
    createYAxis(options);
  };

  // Function to add bars to chart area along with x axis labels, value-based heights
  function addBars(barsArray, options) {
    let valueJustifyDirection = options[4];
    const barWidth = (1/barsArray.length *100) - options[10];
    // Iterate through all bar array and add new bar for each
    barsArray.forEach(function(thisBar, index){
      // Create container to hold the bar and label
      $(".barContainer").append("<dd class=\"barHolder\"></dd>");
      // Add the span to hold colour and visual representation of bar
      $(".barContainer dd:last-of-type").append("<span class=\"percentage " + thisBar[0] + "\"></span>");
      // Add label to bar of the value provided by user
      $("." + thisBar[0] ).append("<p>" + thisBar[2] + "</p>");
      // Add x axis label container and then text into axis label for bar
      $(".barContainer dd:last-of-type").append("<div class=\"xAxisLabelContainer\"</div>");
      $(".barContainer dd:last-of-type div").append("<p>" + thisBar[1] + "</p>");
      // Set heights and widths of bars dynamically
      $("." + thisBar[0]).css("height", thisBar[2] + "%");
      $(".barHolder").css("width", barWidth + "%");
      $("." + thisBar[0]).css("background-color", thisBar[3]);
    });
    // Set bar colour
    // Label inside of bar formatting to top, center, or bottom
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

  function multiStackBars(){

  }

  // Function to generate html and style the y axis based on user specifications
  function createYAxis(options) {
    // Amount to decrease for each tick
    const decrementAmount = Math.round(options[7]/options[8]);
    // Dynamically calculated height percentage to use for formatting of ticks
    const tickHeight = (1/options[8] *100);
    let currentTick = options[7];
    // Iterate the the requested number of y labels (options[8]) and create a label for each
    for (let yLabelCount = 1; yLabelCount <= options[8]; yLabelCount++) {
      $(".yAxisLabels").append("<span class=\"label\"></span");
      $(".yAxisLabels span:last-of-type").append("<p>" + currentTick + options[9] + "</p>");
      currentTick -= decrementAmount;
    }
    $(".label p, .xAxisLabelContainer p").css("color", options[5]);
    $(".label").css("height", tickHeight + "%")
  }

  function changeTitle(options){
    // If user has chosen not to include a title, set display to none
    if (options[11] === true) {
      $(".titleContainer").css("display", "none");
    } else {
      // If title has been included, change the text to match input, apply capitalization and formattings per user entry
      $(".titleContainer h4").text(options[0]);
      $(".titleContainer h4").css({
        "text-transform": "capitalize",
        "color": options[1],
        "font-size": options[2]
      });      
    }
  }
    // $("#submitBtn").click(function(){        
      //   $("#chartForm").submit(function(){
        
        //   });
        // });
        
  drawBarChart(["IE 11", 11.33, "black", "Chrome", 49.77,"red", "Firefox", 16.09, "blue", "Safari", 23, "palegoldenrod", "opera", 70, "green", "android", 14, "rebeccapurple"],
                ["browser market share", "#6e45e2", "30px", "#6e45e2", "center", "#ed145b", "#aaa", 100, 5, "%", 5, false, true],null);
});