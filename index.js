
const nestedTarget = () => {
return document.getElementById('nested').querySelector('div.target')
  };
  
const increaseRankBy = n => {
  const upRank = document.getElementById('app').querySelectorAll('ul.ranked-list')
  for (let i = 0; i < upRank.length; i++){
    upRank[i].innerHTML = ((parseInt(upRank[i].innerHTML)) + n)
    }
};

function deepestChild(){
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1]

}