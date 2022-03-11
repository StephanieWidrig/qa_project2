import { Builder, Capabilities } from "selenium-webdriver"

import {amazonPage} from "./pageObject"

const chromedriver= require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myTest = new amazonPage

test("Testings login", async () => {
    await myTest.navigate()
    await myTest.click(myTest.logInBtn)
    await myTest.setInput(myTest.emailInput, "ajt.shops@gmail.com")
    await myTest.click(myTest.continueBtn)
    await myTest.setInput(myTest.passwordInput, "Test1234!")
    await myTest.click(myTest.signInBtn)
    expect(Response).toContain("Top picks for you")
    
    });