import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPath = (folder) => {
    return path.join(process.cwd(), `public/${folder}`);
}

export const getFile = (filename, folder) => {
    const slug = filename.replace('.md', '');
    const folderPath = getPath(folder)
    const filePath = `${folderPath}/${slug}.md`
    const readFile = fs.readFileSync(filePath, 'utf-8')
    const { birthtime } = fs.statSync(filePath)
    const { data: frontmatter, content } = matter(readFile)
    
    return { slug, frontmatter, content, birthtime }
};

export const getFiles = (folder) => {
    const path = getPath(folder)
    const files = fs.readdirSync(path);
    return files.map((filename) => getFile(filename, folder))
};