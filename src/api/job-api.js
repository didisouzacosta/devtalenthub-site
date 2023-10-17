import firebase_app from '@/util/firebase'
import { getFirestore, query, where, collection, getDocs } from 'firebase/firestore/lite'

const database = getFirestore(firebase_app)

export async function getAllJobs() {
    const jobsCollection = collection(database, 'jobs')
    const jobsSnapshot = await getDocs(jobsCollection)
    return jobsSnapshot.docs.map(doc => doc.data())
}

export async function getJobBySlug(slug) {
    const q = query(collection(database, 'jobs'), where('slug', '==', slug)) 
    const querySnapshot = await getDocs(q)
    const data = querySnapshot.docs.map(doc => doc.data())
    return data[0]
}