import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroComponent } from "./hero.component"
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('heroComponent(Shallow Test)',()=>{
    let fixture : ComponentFixture<HeroComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have correct hero',()=>{

        fixture.componentInstance.hero = {id:1, name:'stive', strength: 9};
        
        expect(fixture.componentInstance.hero.name).toEqual('stive');
    })

    it('should render the hero name in anchor tag using nativeElement',()=>{

        fixture.componentInstance.hero = {id:1, name:'stive', strength: 9}; 
        fixture.detectChanges();
        
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('stive')
    })

    it('should render the hero name in anchor tag using dubugElement',()=>{

        fixture.componentInstance.hero = {id:1, name:'stive', strength: 9}; 
        fixture.detectChanges();
        
        expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('stive')
    })
})