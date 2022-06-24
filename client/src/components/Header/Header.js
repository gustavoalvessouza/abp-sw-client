import React from 'react'

import { Container, Title, CustomLink } from './styles'

import CalendarIcon from '../../assets/icons/calendar.png'

export const Header = () => {
    return (
        <CustomLink to="/">
            <Container>
                <img src={CalendarIcon} alt="Calendário" width={60} height={60} />
                <Title>Calendário Web</Title>
            </Container>
        </CustomLink>
    )
}