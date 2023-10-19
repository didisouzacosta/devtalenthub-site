import firebase_app from '@/util/firebase'
import { getFirestore, query, where, collection, getDocs, orderBy, limit } from 'firebase/firestore/lite'

const database = getFirestore(firebase_app)

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
        where("isRemote", "==", onlyRemote === 'true'),
        limit(20)
    ]
        
    if (language && language != 'all') queryConstraints.push(where("languages", "array-contains", language))
    if (level && level != 'all') queryConstraints.push(where("level", "==", level))

    console.log(queryConstraints)

    const q = query(c, ...queryConstraints)
    const snapshot = await getDocs(q)

    if (snapshot.empty) return []

    return snapshot.docs.map(doc => doc.data())
}

export async function getAllJobs() {
    const c = collection(database, 'jobs')
    const snapshot = await getDocs(c)
    return snapshot.docs.map(doc => doc.data())
}

export async function getJobBySlug(slug) {
    const c = collection(database, 'jobs')
    const q = query(c, where('slug', '==', slug)) 
    const snapshot = await getDocs(q)
    const data = snapshot.docs.map(doc => doc.data())
    return data[0]
}