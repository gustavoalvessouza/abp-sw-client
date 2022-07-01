import React, { useEffect, useState } from "react";

import Calendar from "@toast-ui/react-calendar";

import { toast } from 'react-toastify';

import { deleteSchedule, getSchedules } from '../../services/schedulesService'

import { Header } from "../../components";

import { calendars, template, theme } from "../../configs/scheduleOptions";

import { formatSchedules } from "../../utils/helpers/schedulesHelper";

import { Container, CalendarContainer } from "./styles";

import "tui-calendar/dist/tui-calendar.css";

export const Schedules = () => {
	const [schedules, setSchedules] = useState([])
	
	useEffect(() => {
		loadSchedules()
	}, [])

	const loadSchedules = async () => {
		const response = await getSchedules()

		if (!response?.data?.projects) return

		const formattedSchedules = response.data.projects.map(schedule => formatSchedules(schedule))

		setSchedules(formattedSchedules)
	}

	const onBeforeDeleteSchedule = async ({ schedule }) => {
		const { id } = schedule

		try {
			await deleteSchedule(id)

			loadSchedules()
		} catch (err) {
			toast('Ops! Algo não está certo, tente novamente.', {
				type: 'error'
			})
		}
	}

	return (
		<Container>
			<Header />

			<CalendarContainer>
				<Calendar
					view="week"
					calendars={calendars}
					useCreationPopup={false}
              		useDetailPopup={true}
					disableDblClick={true}
					disableClick={false}
					isReadOnly={false}
					theme={theme}
					taskView={false}
					scheduleView={['time']}
					month={{
						startDayOfWeek: 0,
					}}
					schedules={schedules}
					template={template}
					week={{
						showTimezoneCollapseButton: false,
						timezonesCollapsed: false,
						daynames: [
							'Domingo',
							'Segunda-Feira',
							'Terça-Feira',
							'Quarta-Feira',
							'Quinta-Feira',
							'Sexta-Feira',
							'Sábado'
						  ]
					}}
					onBeforeDeleteSchedule={onBeforeDeleteSchedule}
				/>
			</CalendarContainer>
		</Container>
	);
};
