import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

export default function MUIPicker2() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div style={{fontSize: '12px', width: '100%', marginBottom: 0}}>
        <KeyboardDatePicker
          style={{backgroundColor: "white", width: '70%'}}
          disableToolbar
          disableFuture
          inputVariant="outlined"
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date of birth"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
        
          }}
        />
        </div>
    </MuiPickersUtilsProvider>
  );
}
