function getTimeGap(start, end = new Date()) {
    // Convert start and end times to Date objects
    const startDate = new Date(start);
    const endDate = new Date(end);

    // Calculate the difference in milliseconds
    const diffMs = Math.abs(endDate - startDate);

    // Calculate the number of years, months, days, hours, minutes, and seconds
    const years = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diffMs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diffMs % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
    const totalDays = Math.floor((diffMs / (1000 * 60 * 60 * 24)))
    const totalHours = Math.floor((diffMs / (1000 * 60 * 60)))
    const totalMinutes = Math.floor((diffMs / (1000 * 60)))
    const totalSeconds = Math.floor((diffMs / (1000)))

    console.log(startDate)
    console.log("Day:",totalDays)
    console.log(`${hours}:${minutes}:${seconds}`)
    console.log("Total Hours:",totalHours)
    console.log("Total Minutes:",totalMinutes)
    console.log("Total Seconds:",totalSeconds)
    
    return `${years} ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

getTimeGap("2023-03-04T15:57:40")