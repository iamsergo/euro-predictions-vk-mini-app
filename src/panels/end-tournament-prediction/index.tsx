import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Button, Div, Panel, PanelHeader, PanelHeaderButton, Separator } from '@vkontakte/vkui'
import { Icon28HomeOutline } from '@vkontakte/icons';

import Winner from '../../components/Winner';

import { goTo } from '../../store/slices/navigation'
import { PanelName } from '../../types/PanelName'
import { RootState } from '../../store/rootReducer'
import { MAIN_PANEL, PLAY_OFF_PANEL_1 } from '../../constants/panels'

interface EndTournamentPanelProps
{
  id: PanelName
}

const EndTournamentPanel: React.FC<EndTournamentPanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  const pairs8 = useSelector((s: RootState) => s.playOff.pairs8)
  const pairs4 = useSelector((s: RootState) => s.playOff.pairs4)
  const pairs2 = useSelector((s: RootState) => s.playOff.pairs2)
  const pairs1 = useSelector((s: RootState) => s.playOff.pairs1)

  const winner = pairs1[0].teams.find(team => team.checked)!

  const goBack = () => {
    dispatch(goTo(PLAY_OFF_PANEL_1))
  }

  const goToMain = () => {
    dispatch(goTo(MAIN_PANEL))
  }


  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderButton onClick={goToMain}><Icon28HomeOutline/></PanelHeaderButton>}
      >Итоги</PanelHeader>
      
      <Winner team={winner} />

      <Div style={{marginTop:24}}>
        <Button
          style={{width:'100%', color: '#863732'}}
          size="m"
          mode="tertiary"
          onClick={goBack}
        >Поменять прогноз</Button>
      </Div>

      <Separator />
    </Panel>
  )
}

export default EndTournamentPanel