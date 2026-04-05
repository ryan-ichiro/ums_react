import { useEffect } from "react"
import { Button, Container, Table } from "react-bootstrap"
import useGroupStore from "../stores/GroupStore"
import DataTable from "../components/DataTable"

function Group() {
  const { loadGroups, groups } = useGroupStore()
  const headers = [
    { key: 'edit', label: "Edit", sortable: false, cell: ((row) => console.log(row)), type: Button},
    { key: 'id', label: "ID", sortable: true, type: String },
    { key: 'name', label: "Group Name", sortable: true, type: String }, 
    { key: 'emailGroup', label: "Group Email", sortable: true, type: String },
    { key: 'isPrivate', label: "Privacy", options: {true: "Private", false: "Public"}, type: Boolean },
    { key: 'createdOnDatetime', label: "Created On", sortable: true, type: Date },
    { key: 'lastUpdatedOnDatetime', label: "Modified On", sortable: true, type: Date }
  ]
  useEffect(() => {
    loadGroups()
  }, [])

  return (
    <Container>
      <DataTable
        headers={headers}
        data={groups}>
      </DataTable>
    </Container>
  )
}

export default Group