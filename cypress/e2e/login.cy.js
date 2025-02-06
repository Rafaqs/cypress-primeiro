///<reference types='cypress' />
import { faker } from '@faker-js/faker';
import common_page from "../support/pages/common_page"
import login_page from "../support/pages/login_page"


describe('Login',()=>{
    beforeEach('Acessar login',()=>{
        common_page.acessarLogin()
    })

    it('Validar email em branco',()=>{
        login_page.clicarLogin()
        login_page.mensagemErro('E-mail inválido.')
    })

    it('Validar email inválido',()=>{
        login_page.digitarEmail(faker.person.firstName())
        login_page.clicarLogin()
        login_page.mensagemErro('E-mail inválido.')
    })

    it('Validar senha em branco',()=>{
        login_page.digitarEmail(faker.internet.email())
        login_page.clicarLogin()
        login_page.mensagemErro('Senha inválida.')
    })

    it('Validar senha inválida',()=>{
        login_page.digitarEmail(faker.internet.email())
        login_page.digitarSenha(123)
        login_page.clicarLogin()
        login_page.mensagemErro('Senha inválida.')
    })
    it('Validar marcação Lembrar de mim',()=>{
        login_page.digitarEmail(faker.internet.email())
        login_page.digitarSenha(123)
        login_page.clicarLogin()
        login_page.mensagemErro('Senha inválida.')
        login_page.lembardeMim()
    })

    it('Validar login com Sucesso',async()=>{
        const email = await faker.internet.email()
        
        login_page.digitarEmail(email)
        login_page.digitarSenha(123998)
        login_page.lembardeMim()
        login_page.clicarLogin()
        login_page.mensagemloginSucesso(email)
    })
})