import React, { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

// this is the exaple of the styled component

// const Button = styled.button`
//   background-color: black;
//   color: white;
//   padding: 10px;
// `;

function App() {

  const [ isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }


  return (
    <>
      <div>

        {isGameStarted ? <GamePlay/> : <StartGame toggle= {toggleGamePlay}/>}


        {/* this is the exaple of rhe button
            <Button>This is styled components button</Button> */}
      </div>
    </>
  );
}

export default App;
