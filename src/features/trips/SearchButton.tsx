'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function SearchButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push('/booking')}
      variant={'default'}
      className="mt-2 w-[240px] self-end xl:w-[180px] xl:justify-self-end"
    >
      Find Bus
    </Button>
  );
}
