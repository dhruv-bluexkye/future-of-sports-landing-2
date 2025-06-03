export default function CouncilFooter() {
  return (
    <footer className="bg-black text-white py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-medium mb-4">About</h3>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>Our Mission</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">Resources</h3>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>Blog</li>
            <li>Research</li>
            <li>Events</li>
            <li>Partnerships</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">Legal</h3>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">Connect</h3>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-xs text-gray-500">
        © 2025 Future of Sports Protocol. All rights reserved.
      </div>
    </footer>
  )
}
