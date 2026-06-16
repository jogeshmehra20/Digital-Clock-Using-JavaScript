function updateClock() {
    // 1. Create a new JavaScript Date object to fetch current system time
    const now = new Date();
    
    // 2. Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "AM";

    // 3. Convert from 24-hour format to 12-hour format and manage AM/PM
    if (hours >= 12) {
        ampm = "PM";
    }
    
    if (hours > 12) {
        hours = hours - 12;
    } else if (hours === 0) {
        hours = 12; // Midnight condition
    }

    // 4. Pad single-digit numbers with a leading zero for a clean look (e.g., "05" instead of "5")
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // 5. DOM Manipulation: Update the HTML elements smoothly
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("ampm").innerText = ampm;
}

/* 
   6. Use setInterval() to handle automatic updates every second (1000 milliseconds) 
   without requiring a page refresh.
*/
setInterval(updateClock, 1000);

// Run the function immediately once on page load so it doesn't show 00:00:00 for the first second
updateClock();