import { Button } from '@/components/ui/Button';
import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignupForm() {
  return (
    <>
      <form action="" className="flex flex-col gap-4">
        <div className="grid gap-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" type="text" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input className=" outline-none" id="phoneNumber" type="tel" placeholder="254-727-533-551" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
      </form>

      <DialogFooter>
        <Button className="w-full" type="submit">
          Sign up
        </Button>
      </DialogFooter>
    </>
  );
}
