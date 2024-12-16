//your JS code here. If required.
function daysOfaYear(year) {
	if(year%4!=0 || year==1900){
		return 365;
	}
	return 366;
	
}

let year=prompt("Enter a valid year ")
daysOfaYear(year)