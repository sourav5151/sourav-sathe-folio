//Replace Text function		 
$(function () { 
    count = 0; 
    wordsArray = ["cool", "amazing", "super"]; 
    setInterval(function () { 
      count++; 
      $("#word").fadeOut(500, function () { 
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500); 
      }); 
    }, 2000); 
  }); 