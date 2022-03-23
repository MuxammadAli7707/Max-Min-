const elText = document.querySelectorAll(".form-control");
const elGrow = document.querySelectorAll(".range-grow");

elText.forEach((item, index) => {
  item.addEventListener("keyup", () => {
    let value =  item.getAttribute('maxlength');
    let n = 100/value;
    if(index == 0){
      elGrow[index].style.width = `${item.value.length * n}%`;
      elGrow[index].textContent = `${item.value.length * n}%`;
    } else if(index == 1){
      elGrow[index].style.width = `${item.value.length}%`;
      elGrow[index].textContent = `${item.value.length}%`;
    } else if(index == 2){
      elGrow[index].style.width = `${item.value.length / 10}%`;
      elGrow[index].textContent = `${item.value.length / 10}%`;
    }
  });
});




