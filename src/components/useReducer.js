import React , { useReducer } from "react";
import "./Hooks/style.css"

const reducer = (state, action ) => {
  if(action.type === "INCREASE"){
  state = state + 1 ;
  }

  if( state >  0 && action.type === "DECREASE"){
    state = state - 1 ;
    }
    return state;
};

const UseReducer = () => {
  // const initialData = 0;
  // const [myNum, setMyNum] = React.useState(initialData);
  
  
  const initialData = 10;
  const [state, dispatch] = useReducer(reducer, initialData);
  
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({type:"INCREASE"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREASE
        </div>
        <div
          class="button2"
          onClick={() => dispatch({type:"DECREASE"})}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREASE
        </div>
      </div>
    </>
  );
};
export default UseReducer;
