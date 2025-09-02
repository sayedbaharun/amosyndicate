import Link from 'next/link';

export default function FooterMinimal() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-lg font-medium mb-4">AMO Marketing</h3>
            <p className="text-sm text-gray-600">Part of Arab Money Official LLC</p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Dubai, UAE</p>
              <p>hello@amomarketing.com</p>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block hover:opacity-60">About</Link>
              <Link href="/services" className="block hover:opacity-60">Services</Link>
              <Link href="/portfolio" className="block hover:opacity-60">Portfolio</Link>
              <Link href="/contact" className="block hover:opacity-60">Contact</Link>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>© 2025 AMO Marketing</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}