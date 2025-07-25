import { useCountAnimation } from "@/hooks/useCountAnimation";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  startDelay?: number;
}

const AnimatedCounter = ({ end, suffix = "", duration = 2000, startDelay = 0 }: AnimatedCounterProps) => {
  const count = useCountAnimation({ end, duration, startDelay });

  const formatNumber = (num: number) => {
    if (end === 99.9) {
      return (num / 10).toFixed(1);
    }
    return num.toString();
  };

  return (
    <span>
      {formatNumber(count)}{suffix}
    </span>
  );
};

export default AnimatedCounter;