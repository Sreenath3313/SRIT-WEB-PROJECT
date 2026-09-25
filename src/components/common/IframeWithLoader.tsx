import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface IframeWithLoaderProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {}

const IframeWithLoader: React.FC<IframeWithLoaderProps> = ({ className, style, ...props }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative w-full ${className}`} style={{ ...style, position: 'relative' }}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                    <Loader2 className="w-8 h-8 text-[#FF5422] animate-spin" />
                </div>
            )}
            <iframe
                onLoad={() => setIsLoading(false)}
                className="w-full h-full border-0 relative z-0"
                style={{ border: 'none', display: 'block', width: '100%', height: '100%' }}
                {...props}
            />
        </div>
    );
};

export default IframeWithLoader;
