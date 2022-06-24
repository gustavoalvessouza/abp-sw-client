import React from 'react'

import { Header } from '../../components'

import { Container, Card, CardTitle, CardInputs, Input, LoginButton } from './styles'

export const SignIn = () => {
    return (
        <Container>
            <Header />

            <Card>
                <CardTitle>Entrar como Empresa</CardTitle>

                <CardInputs>
                    <Input placeholder='Usuário' />
                    <Input placeholder='Senha' />
                    <LoginButton>Entrar</LoginButton>
                </CardInputs>
            </Card>
        </Container>
    )
}