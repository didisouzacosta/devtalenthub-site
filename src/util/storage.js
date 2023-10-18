import firebase_app from '@/util/firebase'
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage(firebase_app)

async function getFile(path) {
    return await getDownloadURL(ref(storage, path))
}

export async function getJobFile(filename) {
    const path = `jobs/${filename}.md`
    return await getFile(path)
}
