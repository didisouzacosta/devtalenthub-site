import { getFiles, getFile } from '@/app/util/markdown.js'

const folder = 'markdown/vacancies'

export const getAll = () => getFiles(folder)

export const get = (slug) => getFile(slug, folder)

export const find = () => {
    return []
}