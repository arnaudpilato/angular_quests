import { Component, OnInit } from '@angular/core';
import {DeveloperModel} from "../common/developer.model";
import {SkillModel} from "../common/skill.model";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  public developer: DeveloperModel | undefined;

  constructor() { }

  ngOnInit(): void {
    this.developer = new DeveloperModel(
      "Mipoivre",
      "Michel",
      34,
      "masculin",
      "Développeur Web",
      [
        new SkillModel(
          'Wild Code School',
          'https://res.cloudinary.com/wildcodeschool/image/upload/c_fill,h_50/v1/static/irjoy97aq0eol8bf6959',
          'https://www.wildcodeschool.com/fr-FR'),

        new SkillModel(
          'Codewars',
          'https://www.codewars.com/assets/landing/logo-by-q-b02277e06ebda16eeaf3890c1c6b2e7fd35e8d8fd3ecdcc11061932cbbab9957.png',
          'https://www.codewars.com/')
      ]
    );
  }
}
