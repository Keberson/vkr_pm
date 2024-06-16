import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

import {ILogin} from "../types/ILogin";
import {ILoginRes} from "../types/Responses";

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/auth",
        credentials: "same-origin"
    }),
    endpoints: (build) => ({
        login: build.mutation<ILoginRes, ILogin>({
            query: (body) => ({
                url: "/",
                method: "POST",
                body: body
            })
        })
    })
})

export const {
    useLoginMutation
} = loginApi;

