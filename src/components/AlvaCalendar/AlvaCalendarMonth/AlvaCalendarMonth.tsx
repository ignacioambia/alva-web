import { useEffect, useState } from "react";
import {
  AlvaCalendarDay,
  AlvaCalendarDayProps,
} from "../AlvaCalendarDay/AlvaCalendarDay";
import "./AlvaCalendarMonth.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AlvaBtn } from "../../AlvaBtn/AlvaBtn";

const daysOfWeek = ["Dom", "Lun", "Mar", "Mier", "Juev", "Vie", "Sab"];

export interface AlvaCalendarMonthProps {
  month: Date;
  onMove: (months: 1 | -1) => void;
  disabledBtns?: MoveTo[];
  onChange?: (day: Date) => any
}

export enum MoveTo {
  last = -1,
  next = 1,
}

export function AlvaCalendarMonth({
  month,
  onMove,
  onChange,
  disabledBtns = [],
}: AlvaCalendarMonthProps) {

  const monthName = new Intl.DateTimeFormat("es", { month: "long" }).format(
    month
  );

  const [daysOfMonth, setDaysOfMonth] = useState<AlvaCalendarDayProps[]>([]);
  const [{ month: currentMonth, year }] = useState<{
    month: number;
    year: number;
  }>({ month: month.getMonth(), year: month.getFullYear() });

  useEffect(() => {
    setDaysOfMonth(() => {
      //getting first day in month
      const daysInMonth = new Date(year, currentMonth + 1, 0).getDate();

      const daysOfMonth: AlvaCalendarDayProps[] = Array.from(
        new Array(daysInMonth)
      ).map((_, i) => ({ day: new Date(year, currentMonth, i +1 ) }));

      while(true){
        const [{day}] = daysOfMonth;
        if(daysOfWeek[day.getDay()] == 'Dom'){
          break;
        }
        daysOfMonth.unshift({ day: new Date(new Date(day).setDate(day.getDate() -1 )), disabled: true });
      }

      while(true){
        const {day} = daysOfMonth[daysOfMonth.length -1];
        if(daysOfWeek[day.getDay()] == 'Sab'){
          break;
        }
        daysOfMonth.push({ day: new Date(new Date(day).setDate(day.getDate() +1 )), disabled: true });
      }
      
      // daysOfMonth.unshift({ day: new Date(year, currentMonth, 0 ), disabled: true });

      const today = new Date()
      if(currentMonth == today.getMonth()){
        const dayToChange  = daysOfMonth.find(e=>e.day.getDate() == today.getDate());
        if(dayToChange){
          dayToChange.isToday = true;
        }
      }


      return daysOfMonth;
    });
  }, [month]);

  const chooseDay = (day: Date,index: number) => {
    const days = daysOfMonth.map((e: AlvaCalendarDayProps, i: number) => {
      e.selected = i == index;
      return e;
    });

    setDaysOfMonth(days);
    onChange && onChange(day)
  };

  return (
    <div className="alva-calendar-month-wrapper">
      <div className="title">
        <AlvaBtn
          variant="icon"
          onClick={() => onMove(MoveTo.last)}
          disabled={disabledBtns.includes(MoveTo.last)}
        >
          <Icon icon="material-symbols:arrow-back-ios-new-rounded" />
        </AlvaBtn>
        <span>
          {monthName} {month.getFullYear()}
        </span>
        <AlvaBtn
          variant="icon"
          onClick={() => onMove(MoveTo.next)}
          disabled={disabledBtns.includes(MoveTo.next)}
        >
          <Icon icon="material-symbols:arrow-forward-ios-rounded" />
        </AlvaBtn>
      </div>
      <div className="alva-calendar-month">
        {daysOfWeek.map((day, i) => (
          <div key={i} className="day">
            {day}
          </div>
        ))}
        {daysOfMonth.map((day: AlvaCalendarDayProps, i: number) => (
          <AlvaCalendarDay key={i} {...day} onClick={() => chooseDay(day.day, i)} />
        ))}
      </div>
    </div>
  );
}
