const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className=" mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Semicolon. All rights reserved.</p>
          <div className="mt-10">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a
              href="/terms-of-service"
              className="text-gray-400 hover:text-white transition duration-300 "
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  