const initial = 0;

const AdditionExample = (state = initial, action) => {
  if(action.type === 'Addition'){
    return state = action.inp1 + action.inp2

  }else{
    return state
  }
}

export default AdditionExample
