import { Stack } from "@mui/material";
import { useContext } from "react";
import { FamilyTreeContext } from "./family-tree-provider";
import FamilyMemberCard from "./FamilyMemberCard.jsx";

function FamilyTreeList() {
  const { familyTreeMembers } = useContext(FamilyTreeContext);
  console.log(familyTreeMembers);

  return (
    familyTreeMembers && (
      <Stack spacing={2}>
        {familyTreeMembers.map((member) => (
          <FamilyMemberCard key={member.id} data={member} />
        ))}
      </Stack>
    )
  );
}

export default FamilyTreeList;
