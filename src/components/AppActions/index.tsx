import React from 'react'

import bridge from '@vkontakte/vk-bridge'
import { Card, Cell, Div, Header } from '@vkontakte/vkui'
import { Icon28FavoriteCircleFillYellow, Icon28ReplyCircleFillGreen, Icon28UsersCircleFillBlue } from '@vkontakte/icons'

const AppActions = () => {

  const addToFavorite = () => {
    bridge.send('VKWebAppAddToFavorites')
      .then(res=>res)
      .catch(err=>err)
  }

  const joinToGroup = () => {
    bridge.send('VKWebAppJoinGroup',{group_id:198278031})
      .then(res=>res)
      .catch(err=>err)    
  }

  const share = () => {
    bridge.send('VKWebAppShare')
      .then(res=>res)
      .catch(err=>err)
  }

  return (<>
    <Header>Не теряйте приложение</Header>
    <Div style={{paddingTop:0}}>
      <Card>
        <Cell
          before={<Icon28FavoriteCircleFillYellow style={{marginRight:6}} width={24} height={24}/>}
          description={'Сохранится на вкладке "Сервисы"'}
          onClick={addToFavorite}
        >Добавить в избранное</Cell>
      </Card>
    </Div>
    <Div style={{paddingTop:0}}>
      <Card>
        <Cell
          before={<Icon28UsersCircleFillBlue style={{marginRight:6}} width={24} height={24}/>}
          description={'Приложение доступно в шапке группы'}
          onClick={joinToGroup}
        >Вступить в группу</Cell>
      </Card>
    </Div>
    <Div style={{paddingTop:0}}>
      <Card>
        <Cell
          before={<Icon28ReplyCircleFillGreen style={{marginRight:6}} width={24} height={24}/>}
          description={'Расскажите о приложении друзьям'}
          onClick={share}
        >Поделиться</Cell>
      </Card>
    </Div>
  </>)
}

export default AppActions