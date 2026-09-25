import React from 'react';
import IframeWithLoader from './IframeWithLoader';

interface ContentRendererProps {
    content: string | React.ReactNode;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
    if (typeof content !== 'string') {
        return <>{content}</>;
    }

    const iframeRegex = /<iframe[^>]*src="([^"]+)"[^>]*>/gi;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = iframeRegex.exec(content)) !== null) {
        if (match.index > lastIndex) {
            parts.push(
                <div key={`html-${lastIndex}`} dangerouslySetInnerHTML={{ __html: content.substring(lastIndex, match.index) }} />
            );
        }
        
        const styleMatch = match[0].match(/style="([^"]+)"/);
        let customStyle: React.CSSProperties = { width: '100%', minHeight: '500px' };
        
        if (styleMatch) {
            const heightMatch = styleMatch[1].match(/height:\s*([^;]+)/);
            if (heightMatch) customStyle.height = heightMatch[1].trim();
        }

        parts.push(
            <IframeWithLoader key={`iframe-${match.index}`} src={match[1]} style={customStyle} />
        );

        const closingTagIndex = content.indexOf('</iframe>', match.index);
        lastIndex = closingTagIndex !== -1 ? closingTagIndex + 9 : match.index + match[0].length;
    }

    if (lastIndex < content.length) {
        parts.push(
            <div key={`html-${lastIndex}`} dangerouslySetInnerHTML={{ __html: content.substring(lastIndex) }} />
        );
    }

    // If no iframes were found, just render the whole string
    if (parts.length === 1 && lastIndex === 0) {
        return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }

    return <div className="w-full flex flex-col gap-4">{parts}</div>;
};

export default ContentRenderer;
