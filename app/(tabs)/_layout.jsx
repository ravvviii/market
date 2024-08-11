import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';

import { Tabs } from 'expo-router';
import React from 'react';

const Tablayout = () => {
  

  return (
      <Tabs>
          <Tabs.Screen 
          name='index'          
          options={{
            headerShown:false,
            tabBarIcon:({color})=> <Feather size={28} name='home' color={color}/>,
            title:'Home'

          }}


          />
          <Tabs.Screen 
          name='Sell'
          options={{
            headerShown:false,
            tabBarIcon:({color})=> <MaterialIcons size={28} name='sell' color={color}/>
            

          }}

          />
          <Tabs.Screen 
          name='Profile'
          options={{
            headerShown:false,
            tabBarIcon:({color})=> <AntDesign size={28} name='profile' color={color}/>
          }}

          />


    </Tabs>
  )
}

export default Tablayout