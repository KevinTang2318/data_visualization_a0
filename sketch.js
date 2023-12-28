// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
    background(255); // White background
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();
  
    clear();

//     let centerX = width / 2;
//     let centerY = height / 2;
//     let ringDiameter = 200;
//     let ringWidth = 40;
//     let contourWidth = 5; // Width of the contour
//     let gapBetweenRings = 10; // Increased gap between rings

//     noFill();

//     // Function to draw a ring with a contour
//     function drawRingWithContour(diameter, ringColor, startAngle, endAngle) {
//         // // Contour (slightly larger ring behind the colored ring)
//         // stroke(0); // Contour color (black)
//         // strokeWeight(ringWidth + contourWidth);
//         // arc(centerX, centerY, diameter + contourWidth, diameter + contourWidth, startAngle, endAngle);

//         // Colored ring
//         stroke(ringColor);
//         strokeWeight(ringWidth);
//         arc(centerX, centerY, diameter, diameter, startAngle, endAngle);
//     }

//     // Red ring (e.g., for Move)
//     drawRingWithContour(ringDiameter, 'red', -HALF_PI, HALF_PI);

//     // Green ring (e.g., for Exercise)
//     drawRingWithContour(ringDiameter - (ringWidth + gapBetweenRings) * 1.5, 'green', -HALF_PI, PI);

//     // Blue ring (e.g., for Stand)
//     drawRingWithContour(ringDiameter - (ringWidth + gapBetweenRings) * 3, 'blue', -HALF_PI, QUARTER_PI);
    // Example word list
    let words = [
        "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", ":", "ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN", "TWENTY", "TWENTY-ONE", "TWENTY-TWO", "TWENTY-THREE", "TWENTY-FOUR", "TWENTY-FIVE", "TWENTY-SIX", "TWENTY-SEVEN", "TWENTY-EIGHT", "TWENTY-NINE", "THIRTY", "THIRTY-ONE", "THIRTY-TWO", "THIRTY-THREE", "THIRTY-FOUR", "THIRTY-FIVE", "THIRTY-SIX", "THIRTY-SEVEN", "THIRTY-EIGHT", "THIRTY-NINE", "FORTY", "FORTY-ONE", "FORTY-TWO", "FORTY-THREE", "FORTY-FOUR", "FORTY-FIVE", "FORTY-SIX", "FORTY-SEVEN", "FORTY-EIGHT", "FORTY-NINE", "FIFTY", "FIFTY-ONE", "FIFTY-TWO", "FIFTY-THREE", "FIFTY-FOUR", "FIFTY-FIVE", "FIFTY-SIX", "FIFTY-SEVEN", "FIFTY-EIGHT", "FIFTY-NINE", "SIXTY", "AM", "PM", "ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN", "TWENTY", "TWENTY-ONE", "TWENTY-TWO", "TWENTY-THREE", "TWENTY-FOUR", "TWENTY-FIVE", "TWENTY-SIX", "TWENTY-SEVEN", "TWENTY-EIGHT", "TWENTY-NINE", "THIRTY", "THIRTY-ONE", "THIRTY-TWO", "THIRTY-THREE", "THIRTY-FOUR", "THIRTY-FIVE", "THIRTY-SIX", "THIRTY-SEVEN", "THIRTY-EIGHT", "THIRTY-NINE", "FORTY", "FORTY-ONE", "FORTY-TWO", "FORTY-THREE", "FORTY-FOUR", "FORTY-FIVE", "FORTY-SIX", "FORTY-SEVEN", "FORTY-EIGHT", "FORTY-NINE", "FIFTY", "FIFTY-ONE", "FIFTY-TWO", "FIFTY-THREE", "FIFTY-FOUR", "FIFTY-FIVE", "FIFTY-SIX", "FIFTY-SEVEN", "FIFTY-EIGHT", "FIFTY-NINE", "SIXTY", "SECONDS"
    ];
  
    word_dict = {
      0: "ZERO", 1: "ONE", 2: "TWO", 3: "THREE", 4: "FOUR", 5: "FIVE", 6: "SIX", 7: "SEVEN", 8: "EIGHT", 9: "NINE", 10: "TEN", 11: "ELEVEN", 12: "TWELVE", 13: "THIRTEEN", 14: "FOURTEEN", 15: "FIFTEEN", 16: "SIXTEEN", 17: "SEVENTEEN", 18: "EIGHTEEN", 19: "NINETEEN", 20: "TWENTY", 21: "TWENTY-ONE", 22: "TWENTY-TWO", 23: "TWENTY-THREE", 24: "TWENTY-FOUR", 25: "TWENTY-FIVE", 26: "TWENTY-SIX", 27: "TWENTY-SEVEN", 28: "TWENTY-EIGHT", 29: "TWENTY-NINE", 30: "THIRTY", 31: "THIRTY-ONE", 32: "THIRTY-TWO", 33: "THIRTY-THREE", 34: "THIRTY-FOUR", 35: "THIRTY-FIVE", 36: "THIRTY-SIX", 37: "THIRTY-SEVEN", 38: "THIRTY-EIGHT", 39: "THIRTY-NINE", 40: "FORTY", 41: "FORTY-ONE", 42: "FORTY-TWO", 43: "FORTY-THREE", 44: "FORTY-FOUR", 45: "FORTY-FIVE", 46: "FORTY-SIX", 47: "FORTY-SEVEN", 48: "FORTY-EIGHT", 49: "FORTY-NINE", 50: "FIFTY", 51: "FIFTY-ONE", 52: "FIFTY-TWO", 53: "FIFTY-THREE", 54: "FIFTY-FOUR", 55: "FIFTY-FIVE", 56: "FIFTY-SIX", 57: "FIFTY-SEVEN", 58: "FIFTY-EIGHT", 59: "FIFTY-NINE", 60: "SIXTY"
    }
    
    // Set text properties
    textSize(20); // Default text size
    fill(0); // Default text color (black)

    // Variables to hold position
    let x = 10;
    let y = 30;
    let hr_text = hr > 12 ? word_dict[hr - 12] : word_dict[hr];
    let min_text = word_dict[min];
    let sec_text = word_dict[sec];
  
    let hr_drawn = false;
    let min_drawn = false;
    let sec_drawn = false;
    let zone_drawn = false;
    
    // Loop through the words array
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let zone = hr >= 12 ? "PM" : "AM";
      
        // Constant highlited words
        if (word == ":") {
            fill('orange');
            textSize(30);
        } else if (word == "SECONDS") {
            fill('orange');
            textSize(24);
        } else if (word == zone) {
            fill('orange');
            textSize(20);
            zone_drawn = true;
        } else {
            if (word == hr_text && ! hr_drawn) {
              fill('orange');
              textSize(20);
              hr_drawn = true;
            }
            else if (word == min_text && hr_drawn && !min_drawn) {
              fill('orange');
              textSize(20);
              min_drawn = true;
            }
            else if (word == sec_text && min_drawn && zone_drawn && !sec_drawn) {
              fill('orange');
              textSize(20);
              sec_drawn = true;
            }
            else {
              // Reset to default color and size
              fill(0);
              textSize(20);
            }
        }
      
        // Display the word
        text(word, x, y);
        
        // Increment x to move to the right for the next word
        x += textWidth(word) + 10; // 10 is for spacing between words

        // Wrap text to next line if it exceeds the canvas width
        if (x > width - 100) { // 100 is a margin
            x = 10; // Reset to left margin
            y += 30; // Move down to the next line
        }
    }
}