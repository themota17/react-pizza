import IPizzaTypes from "./PizzaTypes";
import IPizzaSizes from "./PizzaSizes";

export default interface IPizza {
  id: number;
  name: string;
  img: string;
  price: number;
  types: IPizzaTypes;
  sizes: IPizzaSizes;
}
