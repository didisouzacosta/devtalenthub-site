import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getPath = (folder) => {
    return path.join(process.cwd(), `/${folder}`);
}

export const getFileContent = (filename, folder) => {
    const POSTS_PATH = getPath(folder)
    return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};

export const getAll = (folder) => {
    const POSTS_PATH = getPath(folder)

    return fs
        .readdirSync(POSTS_PATH)
        .filter((path) => /\\.md?$/.test(path))
        .map((fileName) => {
            const source = getFileContent(fileName, folder);
            const slug = fileName.replace(/\\.md?$/, "");
            const { data } = matter(source);

            return {
                frontmatter: data,
                slug: slug,
            };
        });
};