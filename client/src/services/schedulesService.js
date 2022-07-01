import axios from 'axios'

const API_URL = process.env.REACT_SCHEDULE_API_URL

export const createSchedule = (schedule) => {
    const { title, description, begin, end } = schedule

    const url = `${API_URL}/projects`

    return axios.post(url, { title, description, begin, end })
}

export const getSchedules = () => {
    const url = `${API_URL}/projects`

    return axios.get(url)
}

export const deleteSchedule = (scheduleId) => {
    const url = `${API_URL}/projects/${scheduleId}`

    return axios.delete(url)
}