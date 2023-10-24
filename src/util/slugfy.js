function slugify(str) {
    return String(str)
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
}

export function jobSlugfy(values) {
    const {title, company, level, languages, salary, isRemote} = values
    const components = [
        title,
        company,
        level,
        languages?.join('-'),
        salary,
        isRemote ? 'remote' : ''
    ].join(' ')

    let slug = slugify(components)

    let uniqueValues = [...new Set(slug.split('-'))].join('-')

    return uniqueValues
}