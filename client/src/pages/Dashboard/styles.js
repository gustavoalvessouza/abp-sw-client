import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Card = styled.div`
    margin-top: 50px;
    width: 400px;
    background: #fff;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 0 30px #ccc;
`

export const CardTitle = styled.h3`
    color: #565656;
    width: 100%;
    font-size: 16pt;
    text-align: left;
`

export const CardInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 20px;
`

export const Input = styled.input`
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    outline: none;
    padding: 10px;
    width: 100%;
    margin-bottom: 15px;
`

export const LoginButton = styled.button`
    outline: none;
    border-radius: 4px;
    border: none;
    background: #FF435B;
    padding: 15px;
    width: 100%;
    cursor: pointer;
    font-size: 12pt;
    font-weight: 600;
    color: #fff;

    &:hover {
        filter: brightness(85%);
    }
`