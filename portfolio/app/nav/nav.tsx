import Link from 'next/link'
import sites from './sites'

export default function Nav() {
    return (
        <div>
            <nav className="sticky top-0 w-full bg-white p-4 z-50">
                <ul className="flex justify-between">

                    {sites.map(submap => (
                        <li key={submap.link}><Link href={submap.link}>{submap.name}</Link></li>
                    ))}

                    {/* Section for GPU/CPU Mode */}
                    <li>
                        <label className="flex items-center cursor-pointer space-x-2">
                            <span className="text-sm font-light">CPU Mode</span>
                            <input
                                type="checkbox"
                                // checked={isChecked}
                                // onChange={handleCheckboxChange}
                                value=""
                                className="sr-only peer"
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 dark:peer-focus:ring-b-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-300"></div>
                            <span className="text-sm font-light">GPU Mode</span>
                        </label>
                    </li>
                </ul>
            </nav>
        </div>
    );
}