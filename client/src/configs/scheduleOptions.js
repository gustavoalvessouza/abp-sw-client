export const calendars = [
	{
		id: "0",
		name: "Pessoal",
		bgColor: "#FF8383",
		borderColor: "#FF8383",
	},
	{
		id: "1",
		name: "Empresa",
		bgColor: "#FF435B",
		borderColor: "#FF435B",
	},
];

export const template = {
	allday(schedule) {
		return `${schedule.title}<i class="fa fa-refresh"></i>`;
	},

	alldayTitle() {
		return null;
	},

	popupEdit: function() {
		return 'Editar';
	},

	popupDelete: function() {
		return 'Deletar';
	},
};


export const theme = {
    'week.timegridOneHour.height': '2.5rem',
    'week.timegridHalfHour.height': '1.25rem',
    'week.today.backgroundColor': 'rgb(255, 67, 91, 0.2)',
    'common.border': '1px solid #e5e5e5',
    'common.creationGuide.backgroundColor': 'lightgrey'
};