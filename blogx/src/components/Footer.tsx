import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-4 bg-gray-900 text-white text-center left-0 bottom-0 z-50">
            <span>
                &copy; {new Date().getFullYear()} BlogX. All rights reserved.
            </span>
        </footer>
    );
};

export default Footer;
