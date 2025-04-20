import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">NYC Dog Parks</Link>
            <nav className="space-x-6">
              <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
              <Link href="/boroughs" className="hover:text-blue-200 transition-colors">Boroughs</Link>
              <Link href="/about" className="hover:text-blue-200 transition-colors">About</Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">NYC Dog Parks Directory</h3>
              <p className="text-gray-300">
                The most comprehensive guide to dog parks and off-leash areas in New York City.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/boroughs/manhattan" className="text-gray-300 hover:text-white transition-colors">Manhattan Dog Parks</Link></li>
                <li><Link href="/boroughs/brooklyn" className="text-gray-300 hover:text-white transition-colors">Brooklyn Dog Parks</Link></li>
                <li><Link href="/boroughs/queens" className="text-gray-300 hover:text-white transition-colors">Queens Dog Parks</Link></li>
                <li><Link href="/boroughs/bronx" className="text-gray-300 hover:text-white transition-colors">Bronx Dog Parks</Link></li>
                <li><Link href="/boroughs/staten-island" className="text-gray-300 hover:text-white transition-colors">Staten Island Dog Parks</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://www.nycgovparks.org/facilities/dogareas" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">NYC Parks Department</a></li>
                <li><a href="https://www.akc.org/expert-advice/home-living/dog-park-etiquette/" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Dog Park Etiquette</a></li>
                <li><a href="https://www.nycacc.org/" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">NYC Animal Care Centers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} NYC Dog Parks Directory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
