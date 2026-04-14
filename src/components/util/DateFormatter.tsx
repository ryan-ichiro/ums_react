import dayjs from "dayjs"

function formatToDateWithTime(date: Date, index?: any) {
  const formattedDate = dayjs(date).format("YYYY-MM-DD HH:MM:ss")
  if (index) { return <td key={index}>{formattedDate}</td> } else { return formattedDate }
}

function formatToDate(date: Date, index?: any) {
  const formattedDate = dayjs(date).format("YYYY-MM-DD")
  if (index) { return <td key={index}>{formattedDate}</td> } else { return formattedDate }
}

export { formatToDateWithTime, formatToDate }