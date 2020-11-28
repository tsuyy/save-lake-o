const model = document.querySelector(".model");
const video = model.querySelector("video");
// const text = intro.querySelector("h1");
// const imgWrapper = document.querySelector(".img-wrapper");
// const fish = imgWrapper.querySelector(".f_2");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: model,
  triggerHook: 0
})
  .addIndicators()
  .setPin(model)
  .addTo(controller)
  .on("enter", function () {
    video.play();
  })
  .on("leave", function () {
    video.pause();
  });

//Text Animation
// const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

// let scene2 = new ScrollMagic.Scene({
//   duration: 10000,
//   triggerElement: intro,
//   triggerHook: 0
// })
//   .setTween(textAnim)
//   .addTo(controller);

// //Video Animation
// let accelamount = 0.1;
// let scrollpos = 0;
// let delay = 0;

// scene.on("update", e => {
//   scrollpos = e.scrollPos / 1000;
// });

// setInterval(() => {
//   delay += (scrollpos - delay) * accelamount;
//   // console.log(scrollpos, delay);

//   video.currentTime = delay;
// }, 33.3);
