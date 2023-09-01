import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPath = (folder) => {
    return path.join(process.cwd(), `public/${folder}/`);
}

export const getFile = (filename, folder) => {
    const slug = filename.replace('.md', '');
    const path = getPath(folder)
    const readFile = fs.readFileSync(`${path}/${slug}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)
    
    return { slug, frontmatter }
};

export const getFiles = (folder) => {
    const path = getPath(folder)
    const files = fs.readdirSync(path);
    const items = files.map((filename) => {
        return getFile(filename, folder)
    });

    return items
};