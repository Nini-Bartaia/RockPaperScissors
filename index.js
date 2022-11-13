const selectDivs=document.querySelectorAll('[data-selection]')
const player=document.querySelector('[selection]')
const comp= document.querySelector('[selection2]')
const result=document.querySelector('[result]')
const result2=document.querySelector('[result2]')
const selection=document.querySelector('[selection]')
const selection2=document.querySelector('[selection2]')
let playerWinner
const SELECTS=[
    {
        name:'paper',
        emoji:'✋',
        beats:'rock'

    },
    {
        name:'scissors',
        emoji:'✌️',
        beats:'paper'
    },
    { name:'rock',
    emoji:'✊',
    beats:'scissors'}
]
selectDivs.forEach(selection=>{
    selection.addEventListener('click', e=>{
        const selectionName=selection.dataset.selection
        const select=SELECTS.find(selection=> selection.name===selectionName)
       
        drawPlayer(selectionName)
        drawComputer()
        const computer=drawComputer()
        
        comp.innerText=computer.emoji
        const playerWinner=win(select,computer)
        const compWinner=win(computer,select)
     

        score(playerWinner,compWinner)
     
    })
})

function drawPlayer(selectionName){
    if(selectionName=='rock'){
        player.innerText='✊'
    } else if(selectionName=='scissors'){
        player.innerText='✌️'
    }else{
        player.innerText='✋'
    }
}

function drawComputer(){
const randomIndex=Math.floor(Math.random()* SELECTS.length)

    return (SELECTS[randomIndex])
}



function win(select,computer){
  
   
    return select.beats===computer.name
    
    
}



function score(player,comp){
    counter=0
  
    
    if(player===true && comp===false){
        result.innerText = parseInt(result.innerText) + 1
        
        console.log('player')
    }
    if(comp===true &&player===false){
        console.log('comp')
       
        result2.innerText = parseInt(result2.innerText) + 1
    }

}



