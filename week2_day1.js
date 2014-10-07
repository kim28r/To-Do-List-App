var form = document.getElementById("todoList");
var list = document.getElementById("jobList");


// Catch the event when the user clicks "Save".
form.addEventListener("submit", function (event) {
    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    // Prevent the data from being sent to the server.
    // Also prevents the page from being refreshed.
    event.preventDefault();

    // this.title and this.good are available because of the
    // name="title" and name="good" attributes in index.html
    var title = this.title.value;

    // Make a new list item with document.createElement()
    var li = document.createElement("li");
    // Set the contents of the li to be the movie title. This is a
    // dangerous step because if the user enters HTML then the browser
    // will render it. What if the user enters
    // <style>*{display:none;}</style> or
    // <style>body{color:red;}</style>?
    li.innerText = title;
    btn1.innerText = "Done";
    btn2.innerText = "Delete";
    // Merely creating the element does not add it to the page.
    // Make it visible on the page by using appendChild().
    list.appendChild(li);
    li.appendChild(btn1);
    li.appendChild(btn2);

    btn1.addEventListener("click", function () {
      if (btn1.innerText=="Undo") {
        li.style.textDecoration="none";
        btn1.innerText = "Done";
      } else {
        li.style.textDecoration = "line-through";
        btn1.innerText = "Undo";
      }
    });


    btn2.addEventListener("click", function() {
      $(this).parent().remove();

    });


    // Clear out the previous title from the text field
    this.title.value = "";
});

//testing
  // btn1.addEventListener('click', function() {
  //   li.style.textDecoration = "none";
  //   window.onload=initialize;
  // });




// var form = document.getElementById("todoList");
// var list = document.createElement("jobList");

// form.addEventListener("submit", function (event){
// 		var btn = document.createElement("button");
//     event.preventDefault();
		
// 		var title = this.name.value;
		
// 		var li = document.createElement("li");
// 		li.innerText = title;
//     btn.innerText="Delete";
//     list.appenChild(li);
//     li.appendChild(btn);

//     this.title.value="";
// });




//Safest way that also works firefox

// var title = this.title.value;

// var listItem = document.createElement("li");
// var text = document.createTextNode(title);
// listItem.appenChild(text);
// list.appendChild(listItem);

// this.title.value = "";