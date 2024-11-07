function changeSize(factor) {
  const image = document.getElementById('image'); 
  let currentHeight = parseFloat(image.style.height); 

  
  image.style.height = (currentHeight * factor) + 'cm';
}