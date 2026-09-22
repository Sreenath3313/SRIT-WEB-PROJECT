import React from 'react';

type CollegeBuildingOutlineProps = React.SVGProps<SVGSVGElement>;

const CollegeBuildingOutline: React.FC<CollegeBuildingOutlineProps> = ({ className, ...props }) => (
    <svg 
        viewBox="0 0 800 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="xMaxYMax meet"
        {...props}
    >
        <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" opacity="0.2">
            {/* Ground Line */}
            <line x1="0" y1="190" x2="800" y2="190" />
            
            {/* Main Central Block */}
            <rect x="280" y="80" width="220" height="110" />
            <rect x="290" y="70" width="200" height="10" />
            <rect x="300" y="60" width="180" height="10" />
            {/* Columns */}
            <line x1="310" y1="90" x2="310" y2="190" />
            <line x1="340" y1="90" x2="340" y2="190" />
            <line x1="370" y1="90" x2="370" y2="190" />
            <line x1="410" y1="90" x2="410" y2="190" />
            <line x1="440" y1="90" x2="440" y2="190" />
            <line x1="470" y1="90" x2="470" y2="190" />
            
            {/* Left Block */}
            <rect x="130" y="100" width="150" height="90" />
            <rect x="140" y="90" width="130" height="10" />
            {/* Left Windows */}
            <rect x="150" y="110" width="20" height="30" />
            <rect x="190" y="110" width="20" height="30" />
            <rect x="230" y="110" width="20" height="30" />
            <rect x="150" y="150" width="20" height="30" />
            <rect x="190" y="150" width="20" height="30" />
            <rect x="230" y="150" width="20" height="30" />

            {/* Far Left Block */}
            <rect x="30" y="120" width="100" height="70" />
            {/* Far Left Windows */}
            <rect x="45" y="130" width="20" height="20" />
            <rect x="85" y="130" width="20" height="20" />
            <rect x="45" y="160" width="20" height="20" />
            <rect x="85" y="160" width="20" height="20" />

            {/* Right Block (Taller) */}
            <rect x="500" y="40" width="150" height="150" />
            <rect x="510" y="30" width="130" height="10" />
            {/* Right Windows */}
            <rect x="520" y="50" width="25" height="40" />
            <rect x="570" y="50" width="25" height="40" />
            <rect x="620" y="50" width="25" height="40" />
            <rect x="520" y="100" width="25" height="80" />
            <rect x="570" y="100" width="25" height="80" />
            <rect x="620" y="100" width="25" height="80" />
            
            {/* Far Right Block */}
            <rect x="650" y="90" width="120" height="100" />
            <rect x="660" y="80" width="100" height="10" />
            {/* Far Right Windows */}
            <rect x="670" y="100" width="30" height="30" />
            <rect x="720" y="100" width="30" height="30" />
            <rect x="670" y="145" width="30" height="35" />
            <rect x="720" y="145" width="30" height="35" />

            {/* Perspective Roof Lines */}
            <line x1="290" y1="70" x2="310" y2="55" />
            <line x1="490" y1="70" x2="510" y2="55" />
            <line x1="310" y1="55" x2="510" y2="55" />
            <line x1="510" y1="30" x2="530" y2="15" />
            <line x1="640" y1="30" x2="660" y2="15" />
            <line x1="530" y1="15" x2="660" y2="15" />
        </g>
    </svg>
);

export default CollegeBuildingOutline;
