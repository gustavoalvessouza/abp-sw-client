import React from "react";

import { Header, Input } from "../../components";

import { Container, Card, CardTitle, CardInputs, LoginButton } from "./styles";

export const Dashboard = () => {
	return (
		<Container>
			<Header />

			<Card>
				<CardTitle>Crie um novo evento</CardTitle>

				<CardInputs>
					<Input placeholder="Titulo" />
					<Input placeholder="Descrição" />
					<Input placeholder="Data" />

					<LoginButton>Criar evento</LoginButton>
				</CardInputs>
			</Card>
		</Container>
	);
};
