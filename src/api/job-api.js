import { getFiles, getFile } from '@/util/markdown.js'

const folder = 'markdown/jobs'

export const get = (slug) => getFile(slug, folder)

export const getAllJobs = () => getFiles(folder)
.filter((job) => job.frontmatter.isPublished === true)
.sort((current, next) => next.birthtime - current.birthtime)
.sort((current, next) => {
    const currentIsFeatured = current.frontmatter?.isFeatured ?? false
    const nextIsFeatured = next.frontmatter?.isFeatured ?? false
    return nextIsFeatured - currentIsFeatured
})

export const getAllLevels = () => {
    const levels = getAllJobs()
        .map((job) => job.frontmatter?.levels ?? [])
        .reduce((acumulated, current) => acumulated.concat(current), []) 
    return [... new Set(levels)]
}

export const getAllLanguages = () => {
    const languages = getAllJobs()
        .map((job) => job.frontmatter?.languages ?? [])
        .reduce((acumulated, current) => acumulated.concat(current), []) 
    return [... new Set(languages)]
}

export const getAllCompanies = () => {
    const jobs = getAllJobs()
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

export const find = ({ searchParams }) => {
    return getAllJobs()
    .filter((job) => {
        const frontmatter = job.frontmatter
        const containsCompany = frontmatter?.company?.toLowerCase() == searchParams.company?.toLowerCase() ?? false
        const containsLanguage = frontmatter?.languages?.map((language) => language.toLowerCase()).includes(searchParams.language) ?? false
        const containsLevel = frontmatter?.levels?.map((level) => level.toLowerCase()).includes(searchParams.level) ?? false
        const contains = containsCompany || containsLanguage || containsLevel

        return contains ? job : null
    })
}