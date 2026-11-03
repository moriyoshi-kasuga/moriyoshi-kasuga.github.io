export function formatDate(date: Date): string {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

export function calcAge(birthday: Date, now: Date = new Date()): number {
  const age = now.getFullYear() - birthday.getFullYear();
  const hadBirthday =
    now.getMonth() > birthday.getMonth() ||
    (now.getMonth() === birthday.getMonth() &&
      now.getDate() >= birthday.getDate());
  return hadBirthday ? age : age - 1;
}
