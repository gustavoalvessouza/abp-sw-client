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
};
