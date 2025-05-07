export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Bharath Kumar Polasa. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Master's in Computer Science | Auburn University at Montgomery</p>
        </div>
      </footer>
    );
  }