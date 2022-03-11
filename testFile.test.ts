import { Builder, Capabilities } from "selenium-webdriver"

import {amazonPage} from "./pageObject"

const chromedriver= require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myTest = new amazonPage

test("Amazon HomeB Button", async () => {
    await myTest.navigate()
    await myTest.click(myTest.basicsBtn)
    await myTest.click(myTest.amazonHomeBtn)
    let response = await myTest.getText(myTest.ukraine)
    expect(Response).toContain("Help the people of Ukraine")
    
    });