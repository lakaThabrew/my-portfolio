const fs = require('fs');

function extractArray(content, arrayName) {
    const regex = new RegExp(`const ${arrayName} = \\s*\\[([\\s\\S]*?)\\];\\s*(?:const|export)`);
    const match = content.match(regex);
    if (!match) {
        // try fallback for export const
        const regex2 = new RegExp(`export const ${arrayName} = \\s*\\[([\\s\\S]*?)\\];`);
        const match2 = content.match(regex2);
        return match2 ? match2[0] : null;
    }
    return match ? `const ${arrayName} = [` + match[1] + `];` : null;
}

// We will just read the files and rewrite them nicely.
