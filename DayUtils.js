var expect = require('expect');

//Unit Tests here:
describe('Dates are converted to the correct day of the week in English', function() {

	it('Today is converted correctly', function() {
		var now = new Date();
		var today = getEnglishDay(now);		//call our function
		expect(today).toEqual('Tuesday');
	});

	it('Yesterday is converted correctly', function() {
		var now = new Date();

		var yesterdayDate = new Date();
		yesterdayDate.setDate(now.getDate() - 1);

		var yesterday = getEnglishDay(yesterdayDate);	//call our function
		expect(yesterday).toEqual('Monday');
	});

});

//convert a Date object to an English day
var getEnglishDay = function(date) {
	var day = date.getDay(); //0 is sunday, 1 is monday ...

	var displayDay = "";

	switch (day) {
		case 0:
			displayDay = "Sunday";
			break;
		case 1:
			displayDay = "Monday";
			break;
		case 2:
			displayDay = "Tuesday";
			break;
		case 3:
			displayDay = "Wednesday";
			break;
		case 4:
			displayDay = "Thursday";
			break;
		case 5:
			displayDay = "Friday";
			break;
		default:
			displayDay = "Saturday";
	}
	return displayDay;
}