import React from 'react'
import styled from 'styled-components'

import Pin from './Pin'
import './Mainboard.css'
function Mainboard({pins}) {
    return (
        <div>
            <Wrapper>
               <Container className="mainboard_container">
                  {pins.map(({urls},index)=>{
                    return <Pin key={index} url={urls.regular}/>}
                  )} 
               </Container>
            </Wrapper>
        </div>
    )
}

export default Mainboard

const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  margin-top:15px;
  width:100%;
  height:100%;
`

const Container = styled.div`
  margin:0 auto;
  height:100%;
  background-color:white;
`