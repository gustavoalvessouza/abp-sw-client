import React from "react";
import { Routes as RouterContainer, Route } from "react-router-dom";

import { Home, SignUp, SignIn, Schedules } from "./pages";

const routeList = [
	{ path: "/", component: Home },
	{ path: "/signup", component: SignUp },
	{ path: "/signin/:type", component: SignIn },
	{ path: "/schedules", component: Schedules },
];

function Routes() {
	return (
		<RouterContainer>
			{routeList.map(({ path, component: Component }) => (
				<Route path={path} element={<Component />} />
			))}
		</RouterContainer>
	);
}

export default Routes;
