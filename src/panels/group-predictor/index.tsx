import React from 'react'

import { Button, Div, FixedLayout, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'
import { useDispatch, useSelector } from 'react-redux'

import GroupPredictor from '../../components/GroupPredictor'
import Description from '../../components/Description'

import { setGroups as setGroups } from '../../store/slices/groups'

import { EuroGroup } from '../../types/EuroGroup'
import { RootState } from '../../store/rootReducer'
import { PanelName } from '../../types/PanelName'
import { goTo } from '../../store/slices/navigation'
import { MAIN_PANEL, THIRD_PLACES_PREDICTOR_PANEL } from '../../constants/panels'
import { Team } from '../../types/Team'
import { setThirdPlaces } from '../../store/slices/third-places'

interface GroupPredictorPanelProps
{
  id: PanelName
}

const GroupPredictorPanel: React.FC<GroupPredictorPanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  
  const groups = useSelector((s: RootState) => s.groups.groups)

  const handleConfirmGroup = (group: EuroGroup) => {
    const newGroups = groups.map(g => {
      if(g.id === group.id)
      {
        return group
      }

      return g
    })

    dispatch(setGroups(newGroups))
  }

  const handleConfirm = () => {
    dispatch(goTo(THIRD_PLACES_PREDICTOR_PANEL))
    const thirdPlaces = groups.reduce((thirdPlaces, { teams }): Team[] => {
      return [ ...thirdPlaces, teams[2] ]
    }, [] as Team[])

    dispatch(setThirdPlaces(thirdPlaces))
  }

  const goToMain = () => {
    dispatch(goTo(MAIN_PANEL))
  }

  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={goToMain} />}
      >Группы</PanelHeader>

      <div style={{marginBottom: 85}}>
        {groups.map(group => {
          return <GroupPredictor
          key={group.id}
          group={group}
          onChange={handleConfirmGroup}
          />
        })}
      </div>

      <FixedLayout  
        style={{boxShadow:'0px -2px 8px black'}}
        filled
        vertical="bottom"
      >
        <Div>
          <Button
            style={{width:'100%'}}
            size="m"
            onClick={handleConfirm}
          >Далее</Button>
        </Div>
        <Description>
          Укажите расположение команд в каждой группе
        </Description>
      </FixedLayout>
    </Panel>
  )
}

export default GroupPredictorPanel