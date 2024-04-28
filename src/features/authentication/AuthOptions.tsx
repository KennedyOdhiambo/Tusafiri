'use client';

import { LogOut } from 'lucide-react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import { ModeToggle } from '@/components/ui/modeToggle';
import { useContext } from 'react';
import { GlobalContext } from '@/context/GlobalContext';
import { useToast } from '@/components/ui/use-toast';

export default function AuthOptions() {
  const { toast } = useToast();
  const globalContext = useContext(GlobalContext);
  const isLoggedin = globalContext?.isLoggedIn;
  const user = globalContext?.user;
  const resetUserState = globalContext?.resetUserState!;

  const handleLogout = () => {
    resetUserState();
    toast({
      description: 'Account succesfully logged out',
    });
  };

  if (isLoggedin)
    return (
      <div className="me-6 flex flex-row items-center gap-2">
        <span>{user?.name}</span>
        <div title="log out" className=" me-5">
          <LogOut className="size-4 cursor-pointer" onClick={handleLogout} />
        </div>
        <ModeToggle />
      </div>
    );

  return (
    <>
      <LoginModal />
      <SignupModal />
      <ModeToggle />
    </>
  );
}
