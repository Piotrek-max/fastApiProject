const board = document.querySelector('.container')
const squares = document.querySelectorAll('.square') //nodeList wszystkich pól
const Playing = document.querySelector('.playing')

const winBoard = document.querySelector('.WinBoard_off')
const winner = document.querySelector('.winner')
const restart = document.querySelector('.restart')

var xIsPlaying = true
var isDraw = false
var x = "<img src='x.png'/>"
var o = "<img src='O.png'/>"




function check(checking) {
    //Możliwość zwycięstwa 123, 456, 789, 147, 258, 369, 159, 753


    //sprawdza czy ktoś wygrał i jak to to w jaki sposób(jaki obrazek wstawić)
    if (squares[0].dataset.type == checking &&
        squares[1].dataset.type == checking &&
        squares[2].dataset.type == checking) {

        winBoard.classList.add('WinBoard')
        winBoard.innerHTML = '<img src="win1.png">'
        return true
    }
    if (squares[3].dataset.type == checking &&
        squares[4].dataset.type == checking &&
        squares[5].dataset.type == checking) {

        winBoard.classList.add('WinBoard')
        winBoard.innerHTML = '<img src="win2.png">'
        return true
    }

    if (squares[6].dataset.type == checking &&
        squares[7].dataset.type == checking &&
        squares[8].dataset.type == checking) {

        winBoard.classList.add('WinBoard')
        winBoard.innerHTML = '<img src="win3.png">'
        return true
    }

    if (squares[0].dataset.type == checking &&
        squares[3].dataset.type == checking &&
        squares[6].dataset.type == checking) {

        winBoard.classList.add('WinBoard')
        winBoard.innerHTML = '<img src="win4.png">'
        return true
    }

    if (squares[1].dataset.type == checking &&
        squares[4].dataset.type == checking &&
        squares[7].dataset.type == checking) {

        winBoard.classList.add('WinBoard')
        winBoard.innerHTML = '<img src="win5.png">'
        return true
    }

    if (squares[2].dataset.type == checking &&
        squares[5].dataset.type == checking &&
        squares[8].dataset.type == checking) {

        winBoard.classList.add('WinBoard')
        winBoard.innerHTML = '<img src="win6.png">'
        return true
    }

    if (squares[0].dataset.type == checking &&
        squares[4].dataset.type == checking &&
        squares[8].dataset.type == checking) {

        winBoard.classList.add('WinBoard')
        winBoard.innerHTML = '<img src="win7.png">'
        return true
    }

    if (squares[6].dataset.type == checking &&
        squares[4].dataset.type == checking &&
        squares[2].dataset.type == checking) {


        winBoard.classList.add('WinBoard')
        winBoard.innerHTML = '<img src="win8.png"/>'
        return true
    }

    //sprawdza czy jest remis
    console.log("asd")
    isDraw = true
    squares.forEach(el => {

        if (el.dataset.type == "blank") {
            isDraw = false
            return
        }


    })


    return false
}


function win(winner) {
    squares.forEach(el => {
        el.classList.add('selected')
        el.dataset.type = winner
    })
}




board.addEventListener("click", event => {


    if (!event.target.closest('button')) return
    if (event.target.dataset.type != "blank") { alert("This square is occupied"); return }

    const square = event.target
    const { type } = square.dataset

    square.classList.add('selected')



    if (xIsPlaying) {

        square.dataset.type = 'X'
        square.innerHTML = x
        Playing.innerHTML = "Playing:" + o
        xIsPlaying = false

    } else {

        square.dataset.type = 'O'
        square.innerHTML = o
        Playing.innerHTML = "Playing:" + x
        xIsPlaying = true

    }


    if (check("X")) {
        winner.innerHTML = x + " WIN"
        win("X")
    } else if (check("O")) {
        winner.innerHTML = o + " WIN"
        win("O")

    } else if (isDraw) {
        winner.innerHTML = "DRAW"

    }


    console.log(square.dataset.key)
    console.log(square.dataset.type)




})


restart.addEventListener("click", event => {



    location.reload()
        /*squares.forEach(el => {
            el.classList.remove('selected')
            el.dataset.type = "blank"
            el.innerHTML = el.dataset.key
        })

        xIsPlaying = true
        Playing.innerHTML = "Playing:" + x*/



})