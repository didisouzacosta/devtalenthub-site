import { getFiles, getFile } from '@/app/util/markdown.js'

const folder = 'markdown/vacancies'

export const getAll = () => getFiles(folder)

export const getAllPublished = () => getAll().filter((vancancy) => vancancy.frontmatter.isPublished === true)

export const getAllFeatured = () => getAllPublished().filter((vancancy) => vancancy.frontmatter.isFeatured == true)
export const getAllLatest = () => getAllPublished().filter((vancancy) => vancancy.frontmatter.isFeatured == (false || null))

export const get = (slug) => getFile(slug, folder)

export const find = () => {
    return []
}