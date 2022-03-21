import moment from 'moment'
export const FORMAT_DATE = 'YYYY-MM-DD'

export const dateFormartUS = (date) => moment(date).format(FORMAT_DATE)
