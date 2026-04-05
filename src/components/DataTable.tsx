import { Button, Table } from "react-bootstrap"
import dayjs from "dayjs"

interface header {
  key: string,
  label: string,
  sortable: undefined | true
  options?: undefined | { true: string, false: string }
  type: any
  cell: Function
}

interface DataTableProps {
  headers: header[],
  data: any[]
}

function DataTable({ headers, data }: DataTableProps) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            {headers.map((header, index) => {
              return (
                <th key={index}>{header.label}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => {
            return (
              <tr key={index}>
                {headers.map((header, index) => {
                  const key = header.key
                  const type = header.type
                  if (type == String) {
                    return <td key={index}>{row[key]}</td>
                  } else if (type == Boolean) {
                    const bool = row[key]
                    return bool ? <td key={index}>{header.options?.true}</td> : <td>{header.options?.false}</td>
                  } else if (type == Date) {
                    return formatDate(row[key], index)
                  } else {
                    return <Button></Button>
                  }
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>

  )
}

function formatDate(date: Date, index?: any) {
  const formattedDate = dayjs(date).format("YYYY-MM-DD HH:MM:ss")
  return <td key={index}>{formattedDate}</td>
}

export default DataTable