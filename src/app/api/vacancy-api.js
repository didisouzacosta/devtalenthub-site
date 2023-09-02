import { getFiles, getFile } from '@/app/util/markdown.js'

const folder = 'markdown/vacancies'

export const get = (slug) => getFile(slug, folder)
export const getAll = () => getFiles(folder)
export const getAllPublished = () => getAll().filter((vancancy) => vancancy.frontmatter.isPublished === true)
export const getAllFeatured = () => getAllPublished().filter((vancancy) => vancancy.frontmatter.isFeatured == true)
export const getAllLatest = () => getAllPublished().filter((vancancy) => vancancy.frontmatter.isFeatured !== true)

export const getAllLevels = () => {
    const levels = getAll()
        .map((vacancy) => vacancy.frontmatter?.levels ?? [])
        .reduce((acumulated, current) => acumulated.concat(current), []) 
    const uniqueValues = [... new Set(levels)]
    return uniqueValues.map((level) => { 
        return { queryString: level.toLowerCase(), value: level } 
    })
}

export const getAllLanguages = () => {
    const languages = getAll()
        .map((vacancy) => vacancy.frontmatter?.languages ?? [])
        .reduce((acumulated, current) => acumulated.concat(current), []) 
    const uniqueValues = [... new Set(languages)]
    return uniqueValues.map((language) => { 
        return { queryString: language.toLowerCase(), value: language } 
    })
}

export const find = () => {
    return []
}