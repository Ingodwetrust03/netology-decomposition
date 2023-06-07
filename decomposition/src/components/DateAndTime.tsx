/**
 * Отвечает за вывод даты, преобразует,получаемый на входе объект new Date в число, часы, минуты, месяц и день в строковом значении,
 *
 */

export default function DateAndTime ({today}) {
    let month = ''
    let day = ''
    switch (today.getMonth() + 1) {
        case 1:
            month = 'Январь';
            break;
        case 2:
            month = 'Февраль';
            break;
        case 3:
            month = 'Март';
            break;
        case 4:
            month = 'Апрель';
            break;
        case 5:
            month = 'Май';
            break;
        case 6:
            month = 'Июнь';
            break;
        case 7:
            month = 'Июль';
            break;
        case 8:
            month = 'Август';
            break;
        case 9:
            month = 'Сентябрь';
            break;
        case 10:
            month = 'Октябрь';
            break;
        case 11:
            month = 'Ноябрь';
            break;
        case 12:
            month = 'Декабрь';
            break;
    }

    switch (today.getDay()) {
        case 1:
            day = 'Понедельник';
            break;
        case 2:
            month = 'Вторник';
            break;
        case 3:
            month = 'Среда';
            break;
        case 4:
            month = 'Четверг';
            break;
        case 5:
            month = 'Пятница';
            break;
        case 6:
            month = 'Суббота';
            break;
        case 7:
            month = 'Воскресенье';
            break;
    }


    return (
        <div className="col-3 date">
            {today.getDate()} {month} {day} {today.getHours()}:{today.getMinutes()}
        </div>
    )
}