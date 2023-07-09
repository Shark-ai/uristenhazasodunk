import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faChurch } from "@fortawesome/free-solid-svg-icons";
import { faBuildingCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import "../assets/style/Timeline.css";

export default function CustomizedTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent
          className="timeline-text"
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="#143364"
        >
          15:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              background: "linear-gradient(90deg, #143364 0%, #4b648c 100%)",
            }}
          >
            <FontAwesomeIcon
              icon={faBuildingCircleCheck}
              style={{ color: "#c2a44f" }}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="timeline-text" variant="h6" component="span">
            Érkezés a helyszínre
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className="timeline-text"
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="#143364"
        >
          16:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              background: "linear-gradient(90deg, #143364 0%, #4b648c 100%)",
            }}
          >
            <FontAwesomeIcon icon={faUsers} style={{ color: "#c2a44f" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="timeline-text" variant="h6" component="span">
            Fogadás kezdete
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className="timeline-text"
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="#143364"
        >
          16:30
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              background: "linear-gradient(90deg, #143364 0%, #4b648c 100%)",
            }}
          >
            <FontAwesomeIcon icon={faChurch} style={{ color: "#c2a44f" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="timeline-text" variant="h6" component="span">
            Ceremónia kezdete
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className="timeline-text"
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="#143364"
        >
          17:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              background: "linear-gradient(90deg, #143364 0%, #4b648c 100%)",
            }}
          >
            <FontAwesomeIcon icon={faCamera} style={{ color: "#c2a44f" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="timeline-text" variant="h6" component="span">
            Fotózás indul
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className="timeline-text"
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="#143364"
        >
          19:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              background: "linear-gradient(90deg, #143364 0%, #4b648c 100%)",
            }}
          >
            <FontAwesomeIcon icon={faUtensils} style={{ color: "#c2a44f" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="timeline-text" variant="h6" component="span">
            Vacsora elstartol
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className="timeline-text"
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="#143364"
        >
          22:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              background: "linear-gradient(90deg, #143364 0%, #4b648c 100%)",
            }}
          >
            <FontAwesomeIcon
              icon={faCakeCandles}
              style={{ color: "#c2a44f" }}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="timeline-text" variant="h6" component="span">
            Torta felvágása
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className="timeline-text"
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="#143364"
        >
          03:00-05:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              background: "linear-gradient(90deg, #143364 0%, #4b648c 100%)",
            }}
          >
            <FontAwesomeIcon icon={faPlay} style={{ color: "#c2a44f" }} />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="timeline-text" variant="h6" component="span">
            Buli
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
