import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function PassengerDetails() {
  return (
    <Card className="border-none bg-transparent px-0 shadow-none">
      <CardHeader className=" mb-2 grid grid-cols-2 items-center px-0">
        <CardTitle className="text-2xl">Passenger Details</CardTitle>
        <CardDescription className="flex flex-row gap-5 self-end justify-self-end font-bold">
          <span>Nairobi</span>
          <span>to</span>
          <span>Eldoret</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="px-0">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" type="text" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" type="text" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="seats">Number of seats</Label>
            <Input id="seats" value={5} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="seats">Ticket cost</Label>
            <Input id="seats" className="font-semibold text-primary" value={'Ksh. 5000'} />
          </div>

          <div className="grid gap-2">
            <div className="flex flex-row items-center gap-3">
              <Label htmlFor="phoneNumber">Phone number</Label>
              <small className="text-[10px] font-thin text-primary">Provide a valid M-pesa number</small>
            </div>
            <Input id="phoneNumber" type="phoneNumber" placeholder="0727533551" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="idNumber">ID number / passport </Label>
            <Input id="idNumber" type="text" placeholder="optional" />
          </div>
        </div>
      </CardContent>

      <CardFooter className="justify-end px-0">
        <Button>Initiate Payment</Button>
      </CardFooter>
    </Card>
  );
}
