import {
  AlvaCalendarMonth,
  MoveTo,
} from "./AlvaCalendarMonth/AlvaCalendarMonth";
import "./AlvaCalendar.scss";
import { useState } from "react";
import { AlvaCalendarHour } from "./AlvaCalendarHour/AlvaCalendarHour";



export interface AlvaCalendarProps {
  onChange?: (day: Date) => any
}
/**
 *
 * @returns A calendar of the current month plus of of the las month
 */
export function AlvaCalendar({onChange}: AlvaCalendarProps) {
  const [indexSlide, setIndexSlide] = useState<number>(0);
  // const today = new Date('06/01/2023');
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const months: Date[] = [
    new Date(year, month, 1),
    new Date(year, month + 1, 1),
  ];

  const availableHours = {
    sunday: [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
    monday: [19,20,21,22],
    tuesday: [19,20,21,22],
    wednesday: [19,20,21,22],
    thursday: [19,20,21,22],
    friday: [19,20,21,22],
    saturday: [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
  }

  const moveSlider = (direction: MoveTo) => {
    setIndexSlide((current) => current + direction);
  };

  const handleDateChange = (day: Date) => {
    onChange && onChange(day);
  }

  return (
    <div className="alva-calendar-wrapper">
      <div className="inputs-section">
      <div className="months">
        <div
          className="months-container"
          style={{
            transform: `translateX(calc(-${indexSlide * 100}% - ${
              12 * indexSlide
            }px))`,
          }}
        >
          {months.map((month, i) => (
            <div
              key={i}
              className={"month " + (indexSlide == i ? "current" : "")}
            >
              <AlvaCalendarMonth
                disabledBtns={[i == 0 ? MoveTo.last : MoveTo.next]}
                month={month}
                onMove={moveSlider}
                onChange={handleDateChange}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="hours-wrapper">
        {availableHours.monday.map((e,i) => <AlvaCalendarHour key={i} hour={e} /> )}
      </div>
      </div>
    </div>
  );
}
