import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Newsletter Section */}
        <div>
          <h4 className="text-gray-500 text-sm font-semibold mb-4">Newsletter</h4>
          <p className="text-[#4d4d4d] text-xl font-semibold mb-6">Stay up-to-date with FSP's<br />latest news and updates.</p>
          <div className="flex max-w-sm border border-gray-300 overflow-hidden mb-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="bg-black text-white px-6 py-2 font-medium">Sign up</button>
          </div>
          <p className="text-gray-500 text-xs">
            By clicking the &quot;Enroll&quot; button below, you agree you want to receive the<br />FSPs Newsletter and agree to the Terms of Services.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-gray-500 text-sm font-semibold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-[#4d4d4d] hover:underline">Home</Link></li>
            <li><Link href="/council" className="text-[#4d4d4d] hover:underline">Council</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
} 