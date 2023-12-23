import { forwardRef, useEffect, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'

type EventProps = {
  index: number,
  text: string,
  side: "left" | "right",
  selected?: boolean,
  onInView: (index: number) => void
};

const TimelineEvent = forwardRef<HTMLDivElement, EventProps>(({
  index,
  text,
  side,
  selected,
  onInView
}, ref) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px 0px -300px 0px'
  });

  useEffect(() => {
    if (inView) {
      onInView(index);
    }
  }, [inView, onInView, index]);

  const setRefs = useCallback((node) => {
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
    inViewRef(node);
  }, [ref, inViewRef]);

  const isRightSide = side === "right";

  return (
    <div ref={setRefs} className="relative flex gap-y-8 gap-x-4 lg:gap-x-0 items-center">
      <div className={`flex items-center justify-center rounded-full ${selected ? 'lg:w-16 lg:h-16 w-12 h-12 bg-gray-900' : 'lg:w-12 lg:h-12 w-8 h-8 bg-gray-400'}`}>
	<div className={`text-white pt-2 ${selected ? 'lg:text-3xl text-2xl' : 'lg:text-xl text-lg'}`}>
	  {index}
	</div>
      </div>

      <div className={`absolute ${isRightSide ? 'left-full' : 'right-full'} h-full lg:flex hidden items-center`}>
	<div className={`w-7 h-2 ${selected ? 'bg-gray-900' : 'bg-gray-400'}`}></div>
      </div>

      <div className={`lg:absolute text-left ${isRightSide ? 'lg:left-full lg:ml-16' : 'lg:right-full lg:mr-16'} ${selected ? '' : 'text-gray-400'} flex items-center`}>
	<div className="text-lg font-rockwell px-2 lg:w-[400px] w-[350px] max-h-32 lg:max-w-lg max-w-sm">
	  {text}
	</div>
      </div>
    </div>
  )
})

export default TimelineEvent;
