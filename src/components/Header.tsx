'use client';
import { LogOut, Mail, Phone } from 'lucide-react';
import { ModeToggle } from './ui/modeToggle';
import LoginModal from '@/features/authentication/LoginModal';
import SignupModal from '@/features/authentication/SignupModal';
import { Card } from './ui/card';
import useScrollY from '@/lib/hooks/useScrollY';
import { useAuthActions, useLoggedinState, useLoggedinUser } from '@/features/authentication/useAuthStore';

export default function Header() {
  const isScrolled = useScrollY();
  const { name } = useLoggedinUser();
  const isLoggedin = useLoggedinState();
  const { reset } = useAuthActions();
  return (
    <Card
      className={`${isScrolled ? 'bg-primary text-primary-foreground shadow-md' : 'bg-background text-primary shadow-none'} fixed inset-0 z-50 inline-flex h-12 w-full items-center justify-between rounded-none border-0 border-b p-2 text-xs font-semibold transition-colors duration-200 md:px-6`}
    >
      <div className="hidden flex-row justify-start gap-5 sm:flex">
        <div className="inline-flex items-center gap-1.5">
          <Phone className="size-5" />
          <span className="tracking-wide">+254727533551</span>
        </div>

        <div className="flex flex-row items-center gap-1">
          <Mail className="size-5" />
          <span className="tracking-wide">contact@safari.co.ke</span>
        </div>
      </div>

      <div className="inline-flex w-full items-center justify-end">
        {isLoggedin ? (
          <div className="me-6 flex flex-row items-center gap-2">
            {/* <LogOut
              className="cursor-pointer"
              onClick={() => {
                reset();
                window.location.reload();
              }}
            /> */}
            <span>{name}</span>
          </div>
        ) : (
          <>
            <LoginModal />
            <SignupModal />
          </>
        )}

        <ModeToggle />
      </div>
    </Card>
  );
}
