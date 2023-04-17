function newItem() {
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("Unable to add, please enter something.");
  } else {
    $("#list").append(li);
  }

  function strikeOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function strikeOut() {
    li.toggleClass("strike");
  });

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);
  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
  }
  $("#list").sortable();
}

$("#input").keydown(function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    newItem();
  }
});

$("#form").on("submit", function (e) {
  e.preventDefault();
});
