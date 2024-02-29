"use client"

import { CellAction } from "./cell-action";
import ProfilePicture from "./profile-picture";


export const columns= [
  {
    accessorKey: "profilePicture",
    header: "Profile",
    cell: ({ row }) => <ProfilePicture source={row.original.profilePicture} />
  },
  {
    accessorKey: "userName",
    header: "Username",
  },
  {
    accessorKey: "userId",
    header: "UserId",
  },
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "verificationStatus",
    header: "Verification Status",
  },
  {
    accessorKey: "userStatus",
    header: "User Status",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];
