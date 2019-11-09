var htmlEntities = {
  "<": "&lt;",
  ">": "&gt;",
  "/": "&sol;"
};
var eleSourceText = document.getElementById("source-text");
var eleTargetText = document.getElementById("target-text");
var inputStream = Rx.Observable.fromEvent(eleSourceText, "keydown");
var filterStream = inputStream.filter(function(event) {
  return event.key.length === 1;
});
var mapStream = filterStream.map(function(event) {
  var match = htmlEntities[event.key] || event.key;
  return match;
});
var subscription = mapStream.subscribe(
  function onNext(code) {
    eleTargetText.innerHTML += code;
  },
  function onError(error) {
    console.log("ERROR!");
  },
  function onCompleted() {
    console.log("done");
  }
);
