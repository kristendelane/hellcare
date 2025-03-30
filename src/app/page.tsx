import AdventureGame from '@/components/AdventureGame';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24 bg-gray-50">
      <AdventureGame />
    </main>
  );
}
