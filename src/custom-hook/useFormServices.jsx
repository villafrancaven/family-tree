import { FamilyTreeContext } from "@component/components/family-tree-provider";
import { useContext } from "react";

function useFormServices() {
  const {
    handleFamilyTreeMembers,
    handleDeleteFamilyMember,
    handleEditFamilyMember,
  } = useContext(FamilyTreeContext);

  const handleAddMember = (newMember) => {
    fetch("http://localhost:3001/familyMembers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMember),
    })
      .then((response) => response.json())
      .then((data) => handleFamilyTreeMembers([data]));
  };

  const handleDeleteMember = (id) => {
    fetch(`http://localhost:3001/familyMembers/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        handleDeleteFamilyMember(id);
      })
      .catch((error) => {
        console.error("Error deleting member:", error);
      });
  };

  const handleEditMember = (id, updatedData) => {
    fetch(`http://localhost:3001/familyMembers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then(() => {
        handleEditFamilyMember(id, updatedData);
      })
      .catch((error) => {
        console.error("Error deleting member:", error);
      });
  };

  return {
    handleAddMember,
    handleDeleteMember,
    handleEditMember,
  };
}

export default useFormServices;
