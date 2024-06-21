import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

import {IGetActivitiesRes, IGetProjectsRes, IGetTreeRes, IGetViewRes, IGetWBSChildsRes, IGetWBSRes} from "../types/Responses";
import {ICreateWBSReq, IEditActivityReq, IEditWBSReq, IGetTreeReq} from "../types/Requests";
import {ICreateView} from "../types/IView";
import {IActivity, ICreateActivity} from "../types/IActivity";
import {ICreateProject} from "../types/IProject";

export const api = createApi({
    reducerPath: 'wbsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/",
        credentials: "same-origin",
        prepareHeaders(headers) {
            return headers.set("Authorization", `Bearer ${localStorage.getItem("jwt")}`)
        }
    }),
    tagTypes: ["WBS", "Tree", "Activity", "View", "Project"],
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
        editWBS: build.mutation<void, IEditWBSReq>({
            query: (body) => ({
                url: `wbs/${body.id}`,
                method: "PUT",
                body: body
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
        editActivity: build.mutation<void, IEditActivityReq>({
            query: (body) => ({
                url: `activity/${body.activity.id}`,
                method: "PUT",
                body: body
            }),
            invalidatesTags: () => ["Activity", "Tree", "WBS", "Project"]
        }),
        editStatusActivity: build.mutation<void, IActivity>({
            query: (body) => ({
                url: `status/${body.id}`,
                method: "PUT",
                body: body
            }),
            invalidatesTags: () => []
        }),
        // Tree
        getTree: build.query<IGetTreeRes, IGetTreeReq>({
            query: ({project, view}) => ({
                url: `tree/${project}?view=${view}`
            }),
            providesTags: ["Tree"]
        }),

        // Project
        getProjects: build.query<IGetProjectsRes, void>({
            query: () => ({
                url: `project/`
            }),
            providesTags: ["Project"]
        }),
        createProject: build.mutation<void, ICreateProject>({
            query: (body) => ({
                url: "project/",
                method: "POST",
                body: body
            }),
            invalidatesTags: () => ["Project"]
        }),
    })
});

export const {
    useGetWBSQuery, useGetWBSChildsQuery, useCreateWBSMutation, useDeleteWBSMutation, useEditWBSMutation,
    useCreateViewMutation, useGetViewQuery,
    useCreateActivityMutation, useGetActivitiesQuery, useDeleteActivityMutation, useEditStatusActivityMutation, useEditActivityMutation,
    useGetTreeQuery,
    useGetProjectsQuery, useCreateProjectMutation
} = api;
