import calculatrice from "../assets/calculatrice.png";

const Header = () => {
  return(
    <>
      <div className="header">
        <div className="header-content">
          <img alt="calculatrice" src={calculatrice}/>
          <h1> REACT COUNTER </h1>
        </div>
      </div>
    </>

  )
}

export default Header;