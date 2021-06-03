import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'

import PlayOffPredictor from '../../components/PlayOffPredictor'

import { goTo } from '../../store/slices/navigation'
import { setPairs1 } from '../../store/slices/play-off'

import { END_TOURNAMENT_PREDICTION_PANEL, PLAY_OFF_PANEL_2, } from '../../constants/panels'
import { RootState } from '../../store/rootReducer'
import { EuroPair } from '../../types/EuroPair'
import { PanelName } from '../../types/PanelName'

interface PlayOff1PanelProps
{
  id: PanelName
}

const PlayOff1Panel: React.FC<PlayOff1PanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  const pairs = useSelector((s: RootState) => s.playOff.pairs1)

  const goBack = () => {
    dispatch(goTo(PLAY_OFF_PANEL_2))
  }

  const handleConfirm = (checkedPairs: EuroPair[]) => {
    dispatch(setPairs1(checkedPairs))
    dispatch(goTo(END_TOURNAMENT_PREDICTION_PANEL))
  }

  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={goBack} />}
      >Финал</PanelHeader>

      <PlayOffPredictor
        pairs={pairs}
        onEnd={handleConfirm}
      />
    </Panel>
  )
}

export default PlayOff1Panel