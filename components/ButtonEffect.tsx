import styled from '@emotion/styled'

const ButtonEffect = ({value, color, type}: any) => {
  const ButtonStyled = styled.div`
    /*.leftTop,
    .rightBottom {
      position: absolute;
      width: 15px;
    }*/
    .buttonEffect {
        position: relative;
        padding: 1em 1.5em;
        border: none;
        background-color: transparent;
        cursor: pointer;
        outline: none;
        font-size: 18px;
        margin: 1em 0.8em;
        font-family: pixelRand;
        font-weight: normal;
        color: ${color};
        :after,
        :before {
            content: '';
            display: block;
            position: absolute;
            width: 20%;
            height: 20%;
            border: 2px solid;
            transition: all 0.6s ease;
            border-radius: 2px;
        }
      
        :after {
            bottom: 0;
            right: 0;
            border-top-color: transparent;
            border-left-color: transparent;
            border-bottom-color: ${color};
            border-right-color: ${color};
        }
      
        :before{
            top: 0;
            left: 0;
            border-bottom-color: transparent;
            border-right-color: transparent;
            border-top-color: ${color};
            border-left-color: ${color};
        }
      
        :hover:after,
        :hover:before {
            width: 100%;
            height: 100%;
        }
    }
  `
    
  return (
    <ButtonStyled>
      <button className='buttonEffect' type={type}>{value}</button>
      {/*<div className="leftTop"></div>
      <div className="left"></div>
      <div className="right"></div>
  <div className="rightBottom"></div>*/}
    </ButtonStyled>
  )
}

export default ButtonEffect