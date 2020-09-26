var text_array = document.getElementsByClassName('animated');
var timers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var in_hold = [false,false,false,false,false,false,false,false]
var in_reverse = [false,false,false,false,false,false,false,false]

const interval = setInterval(function() {
  for (var i = 0; i < text_array.length; i++) {
    	update(text_array[i],i);
      timers[i] = timers[i] + 20;
  }
}, 20);

function update(element, index) {
  let text = element.getAttribute("animated");
  let hold = parseInt(element.getAttribute("hold"))
  let reverse = parseInt(element.getAttribute("reverse"))
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

  if(timers[index] >= element.getAttribute("sec") && in_hold[index] != true && in_reverse != true){
    timers[index] = 0;
    let sub_index = parseInt(element.getAttribute("subindex"))

    if(sub_index >= temp.length){
      if(hold == 0){
        sub_index = -1;
        element.setAttribute("index",  e_index + 1)
        if(e_index + 1 >= animations){
          element.setAttribute("index",  0)
        }
      }else {
        in_hold[index] = true;
      }
    }

    if(!(sub_index >= temp.length)){
      element.setAttribute("subindex",  sub_index + 1)
    }

  }

  if(in_reverse[index]){

    if(timers[index] >= reverse){

      if((e_subIndex - 1) > 0){
        element.setAttribute("subindex", e_subIndex - 1)
      }else {
        element.setAttribute("subindex", 0)
        in_reverse[index] = false;

        if(e_index + 1 >= animations){
          element.setAttribute("index",  0)
        }else {
          element.setAttribute("index",  e_index + 1)
        }

      }



      timers[index] = 0;
    }
  }

  if(in_hold[index] && in_reverse[index] != true){
    if(timers[index] >= hold){

      timers[index] = 0;
      in_hold[index] = false;

      if(reverse == -1){

        element.setAttribute("subindex", 0)

        element.setAttribute("index",  e_index + 1)
        if(e_index + 1 >= animations){

          element.setAttribute("index",  0)
        }

      }else {
        in_reverse[index] = true;
      }

    }
  }


}
