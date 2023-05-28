import './AlvaCalendarDay.scss';

export interface AlvaCalendarDayProps {
 day: Date,
 disabled?: boolean,
 isToday? : boolean,
 selected?: boolean,
 onClick?: Function,
}

export function AlvaCalendarDay({day, disabled, isToday, onClick, selected}: AlvaCalendarDayProps){
 const classes: string = [
  "alva-calendar-day-wrapper",
  disabled ? "disabled": null,
  isToday ?  "is-today": null,
  selected ? 'selected': null
 ].filter(e=>e).join(' ')

 return <div onClick={() => onClick && onClick()} className={classes}>{day.getDate()}</div>
}