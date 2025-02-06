///<reference types="cypress" />
import { faker } from '@faker-js/faker';
import common_page from "../support/pages/common_page"
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page"



describe('Cadastro de usuário',()=>{

    beforeEach('Acessar cadastro de usuário',()=>{
        common_page.acessarCadastroUsuario()
    })

    it('Campo nome vazio',()=>{
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('campo email vazio',()=>{
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('campo email inválido',()=>{
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencherEmail(faker.person.firstName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('campo senha vazio',()=>{
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencherEmail(faker.internet.email())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('campo senha inválida',()=>{
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencherEmail(faker.internet.email())
        cadastro_usuario_page.preencherSenha('1234')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso',async ()=>{
        const name = await faker.person.fullName()
        cadastro_usuario_page.preencheNome(name)
        cadastro_usuario_page.preencherEmail(faker.internet.email())
        cadastro_usuario_page.preencherSenha('123479')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemSucesso(name)
    })
})