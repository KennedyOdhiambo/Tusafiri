'use client';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <Button variant={'default'} onClick={() => console.log('clicked')}>
        Click me
      </Button>
    </main>
  );
}
