export default function HeroMinimal() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-8">
              Gulf Heritage
              <br />
              <span className="text-[#B8A06A]">Digital Excellence</span>
            </h1>
            
            <a 
              href="/contact" 
              className="inline-block px-12 py-4 bg-black text-white font-medium hover:opacity-90 transition-opacity duration-200"
            >
              Begin
            </a>
          </div>
          
          {/* Right: Image */}
          <div className="relative aspect-[4/3] bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop"
              alt="Dubai"
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}