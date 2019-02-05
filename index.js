var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var nowServing = katzDeliLine[0]
    return 
  }katzDeliLine.shift(katzDeliLine)
  return `"There is nobody waiting to be served!"`
}