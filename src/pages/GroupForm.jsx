import { Card, Container } from "react-bootstrap"
import useGroupStore from "../stores/GroupStore"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function GroupForm() {
  const { selectedGroup, loadGroupById, setSelectedGroup } = useGroupStore()
  const { groupId } = useParams()

  useEffect(() => {
    const fetch = async () => {
      if (!selectedGroup) {
        await loadGroupById(groupId).then((group) => {
          setSelectedGroup(group)
        })
      }
    }

  })

  return (
    <Container>
      <h1>Group</h1>
      <Card>

      </Card>
    </Container>
  )
}

export default GroupForm