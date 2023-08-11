"use client";
import FamilyMemberForm from "@component/components/FamilyMemberForm";
import FamilyTreeList from "@component/components/FamilyTreeList";
import FamilyTreeProvider from "@component/components/family-tree-provider";
import { Stack, Typography } from "@mui/material";

function FamilyTree() {
  return (
    <FamilyTreeProvider>
      <Stack sx={{ alignItems: "center", p: "24px" }}>
        <Typography sx={{ mb: "24px" }}>Family Tree</Typography>
        <FamilyTreeList />
        <FamilyMemberForm />
      </Stack>
    </FamilyTreeProvider>
  );
}

export default FamilyTree;
