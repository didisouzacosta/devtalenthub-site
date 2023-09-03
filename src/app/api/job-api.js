import { getFiles, getFile } from '@/app/util/markdown.js'

const folder = 'markdown/jobs'

export const get = (slug) => getFile(slug, folder)
export const getAll = () => getFiles(folder)
export const getAllPublished = () => getAll().filter((job) => job.frontmatter.isPublished === true)
export const getAllFeatured = () => getAllPublished().filter((job) => job.frontmatter.isFeatured == true)
export const getAllLatest = () => getAllPublished().filter((job) => job.frontmatter.isFeatured !== true)

export const getAllLevels = () => {
    const levels = getAll()
        .map((job) => job.frontmatter?.levels ?? [])
        .reduce((acumulated, current) => acumulated.concat(current), []) 
    const uniqueValues = [... new Set(levels)]
    return uniqueValues.map((level) => { 
        return { queryString: level.toLowerCase(), value: level } 
    })
}

export const getAllLanguages = () => {
    const languages = getAll()
        .map((job) => job.frontmatter?.languages ?? [])
        .reduce((acumulated, current) => acumulated.concat(current), []) 
    const uniqueValues = [... new Set(languages)]
    return uniqueValues.map((language) => { 
        return { queryString: language.toLowerCase(), value: language } 
    })
}

export const getAllCompanies = () => {
    const languages = getAll()
        .map((job) => job.frontmatter?.languages ?? [])
        .reduce((acumulated, current) => acumulated.concat(current), []) 
    const uniqueValues = [... new Set(languages)]
    return uniqueValues.map((language) => { 
        return { queryString: language.toLowerCase(), value: language } 
    })
}

export const find = () => {
    return []
}