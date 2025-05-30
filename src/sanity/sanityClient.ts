import { createClient } from '@sanity/client'
console.log(import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID, import.meta.env.VITE_REACT_APP_SANITY_DB)

const sanityClient = createClient({
    projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_REACT_APP_SANITY_DB,
    useCdn: true,
    apiVersion: '2023-01-01',
});

export default sanityClient