document.addEventListener("DOMContentLoaded", () => {
  let img = document.querySelector("#before img");

  img.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", this.src);
  });

  let target = document.getElementById("after");
  
  target.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  target.addEventListener("drop", function (event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text/plain");
    target.innerHTML = `<img src="${data}" />`;
    document.querySelector("#before img").style.display = "none";
  });
});



// document.addEventListener("DOMContentLoaded", () => {
//   let img = document.querySelector("#before img");
//   let target = document.getElementById("after");

//   img.addEventListener("click", function () {
//     this.style.display = "none";
//     target.innerHTML = `<img src="${this.src}" style="display: block;" />`;
//   });
// });
