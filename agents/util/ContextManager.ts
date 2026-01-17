// /packages/core/util/ContextManager.ts
// VPD CORE: Manages Context for Snippet-Based Prompting

/**
 * Mocks a Context Manager that drastically reduces prompt size.
 * In a real system, this would use AST parsing or embeddings to get the *exact* * relevant function. For simple implementation, we return a small part of the file.
 * This is the 80%+ token cost reduction layer.
 */
export class ContextManager {
    /**
     * Extracts a contextually relevant snippet (e.g., 20 lines) from the full content.
     */
    static getSnippet(fullContent: string, instruction: string): string {
        const lines = fullContent.split('\n');
        
        // Find the line index where the instruction context might be
        // (A more advanced system would search for function names or lines near a diff)
        let startIndex = 0;
        if (lines.length > 50) {
            // For large files, just grab the first 50 lines as a starting point 
            // to show the file's structure without maxing out tokens.
            startIndex = 0;
        } else {
            // If the file is small, return the whole thing.
            return fullContent;
        }

        const endIndex = Math.min(startIndex + 50, lines.length);
        const snippet = lines.slice(startIndex, endIndex).join('\n');

        // Add an ellipsis if the file was truncated
        return lines.length > 50 ? `${snippet}\n... (TRUNCATED FOR VPD)` : snippet;
    }
}