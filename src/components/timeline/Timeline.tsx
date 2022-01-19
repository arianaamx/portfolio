import { useState } from "react";
import styles from "./Timeline.module.scss";
import TimelineComponent from "./TimelineComponent";
import { CareerData } from "./models/career-data";
import useInterval from "src/hooks/useInterval";

const Timeline = () => {
  const careerData = require("./assets/career.json");

  const [data, setData] = useState<CareerData[]>([careerData[0]]);
  const [allDataShown, setAllDataShown] = useState(false);

  useInterval(
    () => {
      setData((data) => {
        const newData = [...data];
        if (newData.length < careerData.length) {
          newData.push(careerData[newData.length]);
        } else {
          setAllDataShown(true);
        }
        return newData;
      });
    },
    allDataShown ? null : 1000
  );

  return (
    <div className={styles["timeline-outter-container"]}>
      <div className={styles["timeline-container"]}>
        <div className={styles["timeline-title"]}>
          <h1>Career timeline</h1>
        </div>
        {data.map((position: CareerData, index: number) => {
          return (
            <TimelineComponent
              key={`${position?.description}-${index}`}
              data={position}
              position={index % 2 === 0 ? "left" : "right"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
