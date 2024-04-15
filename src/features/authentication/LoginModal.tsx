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

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'link'} className="inline-flex items-center gap-1 text-xs text-white">
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
