import { Button } from '@/components/ui/Button';
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer';
import SelectSeat from './SelectSeat';

export default function BookingDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="">Select seat</Button>
      </DrawerTrigger>

      <DrawerContent className="flex w-full items-center">
        <DrawerHeader className="font-bold">Select a Seat</DrawerHeader>
        <SelectSeat />
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
