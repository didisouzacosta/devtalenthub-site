import firebase_app from '@/util/firebase'
import { getFirestore, query, where, collection, getDocs } from 'firebase/firestore/lite'

const database = getFirestore(firebase_app)

export async function getLevels() {
    const jobs = await getAllJobs()
    const levels = jobs.flatMap((job) => job.levels).reduce((accumulator, current) => {
        if (accumulator.includes(current)) return
        accumulator.push(current)
        return accumulator 
    }, [])
    return levels
}

export async function getLanguages() {
    const jobs = await getAllJobs()
    const languages = jobs.flatMap((job) => job.languages).reduce((accumulator, current) => {
        if (accumulator.includes(current)) return
        accumulator.push(current)
        return accumulator 
    }, [])
    return languages
}

export async function findJobs(params) {
    const c = collection(database, 'jobs')
    const q = query(c, 
        where("isRemote", "==", params?.onlyRemote === 'true'),
        where("languages", "array-contains", 'iOS'),
        // where("levels", "array-contains", 'Senior')
    )
    const snapshot = await getDocs(q)

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