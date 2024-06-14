import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {IGetTreeRes} from "../types/Responses";
import {IGetTreeReq} from "../types/Requests";

export const treeApi = createApi({
    reducerPath: 'treeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/tree",
        credentials: "same-origin"
    }),
    tagTypes: ["POST"],
    endpoints: (build) => ({
        getTree: build.query<IGetTreeRes, IGetTreeReq>({
            query: ({project, view}) => ({
                url: `/${project}?view=${view}`
            }),
            providesTags: ["POST"]
        })
    })
});

export const {
    useGetTreeQuery
} = treeApi;
