"use client";
import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FAMILY_TREE_CONTEXT_VALUES } from "./constants";

export const FamilyTreeContext = createContext(FAMILY_TREE_CONTEXT_VALUES);

function FamilyTreeProvider({ children }) {
  const [familyTreeMembers, setFamilyTreeMembers] = useState(
    FAMILY_TREE_CONTEXT_VALUES.familyTreeMembers
  );

  const handleFamilyTreeMembers = useCallback((newMembers) => {
    setFamilyTreeMembers((prevMembers) => [...prevMembers, ...newMembers]);
  }, []);

  const handleDeleteFamilyMember = useCallback((memberId) => {
    setFamilyTreeMembers((prevMembers) =>
      prevMembers.filter((member) => member.id !== memberId)
    );
  }, []);

  const handleEditFamilyMember = useCallback((id, updatedData) => {
    setFamilyTreeMembers((prevMembers) => {
      return prevMembers.map((member) =>
        member.id === id ? { ...member, ...updatedData } : member
      );
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/familyMembers")
      .then((response) => response.json())
      .then((data) => {
        handleFamilyTreeMembers(data);
        console.log("called");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(familyTreeMembers);

  const memoizedContextValues = useMemo(
    () => ({
      familyTreeMembers,
      handleFamilyTreeMembers,
      handleDeleteFamilyMember,
      handleEditFamilyMember,
    }),
    [
      familyTreeMembers,
      handleFamilyTreeMembers,
      handleDeleteFamilyMember,
      handleEditFamilyMember,
    ]
  );

  return (
    <FamilyTreeContext.Provider value={memoizedContextValues}>
      {children}
    </FamilyTreeContext.Provider>
  );
}

FamilyTreeProvider.propTypes = { children: PropTypes.node.isRequired };

export default FamilyTreeProvider;
