const btnClick = document.querySelectorAll("button");

// btnClick.addEventListener("click", handleClick);
// function handleClick() {
//     alert("get clicked");
// }

//or we can write thhis way also and it will does the same things 
for (var i =0; i < btnClick.length;i++) {
    btnClick[i].addEventListener("click", function () {
        alert("get clicked");
    });
}