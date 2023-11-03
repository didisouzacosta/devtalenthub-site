import { summarize } from '@/util/ai'
import firebase_app from '@/util/firebase'
import { getFirestore, query, where, collection, getDocs, doc, addDoc } from 'firebase/firestore/lite'

const database = getFirestore(firebase_app)

function parseDocuments(docs) {
    return docs?.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
}

export async function getLevels() {
    const jobs = await getAllJobs()
    const levels = jobs.map((job) => job.level).reduce((accumulator, current) => {
        if (!accumulator.includes(current)) accumulator.push(current)
        return accumulator
    }, [])
    return levels
}

export async function getLanguages() {
    const jobs = await getAllJobs()
    const languages = jobs.flatMap((job) => job.languages).reduce((accumulator, current) => {
        if (!accumulator.includes(current)) accumulator.push(current)
        return accumulator
    }, [])
    return languages
}

export async function searchJobs(params) {
    const { level, language, onlyRemote } = params
    const c = collection(database, 'jobs')
    const queryConstraints = [
        where("isRemote", "==", (onlyRemote ?? 'true') === 'true')
    ]

    if (language && language != 'all') queryConstraints.push(where("languages", "array-contains", language))
    if (level && level != 'all') queryConstraints.push(where("level", "==", level))

    const q = query(c, ...queryConstraints)
    const snapshot = await getDocs(q)

    if (snapshot.empty) return []

    return parseDocuments(snapshot.docs)
}

export async function getAllJobs() {
    const c = collection(database, 'jobs')
    const snapshot = await getDocs(c)
    return parseDocuments(snapshot.docs)
}

export async function getJobBySlug(slug) {
    const c = collection(database, 'jobs')
    const q = query(c, where('slug', '==', slug))
    const snapshot = await getDocs(q)
    const data = parseDocuments(snapshot.docs)
    return data[0]
}

export async function saveJob(job) {
    const c = collection(database, 'jobs')
    const summaries = await summarize(job.description ?? "")
    job.summary = summaries[0]
    return await addDoc(c, job)
}