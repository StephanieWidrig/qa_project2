import { Builder, Capabilities } from "selenium-webdriver"

import {amazonPage} from "./pageObject"

const chromedriver= require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myTest = new amazonPage

test("Testing Add To Cart Function", async () =>{
    await myTest.navigate()
    await myTest.setInput(myTest.searchBarInput, "Golf balls")
    await myTest.click(myTest.magnifyingBtn)
    await myTest.click(myTest.golfBallResults)
    await myTest.click(myTest.addToCartBtn)
    let response = await myTest.getText(myTest.addToCartResults)
    expect(response).toContain( "Added to cart")
    

});

test("Testing language change", async () => {
    await myTest.navigate()
    await myTest.click(myTest.flagBtn)
    await myTest.click(myTest.espanolBtn)
    await myTest.click(myTest.saveChangesBtn)
    let response = await myTest.getText(myTest.espanolResponse)
    expect(response).toContain("Carrito")

});
