const circles=document.querySelectorAll('.circle')
const prev=document.getElementById('prev')
const next=document.getElementById('next')
const progress=document.getElementById('progress')

current=1

next.addEventListener('click',()=>{
    current++
    if(current>circles.length){
        current=circles.length
    }
        update()

   
})


prev.addEventListener('click',()=>{
    current--
    if(current<1){
        current=1
    }   
        update()
        

   
})

function update(){
    circles.forEach((circle,idx)=> {
        if(idx<current){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })

    const active=document.querySelectorAll('.active')
    progress.style.width=(active.length-1)/(circles.length-1) * 100 +'%'
    }
    

