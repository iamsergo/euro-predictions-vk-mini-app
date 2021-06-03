import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'

import PlayOffPredictor from '../../components/PlayOffPredictor'

import { goTo } from '../../store/slices/navigation'
import { setPairs4, setPairs8 } from '../../store/slices/play-off'

import { getPlayOffPairs4 } from '../../utils/getPlayofPairs'
import { PLAY_OFF_PANEL_4, THIRD_PLACES_PREDICTOR_PANEL } from '../../constants/panels'
import { RootState } from '../../store/rootReducer'
import { EuroPair } from '../../types/EuroPair'
import { PanelName } from '../../types/PanelName'

interface PlayOff8PanelProps
{
  id: PanelName
}

const PlayOff8Panel: React.FC<PlayOff8PanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  const pairs = useSelector((s: RootState) => s.playOff.pairs8)

  const goBack = () => {
    dispatch(goTo(THIRD_PLACES_PREDICTOR_PANEL))
  }

  const handleConfirm = (checkedPairs: EuroPair[]) => {
    dispatch(setPairs8(checkedPairs))
    dispatch(setPairs4(getPlayOffPairs4(checkedPairs)))
    dispatch(goTo(PLAY_OFF_PANEL_4))
  }

  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={goBack} />}
      >1/8 финала</PanelHeader>

      <PlayOffPredictor
        pairs={pairs}
        onEnd={handleConfirm}
      />
    </Panel>
  )
}

export default PlayOff8Panel