import { By, WebDriver } from "selenium-webdriver"; 
import {BasePage} from "./basePage" 

export class amazonPage extends BasePage {
    driver: WebDriver
    url: string

    searchBarInput: By = By.xpath('//input[@id="twotabsearchtextbox"]')
    golfBallResults: By = By.xpath('(//span[@class="a-size-medium a-color-base a-text-normal"])[1]')
    addToCartBtn: By = By.xpath('//input[@id="add-to-cart-button"]')
    magnifyingBtn: By = By.xpath('//input[@id="nav-search-submit-button"]')
    addToCartResults: By = By.xpath('(//span[@class="a-size-medium-plus a-color-base sw-atc-text a-text-bold"])')
    

    logInBtn: By = By.xpath ('(//span[@id="nav-link-accountList-nav-line-1"])')
    emailInput: By = By.xpath ('//input[@type="email"]') 
    continueBtn: By = By.xpath('(//input[@id="continue"])[1]') 
    passwordInput: By = By.xpath('(//input[@type="password"]) [1]') 
    signInBtn: By = By.xpath('(//input[@id="signInSubmit"])')

    flagBtn: By = By.xpath('//span[@class="icp-nav-flag icp-nav-flag-us"]')
    espanolBtn: By = By.xpath('(//i[@class="a-icon a-icon-radio"])[2]')
    saveChangesBtn: By = By.xpath('//input[@class="a-button-input"]')
    espanolResponse: By = By.xpath('(//span[@class="nav-line-2"])[3]')




    constructor() {
        super({url: 'https://www.amazon.com/ref=nav_logo'})
    }
}
