import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeaderTitle = styled.h2`
    margin-top: 12px;
    color: #565656;
`

export const Card = styled.div`
    margin-top: 50px;
    width: 400px;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 30px #ccc;
`

export const CardTitle = styled.h3`
    color: #565656;
    width: 100%;
    font-size: 16pt;
    text-align: center;
`

export const CardSubtitle = styled.small`
    display: inline-block;
    color: #565656;
    width: 100%;
    font-size: 13pt;
    text-align: center;
`

export const LoginButton = styled.button`
    outline: none;
    border-radius: 4px;
    border: none;
    background: ${props => props.backgroundColor || '#DBDBDB'};
    padding: 15px;
    width: 150px;
    cursor: pointer;
    font-size: 12pt;
    font-weight: 600;
    color: ${props => props.color || '#000'};

    &:hover {
        filter: brightness(85%);
    }
`
export const CardButtons = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: space-around;
`