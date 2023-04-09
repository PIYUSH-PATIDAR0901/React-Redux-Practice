const inicialdata = true;

const Condition = (state=inicialdata, action) => {
    if(action.type==="Rotate"){
        return (state===true)?false:true;
    }
    else{
        return state;
    }
  }
  export default Condition;