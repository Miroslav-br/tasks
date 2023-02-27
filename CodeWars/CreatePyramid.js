function towerBuilder(nFloors) {
    const pyramid = []
    for(let i = 1; i  < nFloors + 1; i++){
        pyramid.push(" ".repeat((nFloors - i)))
        pyramid[i - 1] += "*".repeat(i * 2 - 1)   
        pyramid[i - 1] += " ".repeat((nFloors - i))
    }   
    return pyramid
}

  console.log(towerBuilder(10));
  debugger