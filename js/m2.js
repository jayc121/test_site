// Event handling
document.addEventListener("DOMContentLoaded",
  function getmarks(event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
           var name =
   document.getElementById("name").value;
   var message = "<h2>" + name + "!</h2>";

  

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === res.student1) {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title +=;
    document
        .querySelector("h1")
        .textContent = marks;
  }

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);
