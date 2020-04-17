import { HeroesComponent } from "./heroes.component"
import { of } from "rxjs";

describe('heroesComponent',()=>{
    let component : HeroesComponent;
    let HEROES;
    let mokHeroService;

    beforeEach(()=>{
        HEROES = [
            {id:1, name:'steve', strength: 8},
            {id:1, name:'Mark', strength: 9}
        ]

        mokHeroService  = jasmine.createSpyObj(['getHeroes','addHero','deleteHero'])
    
        component = new HeroesComponent(mokHeroService)
    })
    
    // to check state of the component change 
    describe('delete',()=>{
        it('should delete hero from the Heroes',()=>{
            
            mokHeroService.deleteHero.and.returnValue(of(true));

            component.heroes = HEROES;
            component.delete(HEROES[1]);

            expect(component.heroes.length).toBe(1);
        })

       // xit('should called deleteHero',()=>{
        it('should called deleteHero',()=>{

            mokHeroService.deleteHero.and.returnValue(of(true));

            component.heroes = HEROES;
            component.delete(HEROES[1]);

           // expect(mokHeroService.deleteHero).toHaveBeenCalledWith(HEROES[1])
             expect(mokHeroService.deleteHero).toHaveBeenCalled();
        })
    })

    // to check state of the component change 
    describe('add',()=>{
        it('should add hero to Heroes',()=>{

            mokHeroService.addHero.and.returnValue(of(true));

            component.heroes = HEROES;
            component.heroes.push({id:3, name:'peter', strength: 9});

            expect(component.heroes.length).toBe(3);
        })
    })
    
})