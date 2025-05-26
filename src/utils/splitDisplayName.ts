function splitDisplayName(displayName: string): {
  firstName: string;
  lastName: string;
} {
  const parts = displayName.trim().split(/\s+/);

  if (parts.length === 0) {
    return { firstName: "", lastName: "" };
  }

  const firstName = parts[0];
  const lastName = parts.length > 1 ? parts.slice(1).join(" ") : "";

  return { firstName, lastName };
}

export default splitDisplayName;
