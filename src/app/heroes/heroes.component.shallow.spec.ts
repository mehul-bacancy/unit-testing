import { HeroesComponent } from "./heroes.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input, DebugElement } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";

describe('heroesComponent(Shallow Test)',()=>{
    let fixture : ComponentFixture<HeroesComponent>;
    let mokHeroService;
    let HEROES;

    @Component({
        selector: 'app-hero',
        template: '<div></div>'
      })
      class fakeHeroComponent {
        @Input() hero: Hero;
        // @Output() delete = new EventEmitter();
      }
      
    beforeEach(()=>{

        HEROES = [
            {id:1, name:'steve', strength: 8},
            {id:1, name:'Mark', strength: 9}
        ]
        mokHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                fakeHeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mokHeroService}
            ],
            // schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('should set heroes from the service',()=>{

        mokHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(2);
    })

    it('should create one li to each hero',()=>{
       
        mokHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(2)
    })
})