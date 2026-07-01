import React, { useState } from 'react';
import { Search, Menu, X, Home, Compass, Award } from 'lucide-react';
import logo from '../assets/logo.png';

export const Navbar= () => {
 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
 

  const navigations = [
    { id: 'Home', label: 'Home' },
    { id: 'Car', label: 'Car' },
    { id: 'Bike', label: 'Bike' },
    { id: 'Auto Parts', label: 'Auto Parts' },
  { id: 'Forums', label: 'Review' },
  ];

  const handleNavClick = (viewId) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-30 bg-orange-600 backdrop-blur-md border-b border-slate-100 z-50 transition-all duration-300">
        <div className="w-full max-full mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          
          <div className="flex min-w-0 items-center gap-6 lg:gap-12">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-[60px] h-[73.85px] bg-white" />
            </div>
            </div>
            <div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigations.map((nav) => {
                const isActive = currentView === nav.id;
                return (
                  <button
                    key={nav.id}
                    onClick={() => handleNavClick(nav.id)}
                    className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                      isActive 
                        ? 'text-[#004ac6] border-b-2 border-[#004ac6]' 
                        : 'text-slate-600 hover:text-[#004ac6]'
                    }`}
                  >
                    {nav.label}
                  </button>
                );
              })}
            </nav>
          </div>
            <div>
          {/* Core Utilities */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            
        

          {/* language Placeholder button */}
            <button 
              onClick={() => alert("Welcome to your Premer Vehicles profile!")}
              className="hidden sm:inline-flex p-2 text-slate-500 hover:text-[#004ac6] rounded-full hover:bg-slate-50 cursor-pointer"
            >
             اردو
            </button>

            

            {/* Profile Placeholder Icon */}
            <button 
              onClick={() => alert("Welcome to your shopEasy profile!")}
              className="hidden sm:inline-flex p-2 text-slate-500 hover:text-[#004ac6] rounded-full hover:bg-slate-50 cursor-pointer"
            >
              Login/Signup
            </button>

            </div>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2 text-slate-600 hover:text-[#004ac6] md:hidden rounded-full hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-[22px] h-[22px]" /> : <Menu className="w-[22px] h-[22px]" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-black/40 z-40 md:hidden backdrop-blur-xs transition-opacity" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute top-0 left-0 w-full bg-white border-b border-slate-100 shadow-xl px-4 py-5 space-y-4 flex flex-col transition-all duration-300" onClick={e => e.stopPropagation()}>
            
            {/* Nav links */}
            <div className="space-y-1">
              {navigations.map((nav) => {
                const isActive = currentView === nav.id;
                return (
                  <button
                    key={nav.id}
                    onClick={() => handleNavClick(nav.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold tracking-wide flex items-center gap-3 transition-colors ${
                      isActive 
                        ? 'bg-[#004ac6]/10 text-[#004ac6]' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-[#004ac6]'
                    }`}
                  >
                    {nav.id === 'home' && <Home className="w-5 h-5" />}
                    {nav.id === 'shop' && <Compass className="w-5 h-5" />}
                    {nav.id === 'categories' && <Award className="w-5 h-5" />}
                    {nav.label}
                  </button>
                );
              })}
            </div>

          

          </div>
        </div>
      )}
    </>
  );
};
