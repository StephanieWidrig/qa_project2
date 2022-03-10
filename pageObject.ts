import { By, WebDriver } from "selenium-webdriver"; 
import {BasePage} from "./basePage" 

export class amazonPage extends BasePage {
    driver: WebDriver
    url: string

    searchBarInput: By = By.xpath('//input[@id="twotabsearchtextbox"]')
    golfBallResults: By = By.xpath('(//span[@class="a-size-medium a-color-base a-text-normal"])[1]')
    addToCartBtn: By = By.xpath('//input[@id="add-to-cart-button"]')

    magnifyingBtn: By = By.xpath('//input[@id="nav-search-submit-button"]')
    sunGlassesResults: By = By.xpath('//div[@class="s-desktop-width-max s-desktop-content s-opposite-dir sg-row"]')

    logInBtn: By = By.xpath ('(//span[@id="nav-link-accountList-nav-line-1"])')
    emailInput: By = By.xpath ('//input[@type="email"]') 
    continueBtn: By = By.xpath('(//input[@id="continue"])[1]') 
    passwordInput: By = By.xpath('(//input[@type="password"]) [1]') 
    signInBtn: By = By.xpath('(//input[@id="signInSubmit"])')


    constructor() {
        super({url: 'https://www.amazon.com/ref=nav_logo'})
    }
}
