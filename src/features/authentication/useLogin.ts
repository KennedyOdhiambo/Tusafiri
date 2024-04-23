import { Dispatch, SetStateAction, useState } from 'react';
import loginAction from '@/actions/loginAction';
import { useToast } from '@/components/ui/use-toast';
import { consts } from '@/lib/consts';
import { Login } from '@/validation/loginValidation';
import { useAuthActions } from './useAuthStore';

export default function useLogin({ setDialogClosed }: { setDialogClosed: Dispatch<SetStateAction<boolean>> }) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { updateUser, setIsLoggedin } = useAuthActions();

  const onSubmit = async (data: Login) => {
    setIsLoading(true);
    try {
      const res = await loginAction(data);
      if (res.status !== consts.httpCodeSucceed) throw new Error(res.message);
      const user = res.user;
      updateUser(user!);
      setIsLoggedin();

      toast({
        description: res.message,
      });

      setDialogClosed(true);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          description: error.message,
          variant: 'destructive',
        });

        console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit, isLoading };
}
