import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons } from "./../../../constants"

const months = ['JAN','FEB','MAR','APR','MAY','JUNE','JUL','AUG','SEP','OCT','NOV','DEC']
const days = ['MON','TUE','WED','THUR','FRI']
const MonthController = ({type})=>{
    // contain states
    let item ; let max; let min;
    // if month scroller will be
    if(type=='months'){
        item = months; max=11; min=1;
    }
    // if days scroller will
    if(type=='days'){
        item = days; max=4; min=1;
    }
    // holder the day or month array according to props
    let [current,setCurrent] = useState(0) 
    return(
        
        <View style={{height: '8%'}}>
            <View style={{
            height:'100%',
            justifyContent:'space-between',
            // backgroundColor:COLORS.blue,
            alignItems:'center',
            flexDirection:'row',
            paddingLeft: '3%',
            paddingRight: '3%'
        }}>
        <TouchableOpacity 
           onPress={()=>{
                setCurrent(current-1)
                if(current< min){
                    setCurrent(max);
                }
            }}
        > 
            <Image
                source={icons.back_arrow}
                resizeMode = "contain"
                style={{
                    width:20,
                    height:20,
                    tintColor:COLORS.gray
                }}
            ></Image>
         
        </TouchableOpacity>
                {/* selected Month */}
        <Text style={{ ...FONTS.body2,fontWeight:'bold',color:COLORS.darkBlue}}>{item[current]}</Text>
                            
        <TouchableOpacity
            onPress={()=>{
                setCurrent(current+1)
                if(current > max-1){
                    setCurrent(0);
                }
            }}
        > 
            <Image
                source={icons.front_arrow}
                resizeMode = "contain"
                style={{
                    width:20,
                    height:20,
                    tintColor:COLORS.gray
                }}
            ></Image>
           
        </TouchableOpacity>
        </View>
               
        </View>
    )     
}

export default MonthController;