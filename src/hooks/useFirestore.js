import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const collectionRef = query(
      collection(projectFirestore, collectionName),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const documents = [];

      snapshot.forEach((doc) => {
        documents.push({
          ...doc.data(),
          id: doc.id,
        });
      });

      setDocs(documents);
    });

    return () => {
      unsubscribe();
    };
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
