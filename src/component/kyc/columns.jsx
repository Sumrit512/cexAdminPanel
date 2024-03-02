"use client"

import ProfilePicture from "../users/profile-picture";
import { CellAction } from "./cell-action";

// "id": "65b2099421d44baee24e80c8",
// "userId": "user_2UhUNduDhz2i0uaVCoqKsfzsIZF",
// "userName": "sumritarora",
// "phoneNumber": null,
// "fullName": "Sumrit Arora",
// "address": null,
// "email": "sumritarora.515@gmail.com",
// "documentType": null,
// "documentUrl": null,
// "passportPicture": null,
// "profilePicture": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yVWhVTnh5UnU4VUprbklhU3N3QVRPa0YwdDUucG5nIn0",
// "verificationStatus": "INCOMPLETE",
// "userStatus": "ACTIVE",
// "isVerified": true,
// "upiId": null

export const columns= [
  {
    accessorKey: "profilePicture",
    header: "Profile",
    cell: ({ row }) => <ProfilePicture source={row.original.profilePicture} />
  },
  {
    accessorKey: "userId",
    header: "UserId",
  },
  {
    accessorKey: "userStatus",
    header: "User Status",
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
    accessorKey: "phoneNumber",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "documentType",
    header: "Type",
  },
  {
    accessorKey: "documentUrl",
    header: "Document",
  },
  {
    accessorKey: "passportPicture",
    header: "Picture",
  },
  {
    accessorKey: "upiId",
    header: "UPI ID",
  },
  {
    accessorKey: "verificationStatus",
    header: "Verification Status",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];

