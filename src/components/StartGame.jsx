import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button';

function StartGame( { toggle } ) {
  return (
    <div>

        <Container>
            <div>
                <img src="/images/dices.png" alt="" />
            </div>
            <div className='content'>
                <h1>
                    Dice Game
                </h1>
                <Button onClick={toggle}>PLAY NOW</Button>
            </div>
        </Container>

    </div>
  )
}

export default StartGame;


const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    align-items: center;
    margin: 0 auto;

    .content {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;
