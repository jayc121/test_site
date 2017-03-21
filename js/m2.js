// Event handling
document.addEventListener("DOMContentLoaded",
  function getmarks(event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
         function (res) {
              var message = 
                res.student1
              if (res.marks) {
                message += " marks are 50";
              }
              else {
                message += " fail";
              }
             

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);
