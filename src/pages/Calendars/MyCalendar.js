import React from 'react'
import { View, Text } from 'react-native'
import { Calendar, Arrow } from 'react-native-calendars'

const MyCalendar = () => {
  return (
    <View>
      <Text>Calendar</Text>
      <Calendar
        // Initially visible month. Default = Date()
        current='2012-03-01'
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate='2012-05-10'
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate='2012-05-30'
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => { console.log('selected day', day) }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => { console.log('selected day', day) }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat='yyyy MM'
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => { console.log('month changed', month) }}
        // Hide month navigation arrows. Default = false
        hideArrows
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => (<Arrow />)}
        // Do not show days of other months in month page. Default = false
        hideExtraDays
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames
        // Show week numbers to the left. Default = false
        showWeekNumbers
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft
        // Disable right arrow. Default = false
        disableArrowRight
      />
      <Text>outro tipo de calendário</Text>
      <Calendar
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          '2012-05-16': { selected: true, marked: true, selectedColor: 'blue' },
          '2012-05-17': { marked: true },
          '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
          '2012-05-19': { disabled: true, disableTouchEvent: true }
        }}
      />
    </View>
  )
}

export default MyCalendar
