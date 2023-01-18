// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Бібліотека для відображення повідомлень користувачеві, замість window.alert()
import Notiflix from 'notiflix';

// Знаходимо елементи на сторінці
const element = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('button[data-start]');

// Змінна для інтервалу
let intervalId = null;

startBtnEl.setAttribute('disabled', 'true');
startBtnEl.addEventListener('click', () => {
    start();
    startBtnEl.disabled = true;
});

// Необов'язковий об'єкт параметрів для функції flatpickr(selector, options) 
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < Date.now()) {
            Notiflix.Notify.failure('Please, choose a date in the future');
            // alert('Please, choose a date in the future');
        } else {
            startBtnEl.removeAttribute('disabled');
            // console.log(selectedDates[0]);
        return selectedDates[0];
      }
    },
};

// Календар бібліотеки flatpickr (дозволяє користувачеві кросбраузерно вибрати кінцеву дату і час в одному елементі інтерфейсу) 
flatpickr(element, options);

// Запуск таймера (при цьому рахуємо різницю в мілісекундах між заданою і поточною датою, конвертуємо, записуємо в інтерфейс)
const start = () => {
    intervalId = setInterval(() => {
        const currentdate = Date.now();
        const deadlineDate = element.value;
        const targetDate = Date.parse(deadlineDate);
        // console.log(deadlineDate);
        // console.log(targetDate);
        const ms = targetDate - currentdate;
        // console.log(ms);

        // Щоб таймер зупинявся на 00:00:00:00, а не йшов в мінус
        if(ms <= 0) {
            stop();

            return;
        }

        const remainingTime = convertMs(ms);

        // Записуємо отримані значення в інтерфейс таймера
        document.querySelector('[data-days]').textContent = addLeadingZero(remainingTime.days);
        document.querySelector('[data-hours]').textContent = addLeadingZero(remainingTime.hours);
        document.querySelector('[data-minutes]').textContent = addLeadingZero(remainingTime.minutes);
        document.querySelector('[data-seconds]').textContent = addLeadingZero(remainingTime.seconds);

        // console.log(remainingTime);
    }, 1000);
};

// Функція зупинки таймера
const stop =() => {
    clearInterval(intervalId);
};

// Конвертація мс в дні/години/хв/сек
const convertMs = ms => {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
};

// Додаємо нулі попереду, якщо значення часу це одна цифра
const addLeadingZero = value => {
    return String(value).padStart(2, 0);
}