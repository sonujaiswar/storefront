function splitDisplayName(displayName: string): {
  first_name: string;
  last_name: string;
} {
  const parts = displayName.trim().split(/\s+/);

  if (parts.length === 0) {
    return { first_name: "", last_name: "" };
  }

  const first_name = parts[0];
  const last_name = parts.length > 1 ? parts.slice(1).join(" ") : "";

  return { first_name, last_name };
}

export default splitDisplayName;
