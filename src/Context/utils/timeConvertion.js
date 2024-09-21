export default function convertSecondsToDetails(seconds) {
    const date = new Date(seconds * 1000);  // Convert seconds to milliseconds

    const hours = date.getHours();          // Get hours
    const dayOfMonth = date.getDate();      // Get day of the month (1-31)
    const dayOfWeek = date.getDay();        // Get day of the week (0-6, where 0 is Sunday)
    const month = date.getMonth() + 1;      // Get month (0-11, where 0 is January, adding 1 to make it 1-12)

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return {
        hours: hours,
        date: dayOfMonth,
        day: daysOfWeek[dayOfWeek],  // Map numeric day to the actual name of the day
        month: month
    };
}