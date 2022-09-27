var button = document.getElementById("picBtn");
var pic = document.getElementById("pugPic1");
const picArr = [
  "../pictures/pugPictures/pugpic1.jpg", "../pictures/pugPictures/pugpic2.jpeg",
  "../pictures/pugPictures/pugpic3.jpeg", "../pictures/pugPictures/pugpic4.jpg",
  "../pictures/pugPictures/pugpic5.jpg", "../pictures/pugPictures/pugpic6.JPG",
  "../pictures/pugPictures/pugpic7.JPG", "../pictures/pugPictures/pugpic8.JPG",
  "../pictures/pugPictures/pugpic9.jpg", "../pictures/pugPictures/pugpic10.JPG",
];

//New Random Picture
button.addEventListener("click", function () {
    var randomNumber = Math.floor(Math.random() * 9);
    pic.src=picArr[randomNumber];
});


