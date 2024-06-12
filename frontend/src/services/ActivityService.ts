import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {ICreateActivity} from "../types/IActivity";

export const activityApi = createApi({
    reducerPath: 'activityApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/activity",
        credentials: "same-origin"
    }),
    tagTypes: ["POST"],
    endpoints: (build) => ({
        createActivity: build.mutation<void, ICreateActivity>({
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
    useCreateActivityMutation
} = activityApi;
