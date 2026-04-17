import { Button, Card, Container, Form, Spinner } from "react-bootstrap"
import useGroupStore from "../stores/GroupStore"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PageLoading from "../components/PageSpinner"
import Input from "../components/util/Input"
import { formatToDateWithTime } from "../components/util/DateFormatter"
import Date from "../components/util/Date"
import useUserStore from "../stores/UserStore"
import DataTable from "../components/util/DataTable"
import GroupMembersTable from "../components/GroupMembersTable"

function GroupForm() {
  const { selectedGroup, loadGroupById, setSelectedGroup, createGroup, updateGroup } = useGroupStore()
  const { getCurrentUser } = useUserStore()
  const { groupId } = useParams()
  const [name, setName] = useState()
  const [emailGroup, setEmailGroup] = useState()
  const navigate = useNavigate()

  const options = [
    { key: 'id', label: "ID", update: false, editable: false, type: 'input' },
    { key: 'name', label: "Group Name", update: true, editable: true, type: 'input', setter: setName },
    { key: 'emailGroup', label: "Group Email", update: true, editable: true, type: 'input', setter: setEmailGroup },
    { key: 'createdOnDatetime', label: "Created on", update: false, editable: false, type: 'date' },
    { key: 'lastUpdatedOnDatetime', label: "Last Updated", update: false, editable: false, type: 'date' }
  ]

  useEffect(() => {
    const fetch = async () => {
      if (!selectedGroup && groupId) {
        await loadGroupById(groupId).then((group) => {
          setSelectedGroup(group)
        })
      }
    }
    fetch()
  }, [])

  useEffect(() => {
    if (selectedGroup) {
      setName(selectedGroup['name'])
      setEmailGroup(selectedGroup['emailGroup'])
    }
  }, [])

  const saveGroupButtonPressed = () => {
    let currentUser = getCurrentUser()
    const requestObj = {
      name: name,
      emailGroup: emailGroup,
      responsibleUser: currentUser.id
    }

    if (groupId) {
      updateGroup(requestObj, groupId).then(() => {
        navigate(`/group`)
      })
    } else {
      createGroup(requestObj).then((group) => {
        const groupId = group.id
        setSelectedGroup(group)
        navigate(`/group/groupform/${groupId}`)
      })
    }

  }

  return (
    <>
      <EditGroupForm
        options={options}
        selectedGroup={selectedGroup}
        groupId={groupId}
        saveButtonPressed={saveGroupButtonPressed}
      />
      <Container className="my-3">
        <Card className="shadow mt-4">
          <Card.Header style={{ fontSize: '25px' }}><b>Group Members:</b></Card.Header>
          <Card.Body>
            <GroupMembersTable 
              
            />
          </Card.Body>
        </Card>
      </Container>

      <PageLoading />
    </>
  )
}

function EditGroupForm({ options, selectedGroup, groupId, saveButtonPressed }) {
  return (
    <Container >
      <h1 className="my-3">Group: {selectedGroup?.name}</h1>
      <Card className="shadow mt-4">
        <Card.Header style={{ fontSize: '25px' }}><b>Group Info</b></Card.Header>
        <Card.Body>
          {options.map((option) => {
            if (groupId || (!groupId && option.editable)) {
              if (option.type == 'input') {
                return (
                  <div className="mx-3">
                    <Input
                      val={option.key}
                      label={option.label}
                      disable={!option.editable}
                      data={selectedGroup}
                      setter={option.setter}
                      fieldInput={option.value}
                    />
                  </div>
                )
              } else if (option.type == 'date' && !option.editable) {
                return (
                  <div className="mx-3">
                    <Input
                      val={option.key}
                      label={option.label}
                      disable={option.label}
                      data={selectedGroup}
                      dateFormatter={formatToDateWithTime}
                    />
                  </div>
                )
              }
            }
          })}
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <Button className="mx-3 shadow" onClick={() => saveButtonPressed()}>Save</Button>
          </div>

        </Card.Body>
      </Card>
    </Container>
  )
}

function CreateGroupForm() {

}

export default GroupForm