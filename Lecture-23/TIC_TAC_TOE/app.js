let cellElements = document.querySelectorAll('.cell')
// console.log(cellElements);

for(let cell of cellElements){
    cell.addEventListener('click' , handleClick , {once:true})
}

let winning_combination = [
    [0,1,2],
    [3,4,5], 
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
//assume first turn is always of x
let circle_turn = false;

function handleClick(e){
    // mark the symbol
    let clickedCell = e.target;
    let currentClass = circle_turn ? "circle" : "x";
    clickedCell.classList.add(currentClass)

    // check win 
    if( checkWin(currentClass) ){
        document.querySelector('.final-winner').innerHTML = `WINNER ${currentClass}`
        document.querySelector('.final-winner').parentElement.classList.add('show')
    }
    // check draw
    else if(isDraw()){
        document.querySelector('.final-winner').innerHTML = `DRAW`
        document.querySelector('.final-winner').parentElement.classList.add('show')
    }

    // switch the turns
    else{
        circle_turn = !circle_turn;
    }
}

function checkWin(currentClass){
    return winning_combination.some(function(itemRow){
        return itemRow.every(function(item){
            return cellElements[item].classList.contains(currentClass)
        })
    })
}
function isDraw(){
    // spead operator (object , arrays)
    return [...cellElements].every(function(cell){
       return cell.classList.contains('x') || cell.classList.contains('circle')
    })
}

function restart(){
    window.location.reload();
}
document.querySelector('#restart-btn').onclick = restart;