import { fizzbuzz } from "./fizzbuzz";


describe('fizzbuzz', ()=>{
    it("should return [1] for input 1", ()=>{
        const result = fizzbuzz(1)
        expect(result).toEqual([1])
    })
})