/* ==========================================================================
    Scene1
   ========================================================================== */
const model = document.querySelector(".model");
const videod = model.querySelector("#desktop1");
const videom = model.querySelector("#mobile1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 15500,
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
  if (window.innerWidth<=768){
    scrollpos = (e.scrollPos-6300) / 500;
  }
  else{
    scrollpos = (e.scrollPos-4300) / 500;
  }
  //console.log(e.scrollPos);
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  //console.log(scrollpos, delay);
  if (window.innerWidth<=768){
    videom.currentTime = delay;
  }
  else{
    videod.currentTime = delay;
  }
}, 99.9);
