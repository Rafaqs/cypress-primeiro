///<reference types='cypress' />

export default{
    clicarLogin(){
        cy.get('#btnLogin')
            .click()
    },

    mensagemErro(mensagem){
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mensagem)
    },

    digitarEmail(email){
        cy.get('#user')
            .type(email)
    },

    digitarSenha(senha){
        cy.get('#password')
            .type(senha)
    },

    lembardeMim(){
        cy.get('#materialUnchecked')
            .check()
    },

    mensagemloginSucesso(sucesso){
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${sucesso}`)
    }

}