var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeliLine){
  katzDeliLine.unshift(katzDeliLine)
  return `"There is nobody waiting to be served!"`
}