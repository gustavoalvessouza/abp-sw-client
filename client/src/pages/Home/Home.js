import React from 'react'

import { Link } from 'react-router-dom'

import { Header } from '../../components'

import { Container, Card, CardTitle, CardSubtitle, CardButtons, LoginButton } from './styles'

export const Home = () => {
    return (
        <Container>
            <Header />

            <Card>
                <CardTitle>Você é uma?</CardTitle>
                <CardSubtitle>Selecione uma das opções abaixo</CardSubtitle>

                <CardButtons>
                    <Link to="/signin/company">
                        <LoginButton backgroundColor="#FF435B" color="#fff">Empresa</LoginButton>
                    </Link>

                    <Link to="/signin/user">
                        <LoginButton color="#717171">Pessoa</LoginButton>
                    </Link>
                </CardButtons>
            </Card>
        </Container>
    )
}