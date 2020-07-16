/*
 * Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
 * Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.
 * Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX.
 * Количество дней может состоять из более чем двух цифр.
 *
 * Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
 * Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.
 */

function pad(value) {
  return String(value).padStart(2, '0');
}

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.timerRef = document.querySelector(selector);
    this.refs = {
      days: this.timerRef.querySelector('span[data-value="days"]'),
      hours: this.timerRef.querySelector('span[data-value="hours"]'),
      mins: this.timerRef.querySelector('span[data-value="mins"]'),
      secs: this.timerRef.querySelector('span[data-value="secs"]'),
    };
    setInterval(this.getTimeLeft, 1000);
  }

  getTimeLeft = () => {
    const now = Date.now();
    const time = this.targetDate - now;

    /*
     * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
     * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
     */

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.refs.days.textContent = days;

    /*
     * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
     * остатка % и делим его на количество миллисекунд в одном часе
     * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
     */
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.refs.hours.textContent = hours;

    /*
     * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
     * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
     */
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.refs.mins.textContent = mins;

    /*
     * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
     * миллисекунд в одной секунде (1000)
     */
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    this.refs.secs.textContent = secs;
  };
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 6, 2020'),
});
