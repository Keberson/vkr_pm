import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

import {IGetActivitiesRes, IGetTreeRes, IGetViewRes, IGetWBSChildsRes, IGetWBSRes} from "../types/Responses";
import {ICreateWBSReq, IGetTreeReq} from "../types/Requests";
import {ICreateView} from "../types/IView";
import {ICreateActivity} from "../types/IActivity";

export const api = createApi({
    reducerPath: 'wbsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/",
        credentials: "same-origin"
    }),
    tagTypes: ["WBS", "Tree", "Activity", "View"],
    endpoints: (build) => ({
        // WBS
        getWBS: build.query<IGetWBSRes, number>({
            query: (projectID) => ({
                url: `wbs?project=${projectID}`
            }),
            providesTags: ["WBS"]
        }),
        getWBSChilds: build.query<IGetWBSChildsRes, number>({
            query: (wbs) => ({
                url: `wbs?wbs=${wbs}`
            }),
            providesTags: ["WBS"]
        }),
        createWBS: build.mutation<void, ICreateWBSReq>({
            query: (body) => ({
                url: "wbs/",
                method: "POST",
                body: body
            }),
            invalidatesTags: () => ["WBS", "Tree"]
        }),
        deleteWBS: build.mutation<void, number>({
            query: (wbs) => ({
                url: `wbs/${wbs}`,
                method: "DELETE"
            }),
            invalidatesTags: () => ["WBS", "Tree"]
        }),
        // View
        getView: build.query<IGetViewRes, number>({
            query: (projectID) => ({
                url: `view/${projectID}`
            }),
            providesTags: ["View"]
        }),
        createView: build.mutation<void, ICreateView>({
            query: (body) => ({
                url: 'view/',
                method: "POST",
                body: body
            }),
            invalidatesTags: ["View"]
        }),
        // Activity
        getActivities: build.query<IGetActivitiesRes, number>({
            query: (projectID) => ({
                url: `activity/${projectID}`,
            }),
            providesTags: ["Activity"]
        }),
        createActivity: build.mutation<void, ICreateActivity>({
            query: (body) => ({
                url: "activity/",
                method: "POST",
                body: body
            }),
            invalidatesTags: () => ["Activity", "Tree"]
        }),
        deleteActivity: build.mutation<void, number>({
            query: (activity) => ({
                url: `activity/${activity}`,
                method: "DELETE"
            }),
            invalidatesTags: () => ["Activity", "Tree"]
        }),
        // Tree
        getTree: build.query<IGetTreeRes, IGetTreeReq>({
            query: ({project, view}) => ({
                url: `tree/${project}?view=${view}`
            }),
            providesTags: ["Tree"]
        }),
    })
});

export const {
    useGetWBSQuery, useGetWBSChildsQuery, useCreateWBSMutation, useDeleteWBSMutation,
    useCreateViewMutation, useGetViewQuery,
    useCreateActivityMutation, useGetActivitiesQuery, useDeleteActivityMutation,
    useGetTreeQuery
} = api;
