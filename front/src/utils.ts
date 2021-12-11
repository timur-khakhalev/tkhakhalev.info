export function calculateAge(birthday: string) {
    return (new Date(Date.now()).getFullYear() - new Date(birthday).getFullYear())
}