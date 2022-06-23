import React from 'react'

import { Container, Header, HeaderTitle, Card, CardTitle, CardSubtitle, CardButtons, LoginButton } from './styles'

import CalendarIcon from '../../assets/icons/calendar.png'

export const Home = () => {
    return (
        <Container>
            <Header>
                <img src={CalendarIcon} alt="Calendário" width={60} height={60} />
                <HeaderTitle>Calendário Web</HeaderTitle>
            </Header>

            <Card>
                <CardTitle>Você é uma?</CardTitle>
                <CardSubtitle>Selecione uma das opções abaixo</CardSubtitle>

                <CardButtons>
                    <LoginButton backgroundColor="#FF435B" color="#fff">Empresa</LoginButton>
                    <LoginButton color="#717171">Pessoa</LoginButton>
                </CardButtons>
            </Card>
        </Container>
    )
}