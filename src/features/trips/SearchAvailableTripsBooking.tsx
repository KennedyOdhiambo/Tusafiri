import DropdownSelect from '@/components/DropdownSelect';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datepicker';
import { ArrowLeftRight, Search } from 'lucide-react';

const sampleLocations = [
  { value: '101', text: 'Kisumu' },
  { value: '102', text: 'Mombasa' },
  { value: '103', text: 'Nakuru' },
  { value: '104', text: 'Eldoret' },
];

export default function SearchAvailableTripsBooking() {
  return (
    <div className="hidden lg:flex lg:flex-row lg:items-end lg:justify-center lg:gap-5">
      <div className="flex flex-row items-end  gap-8">
        <DropdownSelect
          handleSelect={() => console.log('selected')}
          label="Travelling From"
          options={sampleLocations}
        />
        <div className=" inline-flex items-center rounded-full bg-card p-2  text-card-foreground ">
          <ArrowLeftRight />
        </div>
        <DropdownSelect handleSelect={() => console.log('selected')} label="Travelling To" options={sampleLocations} />
      </div>

      <DatePicker />
      <Button variant={'default'} size={'lg'} className=" inline-flex gap-4">
        <Search className=" size-4" />
        Find Bus
      </Button>
    </div>
  );
}
