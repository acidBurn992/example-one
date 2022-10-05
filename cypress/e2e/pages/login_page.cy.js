
export class LoginPage{


    username_textbox = '#inputEmail'
    password_textbox = '#inputPassword'
    login_button = '#btnLogin'
    assert = '#createButton'





    enterUsername(username) {
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password) {
        cy.get(this.password_textbox).type(password)
    }

    clickLOgin() {
        cy.get(this.login_button).click()
    }

    assertConfirm() {
        cy.get(this.assert).should('be.visible')
    }
}