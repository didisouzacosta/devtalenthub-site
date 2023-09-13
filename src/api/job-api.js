import { getFiles, getFile } from '@/app/util/markdown.js'

const folder = 'markdown/jobs'

export const get = (slug) => getFile(slug, folder)
export const getAll = () => getFiles(folder)

export const getAllPublished = () => getAll()
.filter((job) => job.frontmatter.isPublished === true)
.sort((current, next) => next.birthtime - current.birthtime)
.sort((current, next) => {
    const currentIsFeatured = current.frontmatter?.isFeatured ?? false
    const nextIsFeatured = next.frontmatter?.isFeatured ?? false
    return nextIsFeatured - currentIsFeatured
})

export const getAllFeatured = () => getAllPublished().filter((job) => job.frontmatter.isFeatured == true)
export const getAllLatest = () => getAllPublished().filter((job) => job.frontmatter.isFeatured !== true)

export const getAllLevels = () => {
    const levels = getAllPublished()
        .map((job) => job.frontmatter?.levels ?? [])
        .reduce((acumulated, current) => acumulated.concat(current), []) 
    const uniqueValues = [... new Set(levels)]
    return uniqueValues.map((level) => { 
        return { queryString: level.toLowerCase(), value: level } 
    })
}

export const getAllLanguages = () => {
    const languages = getAllPublished()
        .map((job) => job.frontmatter?.languages ?? [])
        .reduce((acumulated, current) => acumulated.concat(current), []) 
    const uniqueValues = [... new Set(languages)]
    return uniqueValues.map((language) => { 
        return { queryString: language.toLowerCase(), value: language } 
    })
}

export const getAllCompanies = () => {
    const jobs = getAllPublished()
    const companies = jobs.reduce((acumulated, current) => {
        const company = current.frontmatter?.company
        const contains = acumulated.some((job) => job.frontmatter?.company?.toLowerCase() === company?.toLowerCase())

        if (!contains) {
            acumulated.push(current)
        }

        return acumulated
    }, [])

    const formatedCompanies = companies.map((job) => {
        const frontmatter = job.frontmatter
        return { 
            name: frontmatter?.company, 
            brand: frontmatter?.brand 
        }
    })

    return formatedCompanies
}

export const getFeaturedCompanies = (limit = 7) => getAllCompanies().splice(0, limit)

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