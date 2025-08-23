


const submitButton = document.querySelector("button");
submitButton.addEventListener("click", function () {
  const textarea = document.getElementById("floatingTextarea");
  const message = textarea.value.trim();

  if (message === "") {
    alert("Please enter a comment before submitting.");
  } else {
    alert("Thank you for your message, Vicky will get back to you soon!");
    textarea.value = ""; 
  }
});

