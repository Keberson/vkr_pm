import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {ICreateWBS} from "../types/IWBS";
import {IGetWBSRes} from "../types/Responses";

export const wbsApi = createApi({
    reducerPath: 'wbsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/wbs",
        credentials: "same-origin"
    }),
    tagTypes: ["POST"],
    endpoints: (build) => ({
        getWBS: build.query<IGetWBSRes, number>({
            query: (projectID) => ({
                url: `/${projectID}`
            }),
            providesTags: ["POST"]
        }),
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
    useGetWBSQuery,
    useCreateWBSMutation
} = wbsApi;
