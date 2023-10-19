const dateFormat = new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" });

export function formatDate(date: Date) {
  return dateFormat.format(date);
}
