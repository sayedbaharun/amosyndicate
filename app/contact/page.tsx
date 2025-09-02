import MinimalLayout from '@/components/minimal/Layout';

export default function Contact() {
  return (
    <MinimalLayout>
      <div className="max-w-[600px] mx-auto px-6 py-32">
        <h1 className="text-5xl font-medium mb-16">Contact</h1>
        
        {/* Contact Information */}
        <div className="mb-16 space-y-2">
          <p className="text-lg">hello@amomarketing.com</p>
          <p className="text-lg">+971 4 XXX XXXX</p>
          <p className="text-lg">Dubai, UAE</p>
        </div>
        
        {/* Contact Form */}
        <div className="space-y-8">
          <h2 className="text-2xl font-medium">Send us a message</h2>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-0 py-3 border-0 border-b border-black focus:outline-none focus:border-[#B8A06A] placeholder:text-gray-400"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-0 py-3 border-0 border-b border-black focus:outline-none focus:border-[#B8A06A] placeholder:text-gray-400"
              />
            </div>
            
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-0 py-3 border-0 border-b border-black focus:outline-none focus:border-[#B8A06A] placeholder:text-gray-400 resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="px-12 py-4 bg-black text-white font-medium hover:opacity-90 transition-opacity duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </MinimalLayout>
  );
}