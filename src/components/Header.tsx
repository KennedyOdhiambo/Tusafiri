import { LogIn, Mail, Phone, User } from 'lucide-react';
import { Button } from './ui/Button';
import { ModeToggle } from './ui/modeToggle';

export default function Header() {
  return (
    <div className="fixed inset-0 z-50 inline-flex h-12 w-full items-center justify-between bg-primary p-2 text-xs text-primary-foreground md:px-6">
      <div className="hidden flex-row justify-start gap-5 sm:flex">
        <div className="inline-flex items-center gap-1">
          <Phone className="size-5" />
          <span>+254727533551</span>
        </div>

        <div className="flex flex-row items-center gap-1">
          <Mail className="size-5" />
          <span>contact@northRift.co.ke</span>
        </div>
      </div>

      <div className="inline-flex w-full items-center justify-end">
        <Button variant={'link'} className="inline-flex items-center gap-1 text-xs text-white">
          <LogIn className="size-5" />
          <span>Log in</span>
        </Button>

        <Button variant={'link'} className="me-2 inline-flex gap-1 text-xs text-white">
          <User className="size-5" />
          <span>Sign Up</span>
        </Button>

        <ModeToggle />
      </div>
    </div>
  );
}
