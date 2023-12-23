"use client"
import { Fragment, useState } from 'react'
import TimelineEvent from '@/components/timelineEvent'

type EventProps = {
  text: string,
  side: "left" | "right"
};

type EventSectionProps = {
  events: EventProps[],
};

const EventSection = ({ events }: EventSectionProps) => {
  const [selectedEvent, setSelectedEvent] = useState(1);

  return (
    <div className="flex flex-col lg:gap-y-0 gap-y-16 items-center lg:py-24 pt-12 pb-12">
      {events.map((event, index) => (
	<Fragment key={`event-${index}`}>
	  {index > 0 && <div className="lg:block hidden w-2 h-24 bg-gray-400" />}
	  <TimelineEvent
	    index={index + 1}
	    text={event.text}
	    side={event.side}
	    selected={selectedEvent === index + 1}
	    onInView={() => setSelectedEvent(index + 1)}
	  />
	</Fragment>
      ))}
    </div>
  )
}

export default EventSection;
