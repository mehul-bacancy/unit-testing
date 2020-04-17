import { StrengthPipe } from "./strength.pipe"
const currentVal= 0;
describe('StrengthPipe',()=>{
    it('should display weak if strength is 5',()=>{
        let pipe = new StrengthPipe();

        expect(pipe.transform(5)).toEqual('5 (weak)');
    })

    it('should display strong if strength is 10',()=>{
        let pipe = new StrengthPipe();

        expect(pipe.transform(10)).toEqual('10 (strong)')
    })

    it('should display weak truthy',()=>{
        let pipe = new StrengthPipe();

        expect(pipe.transform(5)).toBeTruthy();
    })

    it('should display Contains',()=>{
        let pipe = new StrengthPipe();

        expect([1,2,3,4]).toContain(4)
    })

    it('should display curent value is there or not',()=>{
        let pipe = new StrengthPipe();

        expect(this.currentVal).toBeUndefined()
        // expect(currentVal).toBeUndefined()
    })

})