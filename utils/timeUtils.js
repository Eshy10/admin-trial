// timeUtils.js

import { isToday, isYesterday, subDays, isWithinInterval } from "date-fns";

export function getTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;

    return (`${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`)
}

export function getDate(date) {
    const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function formatMonthDay(date) {
    const options = { month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function isWithinLast6Days(dateToCheck) {
    const today = new Date();
    const sixDaysAgo = subDays(today, 6);

    return isWithinInterval(dateToCheck, { start: sixDaysAgo, end: today });
}

export function formatDayOfWeek(date) {
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const pad = (number) => (number < 10 ? `0${number} ` : `${number} `);

    return `${hours > 0 ? pad(hours) + ':' : ''}${hours > 0 ? pad(minutes) : minutes}:${pad(remainingSeconds)}`;
}

export function formatLastMessageTime(LastMessageDateTime) {
    if (isToday(LastMessageDateTime)) {
        return getTime(LastMessageDateTime); // is Today
    } else if (isYesterday(LastMessageDateTime)) {
        return 'Yesterday'; // was yesterday
    } else if (isWithinLast6Days(LastMessageDateTime)) {
        return formatDayOfWeek(LastMessageDateTime); // was this week
    } else {
        return getDate(LastMessageDateTime);
    }
}

export function formatChatDate(messageDateTime) {
    if (isToday(messageDateTime)) {
        return `Today, ${formatMonthDay(messageDateTime)}`; // is Today
    } else if (isYesterday(messageDateTime)) {
        return `Yesterday, ${formatMonthDay(messageDateTime)}`; // was yesterday
    } else if (isWithinLast6Days(messageDateTime)) {
        return `${formatDayOfWeek(messageDateTime)}, ${formatMonthDay(messageDateTime)}`; // was this week
    } else {
        return getDate(messageDateTime);
    }
}

export function getTimeLeft(onboardingDate, contractLength) {
    const currentDate = new Date();

    const endDate = new Date(onboardingDate);
    endDate.setMonth(endDate.getMonth() + contractLength);

    const timeLeft = endDate - currentDate;

    if (timeLeft <= 0) {
        return null; // Contract has expired
    }

    const monthsLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
    const daysLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (monthsLeft > 1) {
        return `${monthsLeft} months`;
    } else if (daysLeft > 0) {
        return `${daysLeft} days`;
    } else if (hoursLeft > 0) {
        return `${hoursLeft} hours`;
    } else if (minutesLeft > 0) {
        return `${minutesLeft} minutes`;
    } else {
        return `${secondsLeft} seconds`;
    }
}

export function getFormattedDate(date) {
    const dateObject = new Date(date);

    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    const year = dateObject.getFullYear().toString();

    const formattedDate = `${month}/${day}/${year}`;

    return formattedDate
}