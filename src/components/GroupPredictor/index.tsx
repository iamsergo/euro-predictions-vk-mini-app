import React from 'react'

import { List, Cell, Div, Card, Header, } from '@vkontakte/vkui'

import Flag from '../Flag'

import { Team } from '../../types/Team'
import { EuroGroup } from '../../types/EuroGroup'
import { Checkable } from '../../types/Checkable'

interface GroupPredictorProps
{
  group: EuroGroup,
  onChange: (group: EuroGroup) => void
}

const GroupPredictor: React.FC<GroupPredictorProps> = ({
  group,
  onChange,
}) => {
  const [teams, setTeams] = React.useState<Checkable<Team>[]>(group.teams)

  const handleChange = ({ from, to }: {from: number, to: number}) => {
    const newTeams = [...teams]

    newTeams.splice(from, 1)
    newTeams.splice(to, 0, teams[from])

    setTeams(newTeams)
    onChange({ ...group, teams: newTeams })
  }

  return (
    <Div>
      <Card>
        <Header>{group.name}</Header>
        <List>
          {teams.map((team, i) => {
            let color = 'green'
            if(i === 2) color = 'orange'
            if(i === 3) color = 'red'

            return <Cell key={team.id}
              draggable
              onDragFinish={handleChange}
              before={
                <div style={{display:'flex',alignItems:'center', marginRight: 6,}}>
                  <div style={{marginRight: 6, color}}>{i+1}</div>
                  <Flag country={team.logo} />
                </div>
              }
            >{team.name}</Cell>
          })}
        </List>
      </Card>
    </Div>
  )
}

export default GroupPredictor