import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.svg';

const Navbar= () => {
 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('Home');
 

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
      <header className="fixed top-0 left-0 w-full h-30 bg-transparent backdrop-blur-md   z-50 transition-all duration-300">
        <div className="w-full max-full mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          
          <div className="flex min-w-0 items-center gap-6 lg:gap-12">
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-101">
                <img src={logo} alt="Logo" className="w-[60px] h-[73.85px] " />
              </Link>
            </div>
            </div>
            <div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex  items-center gap-8">
              {navigations.map((nav) => {
                const isActive = currentView === nav.id;
                return (
                  <button
                    key={nav.id}
                    onClick={() => handleNavClick(nav.id)}
                    className={`relative py-1 text-sm text-base tracking-wide transition-colors duration-200 cursor-pointer ${
                      isActive 
                        ? 'border-b-2 border-white text-white' 
                        : '  hover:border-b-2 hover:border-white text-white/80 hover:text-white'
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
              
              className="hidden sm:inline-flex px-6 py-2 text-white/80  hover:text-white   cursor-pointer border border-white/80 font-medium rounded-lg  hover:border-white  transition-colors"
            >
             اردو
            </button>

            

            {/* Profile Placeholder Icon */}
            <button 
              onClick={() => alert("Welcome to your Premier vehicles profile!")}
              className="hidden px-3 py-2 sm:inline-flex p-2 text-white/80 hover:text-white   border border-white/80 rounded-lg font-medium cursor-pointer"
            >
              Login/Signup
            </button>

            </div>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2 text-white hover:border-white md:hidden rounded-full hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-[22px] h-[22px]" /> : <Menu className="w-[22px] h-[22px]" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-black/40 z-40 md:hidden backdrop-blur-xs transition-opacity" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute top-0 left-0 w-full bg-white border-b border-orange-100 shadow-xl px-4 py-5 space-y-4 flex flex-col transition-all duration-300" onClick={e => e.stopPropagation()}>
            
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
                        ? 'bg-orange-100 text-orange-600' 
                        : 'text-orange-600 hover:bg-orange-100 hover:text-orange-700'
                    }`}
                  >
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

export { Navbar };
