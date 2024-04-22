import { parse } from "date-fns";

export function parseDateTo(format: string, dateString: string): Date {
  return parse(dateString, format, new Date())
}

export function isWeekend(dateString: string): boolean {
  const IS_SUNDAY = 0
  const IS_SATURDAY = 6

  const date = parseDateTo('dd/MM/yyyy', dateString)
  return [IS_SUNDAY, IS_SATURDAY].includes(date.getDay());
}