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
let accelamount = 0.15;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = (e.scrollPos-2700) / 500;
  // console.log(e.scrollPos);
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  //console.log(scrollpos, delay);

  video.currentTime = delay;
}, 99.9);
