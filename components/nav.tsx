import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (

        <nav className="flex items-center justify-between py-6">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <Image src="/logo.png" height={35} width={35} />
                    <span className="font-bold ml-2 text-primary">coders blog</span>
                </div>
            </Link>
            <ul className="flex items-center text-primary-dark">
                <li className="mr-6 text-lg font-medium text-gray-700s hover:text-primary transition-all"><a href="#">home</a></li>
                <li className="mr-6 text-lg font-medium text-gray-700s hover:text-primary transition-all"><a href="#">pring</a></li>
                <li className="mr-6 text-lg font-medium text-gray-700s hover:text-primary transition-all"><a href="#">docs</a></li>
                <li className="mr-6 text-lg font-medium text-gray-700s hover:text-primary transition-all"><a href="#">company</a></li>
            </ul>
            <ul className="flex items-center">
                <li className="mr-2 font-medium text-gray-700"><a href="#" className="py-2 px-4 rounded-sm hover:bg-primary hover:text-white transition-all">login</a></li>
                <li className="font-medium text-gray-700"><a href="#" className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all">sign up</a></li>
            </ul>
        </nav>

    )
}

export default Navbar;