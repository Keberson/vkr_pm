import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {ICreateWBS} from "../types/IWBS";

export const wbsApi = createApi({
    reducerPath: 'wbsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/wbs",
        credentials: "same-origin"
    }),
    tagTypes: ["POST"],
    endpoints: (build) => ({
        createWBS: build.mutation<void, ICreateWBS>({
            query: (body) => ({
                url: "/",
                method: "POST",
                body: body
            }),
            invalidatesTags: () => ["POST"]
        })
    })
});

export const {
    useCreateWBSMutation
} = wbsApi;
