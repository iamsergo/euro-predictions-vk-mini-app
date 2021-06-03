import React from 'react'

import { useDispatch } from 'react-redux';
import { Card, Cell, Div, Header, Panel } from '@vkontakte/vkui'
import { Icon24BrowserForward,  Icon24CupOutline,  Icon28GameOutline,} from '@vkontakte/icons';

import AppActions from '../../components/AppActions';

import { PanelName } from '../../types/PanelName'
import { goTo } from '../../store/slices/navigation';
import { GROUP_PREDICTOR_PANEL } from '../../constants/panels';

interface MainPanelProps
{
  id: PanelName
}

const MainPanel: React.FC<MainPanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()

  const goToTournamentPrediction = () => {
    dispatch(goTo(GROUP_PREDICTOR_PANEL))
  }

  return (
    <Panel id={id}>
      <Header>Прогнозы</Header>
      <Div style={{paddingTop:0}}>
        <Card>
          <Cell
            after={<Icon24BrowserForward/>}
            before={<Icon24CupOutline style={{marginRight:6, color:'#009688', }}/>}
            description={<div style={{fontSize:12}}>Выберите места команд в группах и <br /> проложите сетку в плей-офф</div>}
            onClick={goToTournamentPrediction}
          >Прогноз на турнир</Cell>
        </Card>
      </Div>
      <Div style={{paddingTop:0}}>
        <Card>
          <Cell
            after={<Icon24BrowserForward/>}
            before={<Icon28GameOutline style={{marginRight:6, color:'#9e2d95', }} width={24} height={24}/>}
            description={'Сделайте прогноз на любой матч'}
            onClick={goToTournamentPrediction}
          >Прогноз на матч</Cell>
        </Card>
      </Div>

      <AppActions />
    </Panel>
  )
}

export default MainPanel