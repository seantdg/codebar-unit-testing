var expect = require('expect');

//convert a timestamp to a day e.g. 1456756698612 = Monday
var getEnglishDay = function(timestamp) {
	var date = new Date(Number(timestamp));
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

//Unit Tests here:
describe('Timestamps are converted to the correct day', function() {

	it('Today is converted correctly', function() {
		var now = new Date();
		var today = getEnglishDay(now);
		expect(today).toEqual('Sunday');
	});

	it('Yesterday is converted correctly', function() {
		var now = new Date();
		var yesterday = getEnglishDay((new Date()).setDate(now.getDate() - 1));
		expect(yesterday).toEqual('Saturday');
	});

});
