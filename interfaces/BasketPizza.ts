import IPizzaThickness from "@/interfaces/PizzaThickness";
import IPizzaSizes from "@/interfaces/PizzaSizes";

export default interface IBasketPizza {
  id: number;
  thickness: keyof IPizzaThickness;
  size: keyof IPizzaSizes;
}
