import styles from "./TimelineComponent.module.scss";
import cx from "classnames";
import { CareerData } from "../models/career-data";

interface Props {
  data: CareerData;
  position: "left" | "right";
}

const TimelineComponent = ({ data, position }: Props) => {
  const boxContainerStyles = cx(styles["box-container"], {
    [styles["box-container-right"]]: position === "right",
  });

  const emptyDivStyles = cx(styles["empty-div"], { [styles["empty-div-right"]]: "right" });

  return (
    <div className={styles["timeline-container"]}>
      <div className={boxContainerStyles}>
        <div className={styles["item-container"]}>
          <span className={styles["job-position-title"]}>{data?.jobPosition}</span> at{" "}
          <span className={styles["job-position-title"]}>{data?.company}</span>
        </div>
        <div className={styles["item-container"]}>{data?.date}</div>
        <div className={styles["item-container"]}>{data?.description}</div>
      </div>
      <div className={styles["line"]}></div>
      <div className={emptyDivStyles}></div>
    </div>
  );
};

export default TimelineComponent;
