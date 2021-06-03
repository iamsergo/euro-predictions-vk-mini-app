import React from 'react'

import { List, Cell, Div, Card, Button, Header, } from '@vkontakte/vkui'

import Description from '../Description'
import Flag from '../Flag'

import { Team } from '../../types/Team'
import { Checkable } from '../../types/Checkable'

const MAX_TEAM_AMOUNT = 4

interface ThirdPlacesPredictorProps
{
  teams: Checkable<Team>[]
  onEnd: (teams: Checkable<Team>[]) => void
}

const ThirdPlacesPredictor: React.FC<ThirdPlacesPredictorProps> = ({
  teams: propsTeams,
  onEnd,
}) => {
  const [teams, setTeams] = React.useState(propsTeams)
  const [amountChecked, setAmountChecked] = React.useState(teams.filter(team => team.checked).length)

  const handleCheck: React.ChangeEventHandler<HTMLInputElement> = e => {
    const checkedName = e.target.name

    const newTeams = teams.map(team => {
      if(team.name === checkedName)
      {
        return { ...team, checked: !team.checked }
      }

      return team
    })

    setTeams(newTeams)
    setAmountChecked(newTeams.filter(team => team.checked).length)
  }

  const handleConfirm = () => {    
    onEnd(teams)
  }

  return (
    <Div>
      <Card>
        <Header>Третие места</Header>
        <List>
          {teams.map((team, i) => {
            return <Cell key={team.id}
              name={team.name}
              disabled={!team.checked && amountChecked >= MAX_TEAM_AMOUNT}
              selectable
              checked={team.checked}
              onChange={handleCheck}
              before={<Flag country={team.logo} />}
            >{team.name}</Cell>
          })}
        </List>
        <Div>
          <Button
            disabled={amountChecked < MAX_TEAM_AMOUNT}
            style={{width:'100%'}}
            size="m"
            onClick={handleConfirm}
          >Подтвердить</Button>
        </Div>
        <Description>
          Выберите 4 команды, занявшие третье место, которые пройдут дальше
        </Description>
      </Card>
    </Div>
  )
}

export default ThirdPlacesPredictor