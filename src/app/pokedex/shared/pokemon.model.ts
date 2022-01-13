export class Pokemon {
  public name: string;
  public url: string;
  public description: string;

  constructor(name: string, url: string, description: string) {
    this.name = name;
    this.url = url;
    this.description = description;
  }
}
