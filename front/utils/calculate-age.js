export function calculateAge(birthday) {
  return (new Date(Date.now()).getFullYear() - new Date(birthday).getFullYear())
}
