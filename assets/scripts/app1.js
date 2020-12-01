/* ==========================================================================
    Scene1
   ========================================================================== */
const model = document.querySelector(".model");
const video = model.querySelector("video");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 14000,
  triggerElement: model,
  triggerHook: 0
})
  //.addIndicators()
  .setPin(model)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = (e.scrollPos-2700) / 500;
  console.log(e.scrollPos);
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  //console.log(scrollpos, delay);

  video.currentTime = delay;
}, 66.6);

/* ==========================================================================
    Scene 2
   ========================================================================== */
// const model1 = document.querySelector(".model1");
// const video1 = model1.querySelector("video");
//
// //Scenes
// let scene1 = new ScrollMagic.Scene({
//   duration: 3000,
//   triggerElement: model1,
//   triggerHook: 0
// })
//   //.addIndicators()
//   .setPin(model1)
//   .addTo(controller);
//
//   let delay1 = 0;
//
//   scene1.on("update", e => {
//     scrollpos = (e.scrollPos-5200) / 200;
//     console.log(e.scrollPos);
//   });
//
//   setInterval(() => {
//     delay1 += (scrollpos - delay1) * accelamount;
//     //console.log(scrollpos, delay);
//
//     video1.currentTime = delay1;
//   }, 66.6);
