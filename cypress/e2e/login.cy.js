///  <reference types="cypress"/> 

import { LoginPage } from "./pages/login_page.cy"

let loginPage = new LoginPage()

describe('All Login Tests', () => {


    //Positive Test

    it.only('Login Test 1', () => {


        loginPage.enterUsername('stefigrafy92@hotmail.com')
        loginPage.enterPassword('Code:Veronica')
        loginPage.clickLOgin()
        loginPage.assertConfirm()
        

    })

    //Negative Test

    it('Login Test 2', () => {


        loginPage.enterUsername('admin')
        loginPage.enterPassword('admin124')
        loginPage.clickLOgin()
        loginPage.assertConfirm()
    })

})
