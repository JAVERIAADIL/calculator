function getNumber(num) {
    
    calculator.display.value += num;
}

function clearResult() {
    
    calculator.display.value = "0";
}

function getResult() {
    
    calculator.display.value= eval(calculator.display.value);
}
function backspace() {
    var prevalue=calculator.display.value;
    calculator.display.value= prevalue.substr(0, prevalue.length - 1)
    }
function calcos() {
    calculator.display.value = Math.cos(calculator.display.value);
    }
    function calsin() {
        calculator.display.value = Math.sin(calculator.display.value);
    }
    function caltan() {
        calculator.display.value = Math.tan(calculator.display.value);
    }
    function calsqrt() {
        calculator.display.value = Math.sqrt(calculator.display.value);
    }
    function calln() {
        calculator.display.value = Math.log(calculator.display.value);
    }
    function callog() {
        calculator.display.value = Math.log10(calculator.display.value);
    }
    function calexp() {
        calculator.display.value = Math.exp(calculator.display.value);
    }
    
   
    function calpercent() {
        
    
    
    calculator.display.value=(calculator.display.value/100) ;
    }
    
   
    function calsquare() {
        calculator.display.value = Math.pow(calculator.display.value,2);
    }
    function calpi() {
        calculator.display.value = Math.PI(calculator.display.value);
    }
    function calfact(){
        
        if (calculator.display.value === 0) {
            calculator.display.value = '1';
        } 
        else if (calculator.display.value < 0) {
            calculator.display.value = NaN;
        } 
        else {
          var number = 1;
          for (let i = calculator.display.value; i > 0; i--) {
            number *= i;
          }
          calculator.display.value = number;
        }
    }