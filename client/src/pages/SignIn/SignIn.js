import React from 'react'
import { useParams } from "react-router-dom";

import { Header } from '../../components'

import { Container, Card, CardTitle, CardInputs, Input, LoginButton } from './styles'

export const SignIn = () => {
    const { type } = useParams()

    const typeTranslator = {
        'company': 'Empresa',
        'user': 'Pessoa'
    }

    return (
        <Container>
            <Header />

            <Card>
                <CardTitle>Entrar como {typeTranslator[type] || 'Empresa'}</CardTitle>

                <CardInputs>
                    <Input placeholder='Usuário' />
                    <Input placeholder='Senha' />
                    <LoginButton>Entrar</LoginButton>
                </CardInputs>
            </Card>
        </Container>
    )
}