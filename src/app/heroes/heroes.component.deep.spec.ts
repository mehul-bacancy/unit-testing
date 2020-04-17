import { HeroesComponent } from "./heroes.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input, DebugElement } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "../hero/hero.component";

describe('heroesComponent(Deep Test)',()=>{
    let fixture : ComponentFixture<HeroesComponent>;
    let mokHeroService;
    let HEROES;

  
      
    beforeEach(()=>{

        HEROES = [
            {id:1, name:'steve', strength: 8},
            {id:1, name:'Mark', strength: 9}
        ]
        mokHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                HeroComponent   
            ],
            providers: [
                { provide: HeroService, useValue: mokHeroService}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroesComponent);
       
    });

    it('should render each hero as heroComponent',()=>{

        mokHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));
        expect(heroComponentDEs.length).toBe(2);
        for( let i=0; i<heroComponentDEs.length; i++){
            
            expect(heroComponentDEs[i].componentInstance.hero).toEqual(HEROES[i]);
        }
    })


    it(`should call heroService.deleteHerowhen the hero component's delete button called`,()=>{
        spyOn(fixture.componentInstance,'delete');
        mokHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent));
        heroComponents[0].query(By.css('button')).triggerEventHandler('click',{stopPropagation: ()=>{}});

        expect(fixture.componentInstance.delete).toHaveBeenCalledWith(HEROES[0]);
    })
})