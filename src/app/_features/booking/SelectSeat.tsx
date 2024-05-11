'use client';
import React from 'react';
import Seat from './Seat';
import { LifeBuoy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Seatslegend from './Seatslegend';
import SelectSeatActions from './SelectSeatActions';

export default function SelectSeat() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-6 lg:gap-12">
      <Card className=" w-fit items-center bg-transparent">
        <CardContent className="flex w-fit flex-col gap-1 pt-3">
          <LifeBuoy className="mb-1 size-8 self-end text-gray-600" />
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="inline-flex justify-between">
              <div className="flex flex-row gap-0.5">
                <Seat key={''} id={1} status={'available'} onSeatClick={() => console.log('clicked')} />
                <Seat key={''} id={2} status={'taken'} onSeatClick={() => console.log('clicked')} />
              </div>
              <div className="flex flex-row gap-0.5">
                <Seat key={''} id={3} status={'available'} onSeatClick={() => console.log('clicked')} />
                <Seat key={''} id={4} status={'selected'} onSeatClick={() => console.log('clicked')} />
              </div>
            </div>
          ))}
          <div className="flex flex-row gap-0.5">
            <Seat key={''} id={5} status={'available'} onSeatClick={() => console.log('clicked')} />
            <Seat key={''} id={6} status={'taken'} onSeatClick={() => console.log('clicked')} />
            <Seat key={''} id={7} status={'available'} onSeatClick={() => console.log('clicked')} />
            <Seat key={''} id={8} status={'available'} onSeatClick={() => console.log('clicked')} />
            <Seat key={''} id={9} status={'taken'} onSeatClick={() => console.log('clicked')} />
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col justify-between">
        <Seatslegend />
        <SelectSeatActions />
      </div>
    </div>
  );
}
