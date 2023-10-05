import firebase_app from '@/util/firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const db = getFirestore(firebase_app)

export async function getAllJobs() {
    const jobsCol = collection(db, 'jobs')
    const jobSnapshot = await getDocs(jobsCol)
    return jobSnapshot.docs.map(doc => doc.data())
}