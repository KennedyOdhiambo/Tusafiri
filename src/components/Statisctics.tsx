import { BusFront, Route, Ticket, UsersRound } from 'lucide-react';
import StatisticsCard from './StatisticsCard';

export default function Statisctics() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-5 md:grid-cols-3 md:justify-items-center lg:grid-cols-4">
      <StatisticsCard icon={<UsersRound />} numbers="1.5M +" description="Customers" />
      <StatisticsCard icon={<BusFront />} description="Shuttles" numbers="100 +" />
      <StatisticsCard icon={<Route />} description="Routes" numbers="20 + " />
      <StatisticsCard icon={<Ticket />} description="Tickets Sold" numbers="1M +" />
    </div>
  );
}
