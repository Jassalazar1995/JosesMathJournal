import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} JosesMathJournal. All Rights Reserved.</p>
          <p>
            Made with ❤️ by Jose Salazar
          </p>
          <p>Enjoy the content?</p>
          <Link to='/Donate' className="hover:text-gray-300">
            <div>Donate</div>
          </Link>
        </div>
      </footer>
    );
  };
  
  export default Footer;