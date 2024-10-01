import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:4000/"
    }),
    tagTypes:["Users"],
    endpoints:(builder)=>({

        register:builder.mutation({
            query:(data)=>({
                url:"userRegister",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Users"]
        }),

        getalluser :builder.query({
            query:()=>({
                url:"allusers",
                method:"GET"
            }),
            providesTags:(result) => ["Users"]
        }),

        singleuser :builder.query({
            query:(id)=>({
                url:`user/${id}`,
                method:"GET"
            }),
            providesTags:["Users"]
        }),

        deleteuser:builder.mutation({
            query:(id)=>({
                url:`/user/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Users"]
        })
    })
})

export const {useRegisterMutation,useGetalluserQuery,useSingleuserQuery,useDeleteuserMutation} =userApi;