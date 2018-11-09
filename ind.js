let inputs = document.querySelectorAll('input');

let map = new Map;

for (let input of inputs) {
  map.set(input, {values: [], index: - 1});

  input.addEventListener('blur', function(){
    let {values, index} = map.get(this);
    values.push(this.value);
    map.set(this, {values, index: index + 1});

    this.value = '';

    console.log(map.get(this));
  });

  input.addEventListener('keydown', function(event){
    if (event.key == 'ArrowLeft'){
      let {values, index} = map.get(this);

      if(index > - 1){
        this.value = values[index];
        map.set(this, {values, index: index -1});
      }

      event.preventDefault();
    }

    if (event.key == 'ArrowRight') {
      let {values, index} = map.get(this);

      if(index < values.length - 1 ){
        this.value = values[index + 1];
        map.set(this, {values, index: index + 1});
      }

      event.preventDefault();
    }


  });
}
