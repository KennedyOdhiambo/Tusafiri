import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';

import bus from '../../../public/easycoach.webp';
import Image from 'next/image';

export default function AvailableTripCard() {
  return (
    <Card className=" h-fit w-full shadow xl:max-w-2xl">
      <CardHeader className="flex w-full flex-row items-center justify-between">
        <CardDescription className="mt-1 flex flex-col items-center tracking-wide">
          <span className="text-base font-semibold uppercase">Nairobi</span>
          <span>9:00 PM</span>
        </CardDescription>
        <Image src={bus} alt="bus" className="" />
        <CardDescription className="flex flex-col items-center tracking-wide">
          <span className="text-base font-semibold uppercase">Kisumu</span>
          <span>4:00 AM</span>
        </CardDescription>
      </CardHeader>

      <CardContent className=" flex flex-row items-end justify-between">
        <div className="flex flex-col items-start gap-0.5 sm:flex-row sm:gap-10">
          <CardDescription className=" text-accent-foreground">
            Remaining Seats : <span className=" font-semibold text-destructive">5</span>
          </CardDescription>

          <CardDescription className=" text-accent-foreground">
            Ticket Price: <span className="font-semibold text-destructive">Ksh. 500</span>
          </CardDescription>
        </div>
        <Button className="">Select seat</Button>
      </CardContent>
    </Card>
  );
}
