// Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white text-center p-4 absolute bottom-0 w-full">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} JosesMathJournal. All Rights Reserved.</p>
          <p>
            Made with ❤️ by Jose Salazar
          </p>
          {/* Add additional links or information here if needed */}
        </div>
      </footer>
    );
  };
  
  export default Footer;