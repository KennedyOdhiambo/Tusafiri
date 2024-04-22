import signupAction from '@/actions/signupAction';
import { useToast } from '@/components/ui/use-toast';
import { consts } from '@/lib/consts';
import { Newuser } from '@/validation/signupValidation';
import { useState } from 'react';

export default function useSubmitSignup() {
  const [isLoading, setIsloading] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (newUser: Newuser) => {
    setIsloading(true);
    try {
      const res = await signupAction(newUser);
      if (res.status !== consts.httpCodeSucceed) throw new Error(res.message);

      toast({
        description: res.message,
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          description: error.message,
        });

        console.error(error);
      }
    } finally {
      setIsloading(false);
    }
  };

  return { isLoading, onSubmit };
}