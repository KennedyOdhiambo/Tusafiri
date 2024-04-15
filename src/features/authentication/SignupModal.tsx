import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { User } from 'lucide-react';
import SignupForm from './SignupForm';

export default function SignupModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'link'} className="inline-flex items-center gap-1 text-xs text-white">
          <User className="size-5" />
          <span>Sign Up</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Login</DialogTitle>
          <DialogDescription>Enter your phonenumber below to login to your account.</DialogDescription>
        </DialogHeader>

        <SignupForm />
      </DialogContent>
    </Dialog>
  );
}
