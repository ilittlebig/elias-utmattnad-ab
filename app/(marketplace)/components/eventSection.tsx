"use client"
import { Fragment, useState } from 'react'
import TimelineEvent from '@/(marketplace)/components/timelineEvent'

type EventSectionProps = {
  events: string[]
};

const EventSection = ({ events }: EventSectionProps) => {
  const [selectedEvent, setSelectedEvent] = useState(1);

  return (
    <div className="flex flex-col lg:gap-y-0 gap-y-16 items-center py-16">
      {events.map((event, index) => (
	<Fragment key={`event-${index}`}>
	  {index > 0 && <div className="lg:block hidden w-1 h-44 bg-zinc-300" />}
	  <TimelineEvent
	    index={index + 1}
	    text={event}
	    selected={selectedEvent === index + 1}
	    onInView={() => setSelectedEvent(index + 1)}
	  />
	</Fragment>
      ))}
    </div>
  )
}

export default EventSection;
