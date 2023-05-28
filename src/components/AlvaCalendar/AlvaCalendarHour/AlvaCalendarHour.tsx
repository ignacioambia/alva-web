import './AlvaCalendarHour.scss';

export interface AlvaCalendarHour {
 hour: number
}

export function AlvaCalendarHour({hour}: AlvaCalendarHour){
 return <div className="alva-calendar-hour-wrapper">{hour}:00</div>
}