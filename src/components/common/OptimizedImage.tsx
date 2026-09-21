import type { ImgHTMLAttributes } from 'react';

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    webpSrc?: string;
    eager?: boolean;
};

function OptimizedImage({
    src,
    alt,
    webpSrc,
    eager = false,
    loading,
    decoding,
    fetchPriority,
    className,
    style,
    ...rest
}: OptimizedImageProps) {
    const resolvedLoading = loading ?? (eager ? 'eager' : 'lazy');
    const resolvedDecoding = decoding ?? 'async';
    const resolvedFetchPriority = fetchPriority ?? (eager ? 'high' : 'auto');

    if (webpSrc) {
        return (
            // <picture> is inline by default — force it to block so className
            // (e.g. "absolute inset-0 w-full h-full") applies correctly.
            // Visual styles (filter, transition) live on the <img> itself.
            <picture className={className} style={{ display: 'block' }}>
                <source srcSet={webpSrc} type="image/webp" />
                <img
                    src={src}
                    alt={alt}
                    loading={resolvedLoading}
                    decoding={resolvedDecoding}
                    fetchPriority={resolvedFetchPriority}
                    className="w-full h-full object-cover"
                    style={style}
                    {...rest}
                />
            </picture>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            loading={resolvedLoading}
            decoding={resolvedDecoding}
            fetchPriority={resolvedFetchPriority}
            className={className}
            style={style}
            {...rest}
        />
    );
}

export default OptimizedImage;
