import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const createSchedule = (schedule) => {
    const { title, description, begin, end } = schedule

    const url = `${API_URL}/projects`

    return axios.post(url, { title, description, begin, end })
}

export const getSchedules = () => {
    const url = `${API_URL}/projects`

    return axios.get(url)
}