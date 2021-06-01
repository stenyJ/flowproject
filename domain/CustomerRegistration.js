import React from 'react'
import {View, Text} from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'

export default function CustomerRegistration () {

    const defaultScrollViewProps = {
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: {
          flex: 1,
          backgroundColor:'#e6e6e6',
          justifyContent:'center'
        }
      };
    const progressStepsStyle = {
        activeStepIconBorderColor: '#2570e9',
        activeLabelColor: '#000',
        activeStepNumColor: 'white',
        activeStepIconColor: '#2570e9',
        completedStepIconColor: '#a9a9a9',
        completedProgressBarColor: '#a9a9a9',
        completedCheckColor: '#a9a9a9'
      };

    const buttonTextStyle = {
        color: '#686868',
        fontWeight: 'bold',
        
       };

    const onSubmitSteps = () => {
        console.log('called on submit step.');
      };
      const nxtbtnstyle = {
        backgroundColor:'#2296f3',
        paddingHorizontal:30,
        position:'absolute',
        bottom:70,
        right:-60
      }

      const prevbtnstyle = {
        backgroundColor:'#2296f3',
        paddingHorizontal:30,
        position:'absolute',
        bottom:70,
        left:-60
      }

    return(
        <View style={{ flex: 1, marginTop: 50 }}>
        <ProgressSteps {...progressStepsStyle}>
          <ProgressStep
            label="First"
            scrollViewProps={defaultScrollViewProps}
            nextBtnStyle={nxtbtnstyle}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 1!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Second"
            scrollViewProps={defaultScrollViewProps}
            nextBtnStyle={nxtbtnstyle}
            previousBtnStyle={prevbtnstyle}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 2!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Third"
            scrollViewProps={defaultScrollViewProps}
            nextBtnStyle={nxtbtnstyle}
            previousBtnStyle={prevbtnstyle}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Fourth"
            scrollViewProps={defaultScrollViewProps}
            nextBtnStyle={nxtbtnstyle}
            previousBtnStyle={prevbtnstyle}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 4!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Fifth"
            scrollViewProps={defaultScrollViewProps}
            onSubmit={onSubmitSteps}
            nextBtnStyle={nxtbtnstyle}
            previousBtnStyle={prevbtnstyle}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 5!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    )
}

 