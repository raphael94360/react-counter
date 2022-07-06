const Main = (props) => {
  return(
    <div className="main">
      <div className="compteur">
        <p>
          {props.counter > 0 && (
            <span onClick={() => {
              props.handleCounter("-");
            }}>
            -
            </span>
          )}
        </p>
       
        <div> {props.counter} </div>
        
        <p>
          {props.counter < 10 && (
            <span onClick={() => {
            props.handleCounter("+");
            }}>
            +
            </span>
          )}
        </p>

      
      </div>

      <div className="reset" onClick={() => {
        props.setCounter(0);
      }}> 
      Reset 
      </div>

    </div>

  )
}

export default Main;