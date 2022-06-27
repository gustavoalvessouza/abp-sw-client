import React from "react";
import Calendar from "@toast-ui/react-calendar";

import { Header } from "../../components";

import { calendars, template } from "../../configs/scheduleOptions";

import { Container, CalendarContainer } from "./styles";

import "tui-calendar/dist/tui-calendar.css";

const schedules = [];

export const Schedules = () => {
	return (
		<Container>
			<Header />

			<CalendarContainer>
				<Calendar
					calendars={calendars}
					disableDblClick={true}
					disableClick={true}
					isReadOnly={false}
					month={{
						startDayOfWeek: 0,
					}}
					schedules={schedules}
					template={template}
					week={{
						showTimezoneCollapseButton: false,
						timezonesCollapsed: false,
					}}
				/>
			</CalendarContainer>
		</Container>
	);
};
