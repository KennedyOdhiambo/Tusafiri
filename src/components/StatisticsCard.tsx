import { ReactElement } from 'react';

type StatisticsCardProps = {
  icon: ReactElement;
  numbers: string;
  description: string;
};

export default function StatisticsCard({ icon, numbers, description }: StatisticsCardProps) {
  return (
    <div className="inline-flex gap-4">
      <div className={`flex items-center rounded-full bg-card p-6 text-card-foreground `}>{icon}</div>

      <div className="flex flex-col justify-center">
        <div className=" text-xl font-bold text-foreground ">{numbers}</div>{' '}
        <span className="text-lg font-thin tracking-wide text-foreground">{description}</span>
      </div>
    </div>
  );
}
