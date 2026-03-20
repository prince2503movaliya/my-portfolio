export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#020617] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center">
        {/* TEXT */}
        <p className="text-white-500 text-sm">
          © {new Date().getFullYear()} Prince. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
