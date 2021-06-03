import React from 'react';

import bridge from '@vkontakte/vk-bridge'
import { AppRoot, ConfigProvider, View } from '@vkontakte/vkui';

import MainPanel from './panels/main';
import GroupPredictorPanel from './panels/group-predictor';
import ThirdPlacesPredictorPanel from './panels/third-places-predictor';
import PlayOff4Panel from './panels/play-off-4';
import PlayOff2Panel from './panels/play-off-2';
import PlayOff1Panel from './panels/play-off-1';
import PlayOff8Panel from './panels/play-off-8';
import EndTournamentPanel from './panels/end-tournament-prediction';
import GamesPanel from './panels/games';
import GamePredictionPanel from './panels/game-prediction';

import { END_TOURNAMENT_PREDICTION_PANEL, GAMES_PANEL, GAME_PREDICTION_PANEL, GROUP_PREDICTOR_PANEL, MAIN_PANEL, PLAY_OFF_PANEL_1, PLAY_OFF_PANEL_2, PLAY_OFF_PANEL_4, PLAY_OFF_PANEL_8, THIRD_PLACES_PREDICTOR_PANEL } from './constants/panels';
import { useSelector } from 'react-redux';
import { RootState } from './store/rootReducer';


const App = () => {
  const currentPanel = useSelector((s: RootState) => s.navigation.currentPanel)

  React.useEffect(() => {
    document.body.setAttribute('scheme', 'space_gray')

    const init = async () => {
      const userData = await bridge.send('VKWebAppGetUserInfo')
      console.log('USER:', userData, userData.id)

      if(userData.id !== 612381684) throw Error('Oops...')
    }

    init()
  },[])

  return (
    <ConfigProvider isWebView={true}>
      <AppRoot>
        <View activePanel={currentPanel}>
          <MainPanel id={MAIN_PANEL} />
          
          <GroupPredictorPanel id={GROUP_PREDICTOR_PANEL} />
          <ThirdPlacesPredictorPanel id={THIRD_PLACES_PREDICTOR_PANEL} />
          <PlayOff8Panel id={PLAY_OFF_PANEL_8} />
          <PlayOff4Panel id={PLAY_OFF_PANEL_4} />
          <PlayOff2Panel id={PLAY_OFF_PANEL_2} />
          <PlayOff1Panel id={PLAY_OFF_PANEL_1} />
          <EndTournamentPanel id={END_TOURNAMENT_PREDICTION_PANEL} />
          
          <GamesPanel id={GAMES_PANEL} />
          <GamePredictionPanel id={GAME_PREDICTION_PANEL} />

        </View>
      </AppRoot>
    </ConfigProvider>
  );
}

export default App;
