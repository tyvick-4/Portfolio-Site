import React from 'react';

const JsonLdBlock = ({ code }) => {
    // A very basic custom syntax highlighter for JSON-LD to avoid external dependencies
    const highlightJson = (jsonString) => {
        // Basic regex to find strings, numbers, booleans, and keys in JSON
        const stringRegex = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;

        return jsonString.replace(stringRegex, (match) => {
            let color = 'white'; // default
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    color = 'var(--text-secondary)'; // keys
                } else {
                    color = 'var(--accent-green)'; // string values
                }
            } else if (/true|false/.test(match)) {
                color = 'var(--accent-blurple)'; // booleans
            } else if (/[0-9]/.test(match)) {
                color = 'var(--accent-yellow)'; // numbers
            }
            return `<span style="color: ${color}">${match}</span>`;
        });
    };

    const highlightedHtml = highlightJson(code);

    return (
        <pre style={{
            backgroundColor: 'var(--bg-tertiary)',
            padding: '16px',
            borderRadius: '8px',
            overflowX: 'auto',
            margin: 0,
            fontSize: '13px',
            fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
            lineHeight: '1.5',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-subtle)',
        }}>
            <code dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
        </pre>
    );
};

export default JsonLdBlock;
