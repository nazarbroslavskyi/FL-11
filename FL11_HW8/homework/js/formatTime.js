function formatTime(minutes) {
	let endDays = "s", endHours = "s", endMinutes = "s";
	let days = Math.floor(minutes / 1440);
	let hours = Math.floor((minutes % 1440) / 60);
	let minute = Math.floor((minutes % 1440) % 60);
	
	if(days === 1) { 
		endDays = "";
	}
	if(hours === 1) { 
		endHours = "";
	}
	if(minute === 1) {
		endMinutes = "";
	}

	return days + " day" + endDays + " " + 
			hours + " hour" + endHours + " " + 
			minute + " minute" + endMinutes;
}

formatTime(120);