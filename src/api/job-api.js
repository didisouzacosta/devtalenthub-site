import firebase_app from '@/util/firebase'
import { getFirestore, query, where, collection, getDocs } from 'firebase/firestore/lite'

const db = getFirestore(firebase_app)

export async function getAllJobs() {
    const jobsCol = collection(db, 'jobs')
    const jobSnapshot = await getDocs(jobsCol)
    return jobSnapshot.docs.map(doc => doc.data())
}

export async function getJobBySlug(slug) {
    const q = query(collection(db, 'jobs'), where('slug', '==', slug)) 
    const querySnapshot = await getDocs(q)
    const data = querySnapshot.docs.map(doc => doc.data())
    return data[0]
}