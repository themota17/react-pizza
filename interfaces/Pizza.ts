import IPizzaThickness from "./PizzaThickness";
import IPizzaSizes from "./PizzaSizes";

export default interface IPizza {
  id: number;
  name: string;
  img: string;
  price: number;
  popularity: number;

  thickness: IPizzaThickness;
  sizes: IPizzaSizes;
  types: Array<string>;
}
