import { useQuery, gql } from "@apollo/client";



const GET_ASSETS = gql`
    query asalist {
        asalist {
        results {
            assetId
            available
            logo
            name
        }
        }
    }

`
export default function useFetch () {
    const {data, error, loading} = useQuery(GET_ASSETS)


    return{
        data,
        error,
        loading
    }
}


