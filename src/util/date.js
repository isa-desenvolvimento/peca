import moment from 'moment'
export const FORMAT_DATE = 'YYYY-MM-DD'

export const dateFormartUS = (date) => moment(date).format(FORMAT_DATE)

export const getMonth = (num) => month[num]

const month = {
  '01': 'Janeiro',
  '02': 'Fevereiro',
  '03': 'Março',
  '04': 'Abril',
  '05': 'Maio',
  '06': 'Junho',
  '07': 'Julho',
  '08': 'Agosto',
  '09': 'Setembro',
  10: 'Outubro',
  11: 'Novembro',
  12: 'Dezembro',
}

export const periodoDate = (periodo) => {
  const dateNow = moment()
  dateNow.subtract(periodo, 'days')

  const date = moment().format(FORMAT_DATE)

  return {
    data_inicio: dateNow.format(FORMAT_DATE),
    data_fim: date,
  }
}
