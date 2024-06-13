import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {IGetTreeRes, IGetWBSRes} from "../types/Responses";

export const treeApi = createApi({
    reducerPath: 'treeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/tree",
        credentials: "same-origin"
    }),
    tagTypes: ["POST"],
    endpoints: (build) => ({
        getTree: build.query<IGetTreeRes, number>({
            query: (projectID) => ({
                url: `/${projectID}`
            }),
            providesTags: ["POST"]
        })
    })
});

export const {
    useGetTreeQuery
} = treeApi;
