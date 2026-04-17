import { useEffect } from "react"
import { Button, Container, Table } from "react-bootstrap"
import useGroupStore from "../stores/GroupStore"
import DataTable from "../components/util/DataTable"
import { useNavigate } from "react-router-dom"
import { formatToDateWithTime } from "../components/util/DateFormatter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { groupsFE } from "../data/groups"
import useLoadingStore from "../stores/LoadingStore"

function Group() {
  const { loadGroups, groups, setSelectedGroup } = useGroupStore()
  const { loadingVal } = useLoadingStore()
  const navigate = useNavigate()

  const headers = [
    { key: 'edit', label: "Edit", sortable: false, cell: ((row) => editButtonClicked(row)), type: Button, variant: 'primary' },
    { key: 'delete', label: "Delete", sortable: false, cell: ((row) => console.log(row)), type: Button, variant: 'danger' },
    { key: 'id', label: "ID", sortable: true, type: String },
    { key: 'name', label: "Group Name", sortable: true, type: String },
    { key: 'emailGroup', label: "Group Email", sortable: true, type: String },
    { key: 'isPrivate', label: "Privacy", options: { true: "Private", false: "Public" }, type: Boolean },
    { key: 'createdOnDatetime', label: "Created On", sortable: true, type: Date },
    { key: 'lastUpdatedOnDatetime', label: "Modified On", sortable: true, type: Date }
  ]

  useEffect(() => {
    loadGroups()
  }, [])

  const editButtonClicked = (group) => {
    setSelectedGroup(group, true)
    navigate(`/group/groupform/${group.id}`)
  }

  const createButtonClicked = () => {
    setSelectedGroup(undefined)
    navigate(`/group/groupform/`)
  }

  return (
    <Container>
      <Button className="mt-3" onClick={() => createButtonClicked()}><FontAwesomeIcon icon={faPlus} /> Create Group</Button>
      <DataTable
        headers={headers}
        data={groupsFE}  
        dateFormatter={formatToDateWithTime}
        noDataMessage={"No Data Fetched"}
        loading={loadingVal}
      >
      </DataTable>
    </Container>
  )
}


export default Group