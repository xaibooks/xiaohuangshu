// JS placeholder for native module
export type Page = {
    index: number;
    content: string;
};

export default {
    openDocument: async (uri: string): Promise<{ totalPages: number }> => {
        // Fake open
        return { totalPages: 10 };
    },

    getPage: async (index: number): Promise<Page> => {
        // Fake content
        const text = `This is fake content for page ${index + 1}. `.repeat(30);
        return { index, content: text };
    },
};
