import { Card } from '@/components/ui/card';
import DropdownSelect from '@/components/DropdownSelect';
import { DatePicker } from '@/components/ui/datepicker';
import { Button } from '@/components/ui/Button';

const sampleLocations = [
  { value: '101', text: 'Kisumu' },
  { value: '102', text: 'Mombasa' },
  { value: '103', text: 'Nakuru' },
  { value: '104', text: 'Eldoret' },
];

export default function SearchAvailableTrips() {
  return (
    <div className="inline-flex w-full justify-center">
      <Card className="flex flex-col gap-2 p-5 shadow-sm xl:grid xl:grid-cols-4">
        <div className="flex w-fit flex-col items-center gap-3 md:grid md:grid-cols-3 md:items-end xl:col-span-3">
          <DropdownSelect label="Travelling From" options={sampleLocations} />
          <DropdownSelect label="Travelling To" options={sampleLocations} />
          <DatePicker />
        </div>

        <Button variant={'default'} className="mt-2 w-[240px] self-end xl:w-[180px] xl:justify-self-end">
          Find Bus
        </Button>
      </Card>
    </div>
  );
}
