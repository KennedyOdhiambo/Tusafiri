'use client';

import { useContext, useState } from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

import { TripsContext } from '@/context/TripsContext';
import { cn } from '@/lib/utils';

import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from './button';
import { Calendar } from './calendar';

export function DatePicker() {
  const [date, setDate] = useState<Date>();
  const tripsContext = useContext(TripsContext);

  const handleSelect = (selectedDate: Date | undefined) => {
    tripsContext?.setTravelDate(selectedDate);
    setDate(selectedDate);
  };

  return (
    <div className=" mt-2.5">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn('w-[240px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP') : <span>Travelling Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={handleSelect} initialFocus />
        </PopoverContent>
      </Popover>
    </div>
  );
}
