const model = document.querySelector(".model");
const video = model.querySelector("video");
//const text = model.querySelector("h1");
//END SECTION
//const section = document.querySelector("section");
//const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 5600,
  triggerElement: model,
  triggerHook: 0
})
  .addIndicators()
  .setPin(model)
  .addTo(controller);

//Text Animation
// const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
//
// let scene2 = new ScrollMagic.Scene({
//   duration: 6000,
//   triggerElement: model,
//   triggerHook: 0
// })
//   .setTween(textAnim)
//   .addTo(controller);

//Video Animation
let accelamount = 0.05;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = (e.scrollPos-2500) / 200;
  console.log(e.scrollPos);
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  //console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);
