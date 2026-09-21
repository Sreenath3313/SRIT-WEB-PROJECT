import { Link } from 'react-router-dom';

interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
}

const columns: Record<string, FooterLink[]> = {
    About: [
        { label: 'Overview', href: 'https://www.srit.ac.in/overview/', external: true },
        { label: 'Vision & Mission', href: 'https://www.srit.ac.in/vision-mission/', external: true },
        { label: 'Chairperson', href: 'https://www.srit.ac.in/about-chairperson/', external: true },
        { label: 'Principal', href: 'https://www.srit.ac.in/principal/', external: true },
    ],

    Academics: [
        { label: 'Courses Offered', href: 'https://www.srit.ac.in/courses-offered/', external: true },
        { label: 'Fee Structure', href: 'https://www.srit.ac.in/fee-structure/', external: true },
        { label: 'Scholarships', href: 'https://www.srit.ac.in/scholarships/', external: true },
        { label: 'Library', href: 'https://www.srit.ac.in/library/', external: true },
        { label: 'NDLI Club', href: '/ndli-club' },
        { label: 'Women Empowerment Cell', href: '/women-empowerment-cell' },
    ],

    Departments: [
        { label: 'CSE', href: '/department/cse' },
        { label: 'CSE — AI & ML', href: '/department/csm' },
        { label: 'CSE — AI & DS', href: '/department/cad' },
        { label: 'ECE', href: '/department/ece' },
        { label: 'EEE', href: '/department/eee' },
        { label: 'Mechanical', href: '/department/mec' },
        { label: 'Civil', href: '/department/civil' },
    ],

    Connect: [
        { label: 'Admissions', href: 'https://www.srit.ac.in/admission-procedure/', external: true },
        { label: 'Contact Us', href: 'https://www.srit.ac.in/contact-us/', external: true },
        { label: 'Previous Ranks', href: 'https://www.srit.ac.in/previousranks/', external: true },
    ],
};

const socialLinks = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/sritatp/',
        icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    },
    {
        label: 'Twitter',
        href: 'https://x.com/sritatp',
        icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/school/sritatp/',
        icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
];

const Footer: React.FC = () => {
    return (
        <footer className="relative overflow-hidden bg-[#080808] text-white">

            {/* =====================================================
                ORANGE TOP ACCENT
            ===================================================== */}

            <div className="relative h-[4px] bg-[#FF5422]">
                <div className="absolute inset-0 bg-[#FF5422] shadow-[0_0_20px_rgba(255,84,34,0.35)]" />
            </div>


            {/* =====================================================
                SUBTLE ORANGE AMBIENT GLOW
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -top-40
                    left-1/4
                    w-[500px]
                    h-[300px]
                    rounded-full
                    bg-[#FF5422]/[0.045]
                    blur-[100px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    w-[350px]
                    h-[300px]
                    rounded-full
                    bg-[#FF5422]/[0.035]
                    blur-[100px]
                "
            />


            <div className="relative section-container pt-12 pb-7">

                {/* =================================================
                    BRAND + CONTACT
                ================================================= */}

                <div
                    className="
                        flex
                        flex-col
                        lg:flex-row
                        items-start
                        lg:items-end
                        justify-between
                        gap-7
                        mb-9
                        pb-7
                        border-b
                        border-white/[0.09]
                    "
                >

                    {/* Brand */}
                    <div>

                        <Link
                            to="/"
                            className="
                                inline-block
                                font-bold
                                text-xl
                                lg:text-2xl
                                text-white
                                tracking-wide
                                leading-relaxed
                                transition-colors
                                duration-300
                                hover:text-[#FF5422]
                            "
                        >
                            Srinivasa Ramanujan<br />
                            Institute of Technology
                        </Link>

                        <p className="text-white/45 text-sm mt-2">
                            Rotarypuram, Anantapur — 515701, Andhra Pradesh
                        </p>

                    </div>


                    {/* Contact */}
                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-row
                            sm:items-center
                            gap-2
                            sm:gap-5
                            text-sm
                        "
                    >

                        <a
                            href="tel:9515611111"
                            className="
                                text-white/55
                                hover:text-[#FF5422]
                                transition-colors
                                duration-300
                            "
                        >
                            91-951 561 1111
                        </a>

                        <span className="hidden sm:block w-px h-3 bg-white/15" />

                        <a
                            href="mailto:hr@srit.ac.in"
                            className="
                                text-white/55
                                hover:text-[#FF5422]
                                transition-colors
                                duration-300
                            "
                        >
                            hr@srit.ac.in
                        </a>

                    </div>

                </div>


                {/* =================================================
                    LINK COLUMNS
                ================================================= */}

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        md:grid-cols-4
                        gap-8
                        lg:gap-10
                        mb-9
                    "
                >

                    {Object.entries(columns).map(([title, links]) => (
                        <div key={title}>

                            <p
                                className="
                                    label-caps
                                    text-white/45
                                    mb-4
                                "
                            >
                                {title}
                            </p>

                            <ul className="space-y-2.5">

                                {links.map((link) => (
                                    <li key={link.label}>

                                        {link.external ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                    inline-block
                                                    text-white/65
                                                    text-sm
                                                    transition-all
                                                    duration-300
                                                    hover:text-[#FF5422]
                                                    hover:translate-x-1
                                                "
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                className="
                                                    inline-block
                                                    text-white/65
                                                    text-sm
                                                    transition-all
                                                    duration-300
                                                    hover:text-[#FF5422]
                                                    hover:translate-x-1
                                                "
                                            >
                                                {link.label}
                                            </Link>
                                        )}

                                    </li>
                                ))}

                            </ul>

                        </div>
                    ))}

                </div>


                {/* =================================================
                    BOTTOM
                ================================================= */}

                <div
                    className="
                        pt-6
                        border-t
                        border-white/[0.09]
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        justify-between
                        gap-4
                    "
                >

                    <p className="text-white/40 text-xs">
                        © 2007–{new Date().getFullYear()} Srinivasa Ramanujan Institute of Technology. All rights reserved.
                    </p>


                    {/* Social Icons */}
                    <div className="flex items-center gap-2">

                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    w-10
                                    h-10
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    text-white/40
                                    border
                                    border-white/[0.08]
                                    bg-white/[0.02]
                                    transition-all
                                    duration-300
                                    hover:text-white
                                    hover:bg-[#FF5422]
                                    hover:border-[#FF5422]
                                    hover:-translate-y-1
                                    hover:shadow-[0_8px_25px_rgba(255,84,34,0.22)]
                                "
                                aria-label={social.label}
                            >

                                <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d={social.icon} />
                                </svg>

                            </a>
                        ))}

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;