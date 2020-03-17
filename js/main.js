document.addEventListener('DOMContentLoaded', function(){ 
  
    /**
     * Variables
     * 
     * @param input const the input field value
     * @param result const the result containing runekeys images
     * @param inputChar Array adds input values characters
     * @param inputStr var 
     */
    const input = document.querySelector('input');
    const result = document.getElementById('result');
    
    var inputStr = "";
    var outputStr = "";
  
    input.onkeyup = validateInput;
    
    function validateInput(e) {
  
      inputStr = e.target.value;
  
      var letters = /^[a-zA-Z\- ÅåÄäÖöØøÆæÉéÈèÜüÊêÛûÎî]*$/;
      if(inputStr.match(letters))
      {
        updateRunes();
      }
    else
      {
        result.innerHTML = "<h2>Du kan bara använda svenska tecken A - Ö</h2>";
        input.value = "";
        input.focus();              
      }
  
    }
  
    function updateRunes() {
  
      result.innerHTML = "";
      outputStr = "";      
      outputStr += "<table><tr>";
  
      for (var i = 0; i < inputStr.length; i++) {
      
        outputStr += '<td>';

        if (inputStr.charAt(i) == " " ) {
          outputStr += '<img class="img-fluid" src="images/runekey/SPACE.png">';
        } else {            
          outputStr += '<img class="img-fluid" src="images/runekey/' + inputStr.charAt(i) + '.png"><br>' + inputStr.charAt(i).toUpperCase();        
        }

        outputStr += '</td>';
  
      }

      outputStr += '</tr></table>';
      result.innerHTML = outputStr;
  
    }

    $('input[type=search]').on("search", function(evt){
      if($(this).val().length > 0){
        
      }else{
        result.innerHTML = "<h2>Skriv ditt namn och få det översatt i modern svensk runskrift</h2>";
        input.value = "";
        input.focus();
      }
    });


}, false);