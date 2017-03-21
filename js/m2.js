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
          if(res.student1){
              var message = 
                res.student1
             var message2 = res.marks
             } 

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);
