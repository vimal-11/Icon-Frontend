'use client';

const Navbar = () => (
  <div className="navbar text-neutral-content z-[2] relative bg-transparent">
    <div className="navbar-start">
      <div className="dropdown">
        <button type="button" className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <ul className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-primary-black rounded-box w-52">
          <li><a href="/">Home</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/regprofile">Create Profile</a></li>
          <li><a href="/viewprofile">My Profile</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Signup</a></li>
          <li><a href="/about">About Site</a></li>
          <li><a href="/office_bearers">Office Bearers</a></li>
          <li><a href="/guidelines">How to register?</a></li>
        </ul>

      </div>
    </div>
    {/* <div className="navbar-center">
      <img
        src="ptu-logo.png"
        className="w-10 h-14" // Adjust the width and height as needed (e.g., w-12 means width: 3rem, h-12 means height: 3rem)
        alt="PTU Logo"
      />
      <a className="btn btn-ghost normal-case text-xl">PUDUCHERRY TECHNOLOGICAL UNIVERSITY</a>

    </div> */}
    <div className="navbar-end">
      <button type="button" className="btn btn-ghost btn-circle">
        <a href="https://instagram.com/icon_ptu?igshid=OGQ5ZDc2ODk2ZA">
        <img src="instagram.svg" alt="instagram" />
        </a>
      </button>
    </div>
  </div>
);

export default Navbar;
