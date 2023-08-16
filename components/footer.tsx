import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="text-gray-600 mt-12 fixed bottom-0 left-0 bg-white w-full border-t-2 border-gray-100">
            <div className="container mx-auto flex items-center flex-col sm:flex-row py-8">
                <a className="flex items-center justify-center md:justify-start">
                    <Image src="/logo.png" height={35} width={35} />
                    <span className="ml-3 text-md font-sans">coders blog</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2022 codersblog —
                    <a
                        href="https://twitter.com/codersgyan"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank">
                        @coder'sGyan
                    </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-500 hover:bg-blue-700 hover:text-white p-1 rounded">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:bg-gray-800 hover:text-white p-1 rounded">
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0"
                            className="w-6 h-6"

                            x="0px" y="0px" viewBox="0 0 1668.56 1221.19"
                        >
                            <g id="layer1" transform="translate(52.390088,-25.058597)">
                                <path id="path1009" d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"/>
                            </g>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:bg-pink-700 hover:text-white p-1 rounded">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24">
                            <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:bg-blue-500 hover:text-white p-1 rounded">
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0"
                            className="w-5 h-5"
                            viewBox="0 0 24 24">
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>

                    </a>
                </span>
            </div>

        </footer>
    )
}

export default Footer; 