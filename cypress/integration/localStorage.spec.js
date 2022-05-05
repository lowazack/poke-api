describe('Test Local Storage', () => {
    it('should ', function () {
        cy.visit('http://localhost:3000/pokemon')

        cy.get('button[aria-label*="toggle-bulbasaur"]').click().should(()=> {
            expect(localStorage.getItem('savedPokemon')).to.eq(JSON.stringify(['bulbasaur']));
        })

        cy.get('button[aria-label*="toggle-charizard"]').click().should(()=> {
            expect(localStorage.getItem('savedPokemon')).to.eq(JSON.stringify(['bulbasaur', 'charizard']));
        })

        cy.get('button[aria-label*="toggle-bulbasaur"]').click().should(()=> {
            expect(localStorage.getItem('savedPokemon')).to.eq(JSON.stringify(['charizard']));
        })

    });
})
