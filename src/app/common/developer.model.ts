import { SkillModel } from "./skill.model";

export class DeveloperModel {
  public lastName: string;
  public firstName: string;
  public age: number;
  public sex: string;
  public bio: string;
  public skills: SkillModel[];

  constructor(lastName: string, firstName: string, age: number, sex: string, bio: string, skills: SkillModel[]) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.sex = sex;
    this.bio = bio;
    this.skills = skills;
  }
}
