import firebase_app from '@/util/firebase'
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage(firebase_app)

export default function getFile(filename) {
    const path = `jobs/${filename}.md`
    const pathReference = ref(storage, path);

    getDownloadURL(ref(storage, pathReference))
    .then((url) => {
        console.log(url)
    })
    .catch((error) => {
        console.log(error)
    });
}