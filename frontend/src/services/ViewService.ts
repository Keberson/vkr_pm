import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

import {IGetViewRes} from "../types/Responses";
import {ICreateView} from "../types/IView";

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
        }),
        createView: build.mutation<void, ICreateView>({
            query: (body) => ({
                url: '/',
                method: "POST",
                body: body
            }),
            invalidatesTags: ["POST"]
        })
    })
});

export const {
    useGetViewQuery,
    useCreateViewMutation
} = viewApi;
