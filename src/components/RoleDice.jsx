import React, { useState } from 'react'
import styled from 'styled-components'


function RoleDice({ roleDice, currentDice}) {


  return (
    <DiceContainer>
        <div className='dice' onClick={roleDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
        </div>
        <p>Click on dice to roll</p>     
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    flex-direction: column;
    align-items: center;    
    display: flex;
    margin-top: 48px;

    .dice{
        cursor: pointer;
    }


    p{
        font-size: 24px;
    }
`;