import uuid from 'react-uuid';
import moment from 'moment'

export const formatSchedules = (schedule) => {
    const scheduleStart = moment(schedule.begin).format('YYYY-MM-DD HH:mm:ss')
    const scheduleEnd = moment(schedule.end).format('YYYY-MM-DD HH:mm:ss')

    return {
        id: uuid(),
        calendarId: '1',
        title: schedule.title,
        category: 'time',
        dueDateClass: '',
        start: new Date(scheduleStart),
        end: new Date(scheduleEnd)
    }
}