'use client';

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
import useScrollY from '@/lib/hooks/useScrollY';

export default function SignupModal() {
  const isScrolled = useScrollY();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'link'}
          className={`${isScrolled ? ' text-primary-foreground' : 'text-primary'} inline-flex items-center gap-1 text-xs`}
        >
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
