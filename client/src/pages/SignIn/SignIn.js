import React from "react";
import { useParams, useLocation, Navigate, Link } from "react-router-dom";

import { Header } from "../../components";

import {
	Container,
	Card,
	CardTitle,
	CardInputs,
	Input,
	LoginButton,
} from "./styles";

import { typeRedirect, typeTranslator } from "../../configs/signInOptions";

export const SignIn = () => {
	const { type } = useParams();
	const location = useLocation();

	if (!typeTranslator[type]) {
		return <Navigate to="/" state={{ from: location }} replace />;
	}

	return (
		<Container>
			<Header />

			<Card>
				<CardTitle>Entrar como {typeTranslator[type] || "Empresa"}</CardTitle>

				<CardInputs>
					<Input placeholder="Usuário" />
					<Input placeholder="Senha" />

					<Link to={typeRedirect[type]} style={{ width: "100%" }}>
						<LoginButton>Entrar</LoginButton>
					</Link>
				</CardInputs>
			</Card>
		</Container>
	);
};
