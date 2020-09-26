var text_array = document.getElementsByClassName('animated');
var timers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

const interval = setInterval(function() {
  for (var i = 0; i < text_array.length; i++) {
    	update(text_array[i],i);
      timers[i] = timers[i] + 100;
  }
}, 100);

function update(element, index) {
  let text = element.getAttribute("animated");
  text = text.split(";");
  let animations = text.length;
  let e_index = parseInt(element.getAttribute("index"))
  text = text[e_index];
  let temp = text.split("");
  let e_subIndex = parseInt(element.getAttribute("subindex"))

  text = "";

  for (var j = 0; j < e_subIndex; j++) {
    text += temp[j];
  }

  element.innerHTML = text + "_"

  if(timers[index] >= element.getAttribute("sec")){
    timers[index] = 0;
    let sub_index = parseInt(element.getAttribute("subindex"))

    if(sub_index >= temp.length){
      sub_index = -1;
      element.setAttribute("index",  e_index + 1)
      if(e_index + 1 >= animations){
        element.setAttribute("index",  0)
      }
    }

    element.setAttribute("subindex",  sub_index + 1)


  }


}
