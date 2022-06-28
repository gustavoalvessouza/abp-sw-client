import React, { useState } from "react";

import { toast } from 'react-toastify';

import { Header, Input } from "../../components";

import { Container, Card, CardTitle, CardInputs, LoginButton } from "./styles";

import { createSchedule } from "../../services/schedulesService";

export const Dashboard = () => {
	const emptySchedule = {
		title: '',
		description: '',
		begin: null,
		end: null
	}

	const [schedule, setSchedule] = useState(emptySchedule)
	const [creatingSchedule, setCreatingSchedule] = useState(false)

	const handleInput = (field, value) => {
		setSchedule({ ...schedule, [field]: value })
	}

	const saveSchedule = async () => {
		toast('Criando novo evento...', {
			type: 'info'
		})

		setCreatingSchedule(true)

		const response = await createSchedule(schedule)

		if (response.status == 200) {
			clearSchedule()
			setCreatingSchedule(false)

			toast('Evento criado! 😊', {
				type: 'success'
			})
		}

		setCreatingSchedule(false)
	}

	const clearSchedule = () => {
		setSchedule(emptySchedule)
	}

	const shouldDisableScheduleCreation = !schedule.begin || !schedule.end

	return (
		<Container>
			<Header />

			<Card>
				<CardTitle>Crie um novo evento</CardTitle>

				<CardInputs>
					<Input 
						placeholder="Titulo"
						value={schedule.title}
						onChange={e => handleInput('title', e.target.value)}
					/>

					<Input
						placeholder="Descrição"
						value={schedule.description}
						onChange={e => handleInput('description', e.target.value)}
					/>

					<Input
						placeholder="Data de inicio"
						type="datetime-local"
						onChange={e => handleInput('begin', e.target.value)}
					/>

					<Input 
						placeholder="Data de fim"
						type="datetime-local"
						onChange={e => handleInput('end', e.target.value)}
					/>

					<LoginButton disabled={shouldDisableScheduleCreation || creatingSchedule} onClick={saveSchedule}>
						{creatingSchedule ? 'Criando evento...' : 'Criar evento'}
					</LoginButton>
				</CardInputs>
			</Card>
		</Container>
	);
};
