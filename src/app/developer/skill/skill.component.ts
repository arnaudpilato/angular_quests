import {Component, Input, OnInit} from '@angular/core';
import {SkillModel} from "../../common/skill.model";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input()
  skill: SkillModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
