import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-green-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">HotelBooking</Link>
        </span>
        <span className="flex space-x-2">
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-green-600"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-tan-600"
                to="/my-hotels"
              >
                My Hotels
              </Link>
            </>
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-tan-600 px-3 font-bold hover:bg-gray-100"
            > Sign In
            </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;