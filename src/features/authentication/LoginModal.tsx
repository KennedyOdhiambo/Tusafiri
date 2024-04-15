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

import { LogIn } from 'lucide-react';
import LoginForm from './LoginForm';
import useScrollY from '@/lib/hooks/useScrollY';

export default function LoginModal() {
  const isScrolled = useScrollY();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'link'}
          className={`${
            isScrolled ? ' text-primary-foreground' : 'text-primary'
          } inline-flex items-center gap-1 text-xs`}
        >
          <LogIn className="size-5" />
          <span>Log in</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Login</DialogTitle>
          <DialogDescription>Enter your phonenumber below to login to your account.</DialogDescription>
        </DialogHeader>

        <LoginForm />
      </DialogContent>
    </Dialog>
  );
}
