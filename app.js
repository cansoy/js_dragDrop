const containers=document.querySelectorAll('.container')
const items=document.querySelectorAll('.item')
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
const dragStart=(e)=>{
    e.target.classList.add('hold')
    setTimeout(()=>{
        e.target.classList.add('invisible')
    },1)
}
const drag=(e)=>{

}
const dragEnd=(e)=>{
    e.target.classList.remove('hold')
    e.target.classList.remove('invisible')
}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
const dragOver=(e)=>{
    e.preventDefault()
    e.target.classList.add('overon-me')
}

const dragEnter=(e)=>{
    e.preventDefault()

}
const dragLeave=(e)=>{
    e.target.classList.remove('overon-me')
}
const drop=(e)=>{
    const dropItem=document.querySelector('.hold')
    e.target.append(dropItem)
    e.target.classList.remove('overon-me')
}

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
items.forEach(elem=>{
    elem.addEventListener('dragstart',dragStart)
    elem.addEventListener('drag',drag)
    elem.addEventListener('dragend',dragEnd)
})
containers.forEach(elem=>{
    elem.addEventListener('dragover',dragOver)
    elem.addEventListener('dragenter',dragEnter)
    elem.addEventListener('dragleave',dragLeave)
    elem.addEventListener('drop',drop)
})