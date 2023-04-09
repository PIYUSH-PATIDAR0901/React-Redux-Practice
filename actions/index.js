export const incNumber = () =>{
    return{
        type:'INCREMENT'
    }
}
export const decNumber = () =>{
    return{
        type:'DECREMENT'
    }
}

export const StartImg = () =>{
    return{
        type:'Rotate',
    }
}

export const Add1 = (inp1, inp2) => {
    return{
        type: "Addition",
        inp1: inp1,
        inp2: inp2
    }
}