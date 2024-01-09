import { forwardRef, useEffect, useCallback, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

type EventProps = {
  index: number,
  text: string,
  selected?: boolean,
  onInView: (index: number) => void
};

const TimelineEvent = forwardRef<HTMLDivElement, EventProps>(({
  index,
  text,
  selected,
  onInView
}, ref) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    rootMargin: '0px 0px -500px 0px'
  });

  const prevInView = useRef(inView);

  useEffect(() => {
    if ((prevInView.current && !inView) || inView) {
      onInView(index);
    }
    prevInView.current = inView;
  }, [inView, onInView, index]);

  const setRefs = useCallback((node: HTMLDivElement | null) => {
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
    inViewRef(node);
  }, [ref, inViewRef]);

  const isRightSide = index % 2 === 0;

  return (
    <div ref={setRefs} className="relative flex gap-y-8 gap-x-4 lg:gap-x-0 items-center">
      <div className={`flex items-center justify-center rounded-full ${selected ? 'w-12 h-12 bg-black' : 'w-8 h-8 bg-zinc-300'}`}>
	<div className={`text-white font-medium ${selected ? 'text-lg' : 'text-sm'}`}>
	  {index}
	</div>
      </div>

      <div className={`absolute ${isRightSide ? 'left-full' : 'right-full'} h-full lg:flex hidden items-center`}>
	<div className={`w-7 h-1 ${selected ? 'bg-black' : 'bg-zinc-300'}`} />
      </div>

      <div className={`lg:absolute text-left ${isRightSide ? 'lg:left-full lg:ml-16' : 'lg:right-full lg:mr-16'} ${selected ? 'text-black' : 'text-zinc-300'} flex items-center`}>
	<div className="leading-8 text-lg px-2 lg:w-[400px] w-[350px] max-h-32 lg:max-w-lg max-w-sm">
	  {text}
	</div>
      </div>
    </div>
  )
})

export default TimelineEvent;
