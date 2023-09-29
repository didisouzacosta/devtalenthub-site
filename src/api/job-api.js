import { getFiles, getFile } from '@/util/markdown.js'

const folder = 'markdown/jobs'

export const get = (slug) => getFile(slug, folder)

export const getAll = () => getFiles(folder)
.filter((job) => job.frontmatter.isPublished === true)
.sort((current, next) => next.birthtime - current.birthtime)
.sort((current, next) => {
    const currentIsFeatured = current.frontmatter?.isFeatured ?? false
    const nextIsFeatured = next.frontmatter?.isFeatured ?? false
    return nextIsFeatured - currentIsFeatured
})

export const find = ({ searchParams }) => {
    return getAllPublished()
    .filter((job) => {
        const frontmatter = job.frontmatter
        const containsCompany = frontmatter?.company?.toLowerCase() == searchParams.company?.toLowerCase() ?? false
        const containsLanguage = frontmatter?.languages?.map((language) => language.toLowerCase()).includes(searchParams.language) ?? false
        const containsLevel = frontmatter?.levels?.map((level) => level.toLowerCase()).includes(searchParams.level) ?? false
        const contains = containsCompany || containsLanguage || containsLevel

        return contains ? job : null
    })
}