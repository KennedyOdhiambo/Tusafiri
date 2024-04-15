import { Mail, Phone } from 'lucide-react';
import { ModeToggle } from './ui/modeToggle';
import LoginModal from '@/features/authentication/LoginModal';
import SignupModal from '@/features/authentication/SignupModal';

export default function Header() {
  return (
    <div className="fixed inset-0 z-50 inline-flex h-12 w-full items-center justify-between bg-primary p-2 text-xs text-primary-foreground shadow md:px-6">
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
        <LoginModal />
        <SignupModal />

        <ModeToggle />
      </div>
    </div>
  );
}
