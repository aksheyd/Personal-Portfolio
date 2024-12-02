"use client";

import Link from 'next/link';
import sites from './sites';
import { useEffect, useState } from 'react';

export default function Nav() {
    const [isThere, handleGettingThere] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 3500) {
                handleGettingThere(true);
            } else {
                handleGettingThere(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className={`fixed top-0 w-full ${isThere ? "bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200" : "backdrop-blur-xl"} p-4 z-50`}>
                <div className="text-md font-light">
                <ul className="flex justify-between">
                    {sites.map(submap => (
                        <li className="hover:text-xl" key={submap.link}><Link href={submap.link}>{submap.name}</Link></li>
                    ))}

                    {/* Section for GPU/CPU Mode */}
                    <li>
                        <label className="flex items-center cursor-pointer space-x-2">
                            <span className="normal-case">CPU Mode</span>
                            <input
                                type="checkbox"
                                // checked={isChecked}
                                // onChange={handleCheckboxChange}
                                value=""
                                className="sr-only peer"
                            />
                            <div className="relative w-11 h-6 bg-gray-100 peer-focus:outline-none peer-focus:ring-0 dark:peer-focus:ring-b-800 rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-200"></div>
                            <span className="normal-case">GPU Mode</span>
                        </label>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
}