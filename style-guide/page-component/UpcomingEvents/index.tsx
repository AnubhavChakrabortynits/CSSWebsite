import React from "react";
import UpcomingEventsCard from "../../components/upcoming-events-card";
import Styles from "./UpcomingEvents.module.css";
import Drone from "../../components/lottie-player/drones";
import Upev from "../../components/lottie-player/upev";
import Shake from "react-reveal/Shake";

interface EventsProps {
  events: {
    _id: String;
    name: String;
    description: String;
    startTime: String;
    startDate: String;
    images: [];
    endDate: String;
    __v: 0;
  }[];
}

const UpcomingEvents = ({ events }: EventsProps) => {
  console.log(events);
  return (
    <div className={Styles.announcements}>
      <Drone />
      <h1 className={Styles.head}>
        <Upev />
        <Shake>Upcoming Events</Shake>
      </h1>
      <div className={Styles.body}>
        <div className={events.length == 0 ? Styles.empty : Styles.notempty}>
          Nothing to Show! Come back later
        </div>
        {events.length == 0
          ? null
          : events.map((event, index) => {
              return <UpcomingEventsCard props={event} key={index} />;
            })}
      </div>
    </div>
  );
};

export default UpcomingEvents;