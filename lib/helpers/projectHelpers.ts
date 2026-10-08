/* =========================================================
   HELPERS
========================================================= */

function getProjectInitials(name: string) {
  const words = name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 1) {
    return words[0].slice(0, 2);
  }

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

function formatProjectType(type: string) {
  switch (type) {
    case "fullstack":
      return "Full Stack";

    case "backend":
      return "Backend";

    case "mobile":
      return "Mobile";

    case "automation":
      return "Automation";

    case "experiment":
      return "Experiment";

    case "frontend":
    default:
      return "Frontend";
  }
}

export { getProjectInitials, formatProjectType };