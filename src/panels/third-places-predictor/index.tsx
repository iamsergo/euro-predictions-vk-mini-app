import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'

import ThirdPlacesPredictor from '../../components/ThirdPlacesPredictor'

import { setThirdPlaces } from '../../store/slices/third-places'
import { goTo } from '../../store/slices/navigation'
import { setPairs8 } from '../../store/slices/play-off'
import { PanelName } from '../../types/PanelName'
import { RootState } from '../../store/rootReducer'
import { Team } from '../../types/Team'
import { GROUP_PREDICTOR_PANEL, PLAY_OFF_PANEL_8 } from '../../constants/panels'
import { getPlayOffPairs8 } from '../../utils/getPlayofPairs'
import { Checkable } from '../../types/Checkable'

interface ThirdPlacesPredictorPanelProps
{
  id: PanelName
}

const ThirdPlacesPredictorPanel: React.FC<ThirdPlacesPredictorPanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  const thirdPlaces = useSelector((s: RootState) => s.thirdPlaces.thirdPlaces)
  const groups = useSelector((s: RootState) => s.groups.groups)

  React.useEffect(() => {
    const thirdPlaces = groups.reduce((thirdPlaces, { teams }): Checkable<Team>[] => {
      return [ ...thirdPlaces, teams[2] ]
    }, [] as Checkable<Team>[])

    dispatch(setThirdPlaces(thirdPlaces))
  }, [])

  const handleConfirm = (thirdPlaces: Checkable<Team>[]) => {
    dispatch(setThirdPlaces(thirdPlaces))
    dispatch(setPairs8(getPlayOffPairs8(groups, thirdPlaces)))
    dispatch(goTo(PLAY_OFF_PANEL_8))
  }

  const goToGroups = () => {
    dispatch(goTo(GROUP_PREDICTOR_PANEL))
  }

  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={goToGroups} />}
      >Третие места</PanelHeader>

      <ThirdPlacesPredictor
        teams={thirdPlaces}
        onEnd={handleConfirm}
      />
    </Panel>
  )
}

export default ThirdPlacesPredictorPanel