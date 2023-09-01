import { getFiles, getFile } from '@/app/util/markdown.js'

export const getAll = () => getFiles('markdown/vacancies')

export const get = (slug) => getFile(slug)

export const find = () => {
    return []
}