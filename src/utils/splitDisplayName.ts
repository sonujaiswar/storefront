function splitDisplayName(displayName: string): {
  firstname: string;
  lastname: string;
} {
  const parts = displayName.trim().split(/\s+/);

  if (parts.length === 0) {
    return { firstname: "", lastname: "" };
  }

  const firstname = parts[0];
  const lastname = parts.length > 1 ? parts.slice(1).join(" ") : "";

  return { firstname, lastname };
}

export default splitDisplayName;
