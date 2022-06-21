import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public cookTime: number;
  public imageURL: string;
  public ingerdients: Ingredient[];
  public author: string;

  constructor(id: number, name: string, desc: string, imageURL: string, cookTime?: number, ingerdients?: Ingredient[], author?: string, ) {
    this.id = id
    this.name = name;
    this.description = desc;
    this.cookTime = cookTime;
    this.ingerdients = ingerdients;
    this.author = author;
    this.imageURL = imageURL;

  }

}
