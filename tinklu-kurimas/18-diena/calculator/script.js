function calculate(num1, num2, operation) {
    try {
      let result;
  
      
      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
         
          if (num2 === 0) {
            throw new Error("Cannot divide by zero");
          }
          result = num1 / num2;
          break;
        default:
         
          throw new Error("Invalid operation");
      }
  
      
      return result;
  
    } catch (error) {
      
      console.error(error.message);
    }
  }
  

  console.log(calculate(10, 2, "+")); // Should output 12
  console.log(calculate(10, 2, "/")); // Should output 5
  console.log(calculate(10, 0, "/")); // Should log "Cannot divide by zero" error
  console.log(calculate(10, 2, "&")); // Should log "Invalid operation" error