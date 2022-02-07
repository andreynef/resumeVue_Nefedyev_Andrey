export default (number)=>{
  if(number >1000){
    return number.toFixed(0)
  }
  if(number <0.009){
    return number.toExponential(2)
  }
  if(number >0.009 && number <10){
    return number.toFixed(3)
  }
  else return number.toFixed(2)
}

