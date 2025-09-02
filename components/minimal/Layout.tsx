import HeaderMinimal from '@/components/layout/HeaderMinimal';
import FooterMinimal from '@/components/layout/FooterMinimal';

export default function MinimalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <HeaderMinimal />
      <main className="pt-16">
        {children}
      </main>
      <FooterMinimal />
    </div>
  );
}