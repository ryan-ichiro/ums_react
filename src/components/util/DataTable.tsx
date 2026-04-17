import { Button, Spinner, Table } from "react-bootstrap"
import dayjs from "dayjs"

interface header {
  key: string,
  label: string,
  sortable: undefined | true
  options?: undefined | { true: string, false: string }
  type: any
  cell: Function
  variant?: undefined | string
}

interface DataTableProps {
  headers: header[],
  data: any[],
  dateFormatter: Function
  noDataMessage: String
  loading: number
}

function DataTable({ headers, data, dateFormatter, noDataMessage, loading }: DataTableProps) {
  return (
    <>
      <Table
        striped
        hover
        className="my-3 border"
      >
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
          {
            data ? (
              data.map((row, index) => {
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
                        return dateFormatter(row[key], index)
                      } else if (type == Button) {
                        return (
                          <td key={index} width={1}>
                            <Button
                              onClick={() => header.cell(row)}
                              variant={header.variant}>{header.label}</Button>
                          </td>
                        )
                      }
                    })}
                  </tr>
                )
              })
            ) : (
              <tr>
                <td style={{textAlign: 'center'}} colSpan={headers.length}>
                  {loading > 0 ? 
                  <Spinner /> : <b>{noDataMessage}</b>}
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>

  )
}



export default DataTable