var texts = new Array();
texts.push("FREE SHIPPING ON ORDERS OVER $100");
texts.push("BE THE FIRST TO KNOW ABOUT LATEST TRENDS AND PROMOTIONS");
texts.push("JOIN OUR LOYALTY PROGRAM TODAY AND START EARNING POINTS");

var point = 0;

function changeText(){
  $('h3').html(texts[point]);
  if(point < texts.length - 1){
    point ++;
  }else{
    point = 0;
  }
  setTimeout(changeText, 5000)
}

changeText();