import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

import {IGetViewRes} from "../types/Responses";

export const viewApi = createApi({
    reducerPath: 'viewApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/view",
        credentials: "same-origin"
    }),
    tagTypes: ["POST"],
    endpoints: (build) => ({
        getView: build.query<IGetViewRes, number>({
            query: (projectID) => ({
                url: `/${projectID}`
            }),
            providesTags: ["POST"]
        })
    })
});

export const {
    useGetViewQuery
} = viewApi;
