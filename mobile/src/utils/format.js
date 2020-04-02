import "intl";
import "intl/locale-data/jsonp/pt-BR";

export const { format } = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});
