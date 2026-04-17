import { Button } from "react-bootstrap"
import DataTable from "./util/DataTable"
import { formatToDateWithTime } from "./util/DateFormatter"
import useLoadingStore from "../stores/LoadingStore"

function GroupMembersTable({ }) {
  const { loadingVal } = useLoadingStore()
  const headers = [
    { key: 'id', label: "ID", sortable: true, type: String },
    { key: 'firstName', label: "First Name", sortable: true, type: String },
    { key: 'lastName', label: "Last Name", sortable: true, type: String },
    { key: 'createdOnDatetime', label: "Date Joined/Requested", sortable: true, type: String },
    { key: 'remove', label: "Remove", sortable: false, type: Button, variant: 'danger' }
  ]


  return (
    <>
      <DataTable
        headers={headers}
        //data={groupUserFE}
        dateFormatter={formatToDateWithTime}
        noDataMessage={"No Data Fetched"}
        loading={loadingVal}
      />
    </>
  )
}

export default GroupMembersTable