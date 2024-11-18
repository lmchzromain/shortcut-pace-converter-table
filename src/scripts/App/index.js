import clsx from "clsx";

import { Cell } from "@/scripts/App/Cell";
import { HeaderCell } from "@/scripts/App/HeaderCell";
import { calculateDistanceTime } from "@/scripts/utilities/calculateDistanceTime";
import { calculateSpeed } from "@/scripts/utilities/calculateSpeed";
import { generatePaces } from "@/scripts/utilities/generatePaces";

export const App = () => {
  return (
    <div className="max-h-screen overflow-auto">
      <table border="0" className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <HeaderCell className="left-0 z-30">Pace (min/km)</HeaderCell>
            <HeaderCell>Speed</HeaderCell>
            <HeaderCell>5 kms</HeaderCell>
            <HeaderCell>10 kms</HeaderCell>
            <HeaderCell>Half Marathon </HeaderCell>
            <HeaderCell>Marathon</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {generatePaces(2.5, 9.5, 5).map(({ minutes, seconds }) => {
            const isRoundedPace = seconds == 0;
            return (
              <tr key={`${minutes}:${seconds}`}>
                <Cell
                  className={clsx(
                    "sticky left-0",
                    "bg-slate-50",
                    `${isRoundedPace ? "font-bold" : "font-light"}`,
                    "after:absolute after:top-0 after:bottom-0  after:h-full",
                    "after:right-[-10px] after:w-[10px]",
                    "after:bg-gradient-to-r from-slate-400 to-transparent"
                  )}
                >
                  {minutes}:{seconds < 10 ? "0" : ""}
                  {seconds}
                </Cell>
                <Cell className={isRoundedPace ? "font-bold" : "font-light"}>
                  {calculateSpeed(minutes, seconds)} km/h
                </Cell>
                <Cell className={isRoundedPace ? "font-bold" : "font-light"}>
                  {calculateDistanceTime(minutes, seconds, 5)}
                </Cell>
                <Cell className={isRoundedPace ? "font-bold" : "font-light"}>
                  {calculateDistanceTime(minutes, seconds, 10)}
                </Cell>
                <Cell className={isRoundedPace ? "font-bold" : "font-light"}>
                  {calculateDistanceTime(minutes, seconds, 21.1)}
                </Cell>
                <Cell className={isRoundedPace ? "font-bold" : "font-light"}>
                  {calculateDistanceTime(minutes, seconds, 42.195)}
                </Cell>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
