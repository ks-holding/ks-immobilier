import { parseISO, format } from "date-fns";
const frenchLocale = require("date-fns/locale/fr");

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString);
  const newdate = new Date(dateString);
  const formattedDate = format(newdate, "dd MMMM yyyy", { locale: frenchLocale.default }).toString();
  return <div className="date">{formattedDate}</div>;
}
