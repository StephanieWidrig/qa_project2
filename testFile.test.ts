import { Builder, Capabilities } from "selenium-webdriver"

import {amazonPage} from "./pageObject"

const chromedriver= require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myTest = new amazonPage

test("Testings login", async () => {
    await myTest.navigate()
    await myTest.click(myTest.accountsAndListBtn)
    await myTest.click(myTest.yourListBtn)
    await myTest.click(myTest.createListBtn)
    await myTest.setInput(myTest.listNameInput, "Test")
    await myTest.click(myTest.createList2Btn)
    let response = await myTest.getText(myTest.listResults)
    expect(Response).toContain("Test")
    
    });