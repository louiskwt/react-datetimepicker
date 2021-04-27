import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker
} from '@material-ui/pickers';

function App() {
	const [selectedDate, setSelectedDate] = useState(
		new Date('2021-04-27T12:00:00')
	);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<div className='App'>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid container justify='space-around'>
					<KeyboardDatePicker
						disableToolbar
						variant='inline'
						format='MM/dd/yyy'
						margin='normal'
						id='date-picker'
						label='Date Picker'
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change date'
						}}
					/>
				</Grid>
			</MuiPickersUtilsProvider>
		</div>
	);
}

export default App;
